import type { Metadata } from "next";
import { MapPin, Search, ShieldCheck, Sparkles } from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import FeaturedClinicList from "@/components/clinics/FeaturedClinicList";
import { clinics } from "@/lib/data/en/clinics";
import { siteConfig } from "@/lib/seo/site";

const pageTitle = "Korean Skin Clinics";
const pageDescription =
  "Compare trusted Korean dermatology and aesthetic clinics for skin boosters, lifting, lasers, Botox, fillers, acne scar treatments, and pigmentation care.";
const pageUrl = "/clinics";
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
        alt: "KSkinPick Korean skin clinics",
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

export default function ClinicsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
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
    about: {
      "@type": "MedicalBusiness",
      name: "Korean skin clinics for international patients",
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Korean Skin Clinics",
    itemListElement: clinics.map((clinic, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: clinic.name,
      url: absoluteUrl(`/clinics/${clinic.slug}`),
      image: absoluteUrl(clinic.coverImage),
      description: clinic.shortDescription,
    })),
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
        name: "Clinics",
        item: absoluteUrl("/clinics"),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(collectionSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(itemListSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(breadcrumbSchema),
        }}
      />

      <Header />

      <main className="min-h-screen bg-[#fbf7f2] pt-0 text-[#2f2926]">
        <section className="border-b border-[#eadfd7] bg-gradient-to-b from-white to-[#fbf7f2] py-14 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#eadfd7] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#c98f7d] shadow-sm">
                <Sparkles size={14} />
                Clinic Guide
              </div>

              <h1 className="font-serif text-4xl leading-tight text-[#2f2926] md:text-6xl">
                Find Korean skin clinics with confidence
              </h1>

              <p className="mt-5 text-base leading-7 text-[#6f6660] md:text-lg">
                Compare dermatology and aesthetic clinics in Korea by location,
                treatment focus, consultation style, and visitor-friendly
                support.
              </p>

              <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
                <div className="rounded-2xl border border-[#eadfd7] bg-white p-4 shadow-sm">
                  <Search className="mb-3 text-[#c98f7d]" size={20} />
                  <p className="text-sm font-semibold text-[#2f2926]">
                    Compare options
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#7a716b]">
                    Browse clinics by treatment focus and location.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#eadfd7] bg-white p-4 shadow-sm">
                  <MapPin className="mb-3 text-[#c98f7d]" size={20} />
                  <p className="text-sm font-semibold text-[#2f2926]">
                    Seoul locations
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#7a716b]">
                    Hongdae, Gangnam, Nonhyeon, Apgujeong and more.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#eadfd7] bg-white p-4 shadow-sm">
                  <ShieldCheck className="mb-3 text-[#c98f7d]" size={20} />
                  <p className="text-sm font-semibold text-[#2f2926]">
                    Visitor focused
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#7a716b]">
                    Check language support, consultation flow, and specialties.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <Container>
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c98f7d]">
                  Browse clinics
                </p>
                <h2 className="mt-2 font-serif text-3xl text-[#2f2926] md:text-4xl">
                  Featured Korean dermatology clinics
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-[#6f6660]">
                Start with curated clinics, then compare details such as
                treatments, location, gallery, and consultation support.
              </p>
            </div>

            <FeaturedClinicList />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}