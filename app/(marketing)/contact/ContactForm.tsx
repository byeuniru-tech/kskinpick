"use client";

import { useState } from "react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      nationality: String(formData.get("nationality") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      contactMethod: String(formData.get("contactMethod") || "").trim(),
      contactId: String(formData.get("contactId") || "").trim(),
      treatment: String(formData.get("treatment") || "").trim(),
      preferredArea: String(formData.get("preferredArea") || "").trim(),
      travelDate: String(formData.get("travelDate") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Failed to submit request.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <div className="rounded-[2.5rem] border border-[#eadfd7] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,39,0.06)] md:p-8">
      <h2 className="text-2xl font-bold text-[#101827]">
        Consultation Request
      </h2>

      <p className="mt-2 text-sm leading-6 text-[#6b7280]">
        Submit your request and we will review your details.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#101827]">
            Name *
          </label>
          <input
            name="name"
            required
            type="text"
            placeholder="Your name"
            className="w-full rounded-2xl border border-[#eadfd7] bg-[#fbf7f2] px-4 py-3 text-sm outline-none transition focus:border-[#e84d67]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#101827]">
            Nationality *
          </label>
          <input
            name="nationality"
            required
            type="text"
            placeholder="Your nationality"
            className="w-full rounded-2xl border border-[#eadfd7] bg-[#fbf7f2] px-4 py-3 text-sm outline-none transition focus:border-[#e84d67]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#101827]">
            Email *
          </label>
          <input
            name="email"
            required
            type="email"
            placeholder="your@email.com"
            className="w-full rounded-2xl border border-[#eadfd7] bg-[#fbf7f2] px-4 py-3 text-sm outline-none transition focus:border-[#e84d67]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#101827]">
            Preferred Contact Method *
          </label>
          <select
            name="contactMethod"
            required
            defaultValue=""
            className="w-full rounded-2xl border border-[#eadfd7] bg-[#fbf7f2] px-4 py-3 text-sm outline-none transition focus:border-[#e84d67]"
          >
            <option value="" disabled>
              Select contact method
            </option>
            <option value="Email">Email</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="LINE">LINE</option>
            <option value="WeChat">WeChat</option>
            <option value="KakaoTalk">KakaoTalk</option>
            <option value="Telegram">Telegram</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#101827]">
            Contact ID / Number
          </label>
          <input
            name="contactId"
            type="text"
            placeholder="WhatsApp number, LINE ID, WeChat ID, KakaoTalk ID, etc."
            className="w-full rounded-2xl border border-[#eadfd7] bg-[#fbf7f2] px-4 py-3 text-sm outline-none transition focus:border-[#e84d67]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#101827]">
            Interested Treatment
          </label>
          <input
            name="treatment"
            type="text"
            placeholder="Rejuran, Juvelook, Ultherapy, Botox, acne scars, etc."
            className="w-full rounded-2xl border border-[#eadfd7] bg-[#fbf7f2] px-4 py-3 text-sm outline-none transition focus:border-[#e84d67]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#101827]">
            Preferred Clinic Area
          </label>
          <input
            name="preferredArea"
            type="text"
            placeholder="Gangnam, Hongdae, Myeongdong, no preference, etc."
            className="w-full rounded-2xl border border-[#eadfd7] bg-[#fbf7f2] px-4 py-3 text-sm outline-none transition focus:border-[#e84d67]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#101827]">
            Travel / Preferred Date
          </label>
          <input
            name="travelDate"
            type="text"
            placeholder="Example: July 10–15, 2026"
            className="w-full rounded-2xl border border-[#eadfd7] bg-[#fbf7f2] px-4 py-3 text-sm outline-none transition focus:border-[#e84d67]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#101827]">
            Message *
          </label>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Tell us your goals, skin concerns, travel dates, budget, preferred clinic style, or anything you want us to know."
            className="w-full resize-none rounded-2xl border border-[#eadfd7] bg-[#fbf7f2] px-4 py-3 text-sm outline-none transition focus:border-[#e84d67]"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-full bg-[#e84d67] px-6 py-4 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Submitting..." : "Submit Request"}
        </button>

        {status === "success" && (
          <p className="rounded-2xl bg-green-50 px-4 py-3 text-center text-sm font-semibold text-green-700">
            Your request has been submitted successfully. We will review your
            details and contact you soon.
          </p>
        )}

        {status === "error" && (
          <p className="rounded-2xl bg-red-50 px-4 py-3 text-center text-sm font-semibold text-red-600">
            {errorMessage || "Something went wrong. Please try again."}
          </p>
        )}

        <p className="text-center text-xs leading-5 text-[#6b7280]">
          KSkinPick is not a medical provider. Treatment decisions should be made
          after consultation with a qualified clinic.
        </p>
      </form>
    </div>
  );
}