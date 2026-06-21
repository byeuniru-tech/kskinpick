import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { treatmentCategories, treatments } from "@/lib/data/en/treatments";
import { siteConfig } from "@/lib/seo/site";

const pageTitle = "Korean Skin Treatments";
const pageDescription =
  "Explore popular Korean skin treatments including Rejuran, Juvelook, Botox, Ultherapy, Thermage, Potenza, Pico Laser, skin boosters, lifting, acne scar treatments, and pigmentation care.";
const pageUrl = "/treatments";
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
        alt: "KSkinPick Korean skin treatments",
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

export default function TreatmentsPage() {
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
      "@type": "MedicalProcedure",
      name: "Korean skin treatments",
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Korean Skin Treatment Guides",
    itemListElement: treatments.map((treatment, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: treatment.name,
      url: absoluteUrl(`/treatments/${treatment.slug}`),
      image: absoluteUrl(treatment.image),
      description: treatment.shortDescription,
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
        name: "Treatments",
        item: absoluteUrl("/treatments"),
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
                Korean Treatment Guide
              </div>

              <h1 className="font-serif text-4xl leading-tight text-[#2f2926] md:text-6xl">
                Popular skin treatments in Korea
              </h1>

              <p className="mt-5 text-base leading-7 text-[#6f6660] md:text-lg">
                Compare Korea’s most searched skin boosters, injectables,
                lifting devices, acne scar treatments, and pigmentation lasers
                before choosing a clinic.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <Container>
            <div className="space-y-14">
              {treatmentCategories.map((category) => {
                const categoryTreatments = treatments.filter(
                  (treatment) => treatment.category === category
                );

                if (categoryTreatments.length === 0) {
                  return null;
                }

                return (
                  <section key={category}>
                    <div className="mb-6 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c98f7d]">
                          {category}
                        </p>
                        <h2 className="mt-2 font-serif text-2xl text-[#2f2926] md:text-3xl">
                          {category} treatments
                        </h2>
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {categoryTreatments.map((treatment, index) => (
                        <Link
                          key={treatment.slug}
                          href={`/treatments/${treatment.slug}`}
                          className="group overflow-hidden rounded-[2rem] border border-[#eadfd7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden bg-[#f1e7de]">
                            <Image
                              src={treatment.image}
                              alt={`${treatment.name} treatment in Korea`}
                              fill
                              priority={index < 3}
                              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#c98f7d] backdrop-blur">
                              {treatment.category}
                            </div>
                          </div>

                          <div className="p-5 md:p-6">
                            <h3 className="font-serif text-2xl text-[#2f2926]">
                              {treatment.name}
                            </h3>

                            <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6f6660]">
                              {treatment.shortDescription}
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#c98f7d]">
                              View guide
                              <ArrowRight
                                size={16}
                                className="transition group-hover:translate-x-1"
                              />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}