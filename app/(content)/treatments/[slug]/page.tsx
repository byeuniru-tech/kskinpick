import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { getTreatmentBySlug, treatments } from "@/lib/data/en/treatments";
import { siteConfig } from "@/lib/seo/site";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

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

export function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return {
      title: "Treatment Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${treatment.name} in Korea | Treatment Guide`;
  const description = treatment.shortDescription;
  const pageUrl = `/treatments/${treatment.slug}`;
  const imageUrl = absoluteUrl(treatment.image);

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${treatment.name} in Korea | ${siteConfig.displayName}`,
      description,
      url: pageUrl,
      siteName: siteConfig.displayName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 900,
          alt: `${treatment.name} treatment guide in Korea`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${treatment.name} in Korea | ${siteConfig.displayName}`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  const relatedTreatments = treatments
    .filter(
      (item) =>
        item.category === treatment.category && item.slug !== treatment.slug
    )
    .slice(0, 3);

  const pageUrl = absoluteUrl(`/treatments/${treatment.slug}`);
  const imageUrl = absoluteUrl(treatment.image);

  const treatmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `${treatment.name} in Korea`,
    description: treatment.shortDescription,
    url: pageUrl,
    image: imageUrl,
    about: {
      "@type": "MedicalProcedure",
      name: treatment.name,
      description: treatment.overview,
      procedureType: treatment.category,
      bodyLocation: "Skin",
      preparation: treatment.beforeBooking,
      followup: treatment.sessionPlan,
    },
    audience: {
      "@type": "Audience",
      audienceType: "International patients considering skin treatments in Korea",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.displayName,
      url: siteConfig.url,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: treatment.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
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
      {
        "@type": "ListItem",
        position: 3,
        name: treatment.name,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(treatmentSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(breadcrumbSchema),
        }}
      />

      <Header />

      <main className="min-h-screen bg-[#fbf7f2] pt-24 text-[#2f2926]">
        <section className="border-b border-[#eadfd7] bg-white py-8">
          <Container>
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#8c7f76] transition hover:text-[#c98f7d]"
            >
              <ArrowLeft size={16} />
              Back to treatments
            </Link>
          </Container>
        </section>

        <section className="bg-gradient-to-b from-white to-[#fbf7f2] py-10 md:py-16">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#eadfd7] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#c98f7d]">
                  <Sparkles size={14} />
                  {treatment.category}
                </div>

                <h1 className="font-serif text-4xl leading-tight md:text-6xl">
                  {treatment.name} in Korea
                </h1>

                <p className="mt-5 text-lg leading-8 text-[#6f6660]">
                  {treatment.shortDescription}
                </p>

                <div className="mt-7 rounded-[2rem] border border-[#eadfd7] bg-white p-5 shadow-sm">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c98f7d]">
                    Quick answer
                  </p>
                  <p className="text-sm leading-7 text-[#4c4540]">
                    {treatment.quickAnswer}
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-[#eadfd7] bg-[#f1e7de] shadow-xl">
                <Image
                  src={treatment.image}
                  alt={`${treatment.name} treatment in Korea`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr]">
              <article className="space-y-8">
                <section className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 shadow-sm md:p-8">
                  <h2 className="font-serif text-3xl">Overview</h2>
                  <p className="mt-4 text-base leading-8 text-[#6f6660]">
                    {treatment.overview}
                  </p>
                </section>

                <section className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 shadow-sm">
                    <h2 className="font-serif text-2xl">Best for</h2>
                    <ul className="mt-5 space-y-3">
                      {treatment.bestFor.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-[#6f6660]"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-[#c98f7d]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 shadow-sm">
                    <h2 className="font-serif text-2xl">Not ideal for</h2>
                    <ul className="mt-5 space-y-3">
                      {treatment.notIdealFor.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-[#6f6660]"
                        >
                          <ShieldCheck
                            size={18}
                            className="mt-0.5 shrink-0 text-[#8c7f76]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 shadow-sm md:p-8">
                  <h2 className="font-serif text-3xl">Benefits</h2>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {treatment.benefits.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-[#fbf7f2] p-4 text-sm leading-6 text-[#5f554f]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 shadow-sm">
                    <h2 className="font-serif text-2xl">Downtime</h2>
                    <p className="mt-4 text-sm leading-7 text-[#6f6660]">
                      {treatment.downtime}
                    </p>
                  </div>

                  <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 shadow-sm">
                    <h2 className="font-serif text-2xl">Session plan</h2>
                    <p className="mt-4 text-sm leading-7 text-[#6f6660]">
                      {treatment.sessionPlan}
                    </p>
                  </div>
                </section>

                <section className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 shadow-sm md:p-8">
                  <h2 className="font-serif text-3xl">Before booking</h2>
                  <ul className="mt-5 grid gap-3 md:grid-cols-2">
                    {treatment.beforeBooking.map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl border border-[#eadfd7] bg-[#fbf7f2] p-4 text-sm leading-6 text-[#5f554f]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 shadow-sm md:p-8">
                  <h2 className="font-serif text-3xl">FAQ</h2>
                  <div className="mt-5 space-y-4">
                    {treatment.faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="rounded-2xl bg-[#fbf7f2] p-5"
                      >
                        <div className="flex gap-3">
                          <HelpCircle
                            size={18}
                            className="mt-0.5 shrink-0 text-[#c98f7d]"
                          />
                          <div>
                            <h3 className="font-semibold text-[#2f2926]">
                              {faq.question}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-[#6f6660]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </article>

              <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 shadow-sm">
                  <h2 className="font-serif text-2xl">Related specialties</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {treatment.relatedClinicSpecialties.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#fbf7f2] px-3 py-2 text-xs font-semibold text-[#6f6660]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {relatedTreatments.length > 0 && (
                  <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 shadow-sm">
                    <h2 className="font-serif text-2xl">Related guides</h2>
                    <div className="mt-4 space-y-3">
                      {relatedTreatments.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/treatments/${item.slug}`}
                          className="block rounded-2xl bg-[#fbf7f2] p-4 transition hover:bg-[#f3e8df]"
                        >
                          <p className="font-semibold text-[#2f2926]">
                            {item.name}
                          </p>
                          <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#6f6660]">
                            {item.shortDescription}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}