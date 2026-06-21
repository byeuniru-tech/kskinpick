import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/lib/seo/site";

const pageTitle = "Free Consultation";
const pageDescription =
  "Submit a consultation request to KSkinPick and get help comparing Korean skin clinic options for your treatment goals, travel schedule, and preferred area.";
const pageUrl = "/contact";
const ogImage = "/brand/kskinpick-og.jpg";

function absoluteUrl(path: string) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  if (path.startsWith("http")) {
    return path;
  }

  if (path.startsWith("/")) {
    return `${baseUrl}${path}`;
  }

  return `${baseUrl}/${path}`;
}

function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const metadata: Metadata = {
  title: `${pageTitle} | ${siteConfig.displayName}`,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `${pageTitle} | ${siteConfig.displayName}`,
    description: pageDescription,
    url: pageUrl,
    siteName: siteConfig.displayName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "KSkinPick free consultation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteConfig.displayName}`,
    description: pageDescription,
    images: [ogImage],
  },
};

export default function ContactPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `${pageTitle} | ${siteConfig.displayName}`,
    description: pageDescription,
    url: absoluteUrl(pageUrl),
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.displayName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.displayName,
      url: siteConfig.url,
    },
  };

  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.displayName,
    url: siteConfig.url,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English"],
      areaServed: {
        "@type": "Country",
        name: "South Korea",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: absoluteUrl("/contact"),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(contactPointSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(breadcrumbSchema),
        }}
      />

      <Header />

      <main className="bg-[#fbf7f2] pt-24">
        <section className="py-14 md:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#e84d67]">
                  Free Consultation
                </p>

                <h1 className="font-serif text-5xl font-medium tracking-[-0.04em] text-[#101827] md:text-7xl">
                  Get Help Finding the Right Korean Skin Clinic
                </h1>

                <p className="mt-6 text-lg leading-9 text-[#6b7280]">
                  Tell us your basic information, preferred contact method, and
                  what kind of treatment or clinic you are looking for. We will
                  review your request and help you narrow down suitable options
                  in Korea.
                </p>

                <div className="mt-8 rounded-[2rem] border border-[#eadfd7] bg-white p-6">
                  <h2 className="text-xl font-bold text-[#101827]">
                    Helpful details to include
                  </h2>

                  <ul className="mt-5 space-y-3 text-sm leading-6 text-[#6b7280]">
                    <li>• Treatment you are interested in</li>
                    <li>• Preferred clinic area such as Gangnam or Hongdae</li>
                    <li>• Travel dates or preferred appointment date</li>
                    <li>• Budget range if you have one</li>
                    <li>
                      • Skin concerns, past treatments, or preferred clinic
                      style
                    </li>
                  </ul>
                </div>

                <div className="mt-6 rounded-[2rem] border border-[#eadfd7] bg-white p-6">
                  <h2 className="text-xl font-bold text-[#101827]">
                    Before you submit
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                    KSkinPick is not a medical provider and does not make medical
                    decisions. Final treatment recommendations should be made
                    after consultation with a qualified clinic or medical
                    professional.
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}