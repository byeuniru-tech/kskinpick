import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CalendarDays, Clock, Sparkles } from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { blogPosts } from "@/lib/data/en/blog";
import { siteConfig } from "@/lib/seo/site";

const pageTitle = "Korean Skin Clinic Blog";
const pageDescription =
  "Read Korean skin clinic guides, treatment comparisons, cost guides, safety tips, and travel advice for international patients.";
const pageUrl = "/blog";
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
  title: pageTitle,
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
        alt: "KSkinPick Korean skin clinic blog",
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

export default function BlogPage() {
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
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "KSkinPick Blog Articles",
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
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
        name: "Blog",
        item: absoluteUrl("/blog"),
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

      <main className="bg-[#fbf7f2] pt-0">
        <section className="py-12 md:py-20">
          <Container>
            <div className="mb-10 md:mb-14">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#e84d67]">
                Blog
              </p>

              <h1 className="max-w-4xl font-serif text-4xl font-medium tracking-[-0.04em] text-[#101827] md:text-6xl">
                Korean Skin Clinic Guides for International Patients
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#6b7280]">
                Practical articles about Korean skin treatments, clinic
                comparisons, costs, downtime, safety, and booking tips.
              </p>
            </div>

            {blogPosts.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {blogPosts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group overflow-hidden rounded-[1.6rem] border border-[#eadfd7] bg-white shadow-[0_12px_35px_rgba(16,24,39,0.04)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,24,39,0.08)]"
                  >
                    <div className="relative h-48 overflow-hidden bg-[#f4eee8]">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        priority={index < 3}
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#e84d67] shadow-md">
                        <Sparkles size={14} />
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium text-[#6b7280]">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={14} className="text-[#e84d67]" />
                          {post.readingTime}
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={14} className="text-[#e84d67]" />
                          {post.publishedAt}
                        </span>
                      </div>

                      <h2 className="line-clamp-2 text-2xl font-bold tracking-[-0.03em] text-[#101827]">
                        {post.title}
                      </h2>

                      <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#6b7280]">
                        {post.excerpt}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-[#f0e5dd] pt-5">
                        <span className="text-sm font-semibold text-[#e84d67]">
                          Read article
                        </span>

                        <ArrowRight
                          size={18}
                          className="text-[#e84d67] transition group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-8 text-center shadow-sm">
                <h2 className="font-serif text-2xl font-medium text-[#101827]">
                  More articles are coming soon.
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#6b7280]">
                  We are preparing more practical guides for international
                  patients visiting Korean skin clinics.
                </p>
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}