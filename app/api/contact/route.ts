import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  nationality?: string;
  email?: string;
  contactMethod?: string;
  contactId?: string;
  treatment?: string;
  preferredArea?: string;
  travelDate?: string;
  message?: string;
  website?: string;
};

function clean(value: unknown, maxLength = 1000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;border:1px solid #eadfd7;background:#fbf7f2;font-weight:700;width:180px;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 12px;border:1px solid #eadfd7;">
        ${escapeHtml(value || "-")}
      </td>
    </tr>
  `;
}

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (!resendApiKey || !contactFromEmail || !contactToEmail) {
      return NextResponse.json(
        {
          message:
            "Email service is not configured. Missing Resend environment variables.",
        },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactPayload;

    const website = clean(body.website, 200);

    // Honeypot spam protection.
    // Real users will not fill this hidden field.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 120);
    const nationality = clean(body.nationality, 120);
    const email = clean(body.email, 200);
    const contactMethod = clean(body.contactMethod, 80);
    const contactId = clean(body.contactId, 200);
    const treatment = clean(body.treatment, 200);
    const preferredArea = clean(body.preferredArea, 200);
    const travelDate = clean(body.travelDate, 200);
    const message = clean(body.message, 3000);

    if (!name || !nationality || !email || !contactMethod || !message) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const resend = new Resend(resendApiKey);

    const submittedAt = new Date().toISOString();

    const ownerSubject = `New KSkinPick Consultation Request - ${name}`;

    const ownerHtml = `
      <div style="font-family:Arial,sans-serif;color:#101827;line-height:1.6;">
        <h1 style="margin:0 0 16px;font-size:24px;">New KSkinPick Consultation Request</h1>
        <p style="margin:0 0 20px;color:#6b7280;">
          A new consultation request was submitted from the KSkinPick contact form.
        </p>

        <table style="border-collapse:collapse;width:100%;max-width:760px;font-size:14px;">
          ${row("Name", name)}
          ${row("Nationality", nationality)}
          ${row("Email", email)}
          ${row("Preferred Contact", contactMethod)}
          ${row("Contact ID / Number", contactId)}
          ${row("Interested Treatment", treatment)}
          ${row("Preferred Area", preferredArea)}
          ${row("Travel / Preferred Date", travelDate)}
          ${row("Submitted At", submittedAt)}
        </table>

        <h2 style="margin:28px 0 10px;font-size:18px;">Message</h2>
        <div style="white-space:pre-wrap;border:1px solid #eadfd7;background:#fbf7f2;border-radius:16px;padding:16px;">
          ${escapeHtml(message)}
        </div>
      </div>
    `;

    const ownerText = `
New KSkinPick Consultation Request

Name: ${name}
Nationality: ${nationality}
Email: ${email}
Preferred Contact: ${contactMethod}
Contact ID / Number: ${contactId || "-"}
Interested Treatment: ${treatment || "-"}
Preferred Area: ${preferredArea || "-"}
Travel / Preferred Date: ${travelDate || "-"}
Submitted At: ${submittedAt}

Message:
${message}
    `.trim();

    const customerSubject = "We received your KSkinPick consultation request";

    const customerHtml = `
      <div style="font-family:Arial,sans-serif;color:#101827;line-height:1.7;">
        <h1 style="margin:0 0 16px;font-size:24px;">Thank you for contacting KSkinPick</h1>

        <p>Hello ${escapeHtml(name)},</p>

        <p>
          We received your consultation request. We will review your details and contact you through your preferred contact method as soon as possible.
        </p>

        <div style="margin:24px 0;border:1px solid #eadfd7;background:#fbf7f2;border-radius:16px;padding:16px;">
          <p style="margin:0 0 8px;"><strong>Preferred contact method:</strong> ${escapeHtml(contactMethod)}</p>
          <p style="margin:0 0 8px;"><strong>Interested treatment:</strong> ${escapeHtml(treatment || "-")}</p>
          <p style="margin:0;"><strong>Preferred area:</strong> ${escapeHtml(preferredArea || "-")}</p>
        </div>

        <p style="color:#6b7280;font-size:13px;">
          KSkinPick is not a medical provider. Treatment decisions should be made after consultation with a qualified clinic or medical professional.
        </p>
      </div>
    `;

    const customerText = `
Hello ${name},

We received your KSkinPick consultation request.

Preferred contact method: ${contactMethod}
Interested treatment: ${treatment || "-"}
Preferred area: ${preferredArea || "-"}

We will review your details and contact you as soon as possible.

KSkinPick is not a medical provider. Treatment decisions should be made after consultation with a qualified clinic or medical professional.
    `.trim();

    const ownerResult = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      replyTo: email,
      subject: ownerSubject,
      html: ownerHtml,
      text: ownerText,
    });

    if (ownerResult.error) {
      return NextResponse.json(
        { message: ownerResult.error.message || "Failed to send request." },
        { status: 500 }
      );
    }

    const customerResult = await resend.emails.send({
      from: contactFromEmail,
      to: [email],
      replyTo: contactToEmail,
      subject: customerSubject,
      html: customerHtml,
      text: customerText,
    });

    if (customerResult.error) {
      // Owner email was already sent, so do not fail the whole request.
      console.error("Customer confirmation email failed:", customerResult.error);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}