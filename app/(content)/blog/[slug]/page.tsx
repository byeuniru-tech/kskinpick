import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, CalendarDays, Clock, HelpCircle } from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/en/blog";
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
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageUrl = `/blog/${post.slug}`;
  const imageUrl = absoluteUrl(post.coverImage);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${post.title} | ${siteConfig.displayName}`,
      description: post.excerpt,
      url: pageUrl,
      siteName: siteConfig.displayName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 900,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${siteConfig.displayName}`,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const pageUrl = absoluteUrl(`/blog/${post.slug}`);
  const imageUrl = absoluteUrl(post.coverImage);

  const articleBody = post.content
    .map((section) => {
      return `${section.heading}\n${section.body.join("\n")}`;
    })
    .join("\n\n");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    url: pageUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    articleSection: post.category,
    articleBody,
    inLanguage: "en",
    isPartOf: {
      "@type": "Blog",
      name: "KSkinPick Blog",
      url: absoluteUrl("/blog"),
    },
    author: {
      "@type": "Organization",
      name: siteConfig.displayName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.displayName,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
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
        name: "Blog",
        item: absoluteUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(articleSchema),
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

      <main className="bg-[#fbf7f2] pt-24">
        <article>
          <section className="py-8 md:py-12">
            <Container>
              <Link
                href="/blog"
                className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#6b7280] transition hover:text-[#e84d67]"
              >
                <ArrowLeft size={16} />
                Back to blog
              </Link>

              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative h-[280px] overflow-hidden rounded-[2rem] bg-white md:h-[520px]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 md:p-8">
                  <p className="mb-4 inline-flex rounded-full bg-[#ffe8ed] px-3 py-1.5 text-xs font-semibold text-[#e84d67]">
                    {post.category}
                  </p>

                  <h1 className="font-serif text-4xl font-medium tracking-[-0.04em] text-[#101827] md:text-6xl">
                    {post.title}
                  </h1>

                  <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#6b7280]">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={15} className="text-[#e84d67]" />
                      {post.readingTime}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={15} className="text-[#e84d67]" />
                      {post.publishedAt}
                    </span>
                  </div>

                  <p className="mt-6 text-base leading-8 text-[#6b7280]">
                    {post.excerpt}
                  </p>

                  <div className="mt-8">
                    <Button href="/contact" icon={<CalendarDays size={18} />}>
                      Free Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="pb-14 md:pb-20">
            <Container>
              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                <aside className="hidden h-fit rounded-[2rem] border border-[#eadfd7] bg-white p-6 lg:sticky lg:top-28 lg:block">
                  <h2 className="text-lg font-bold text-[#101827]">
                    Need help choosing a clinic?
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                    Tell us your treatment goals, preferred area, and travel
                    schedule. KSkinPick can help you narrow down suitable Korean
                    skin clinic options.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#e84d67] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                  >
                    Get Recommendations
                  </Link>
                </aside>

                <div>
                  <div className="space-y-6 md:hidden">
                    {post.content.map((section, index) => (
                      <details
                        key={section.heading}
                        open={index === 0}
                        className="group rounded-[2rem] border border-[#eadfd7] bg-white p-6"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                          <h2 className="font-serif text-2xl font-medium text-[#101827]">
                            {section.heading}
                          </h2>

                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#eadfd7] text-xl font-medium text-[#e84d67] transition group-open:rotate-45">
                            +
                          </span>
                        </summary>

                        <div className="mt-6 space-y-5">
                          {section.body.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-base leading-8 text-[#6b7280]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </details>
                    ))}
                  </div>

                  <div className="hidden space-y-6 md:block">
                    {post.content.map((section) => (
                      <section
                        key={section.heading}
                        className="rounded-[2rem] border border-[#eadfd7] bg-white p-8"
                      >
                        <h2 className="mb-5 font-serif text-3xl font-medium text-[#101827]">
                          {section.heading}
                        </h2>

                        <div className="space-y-5">
                          {section.body.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-base leading-8 text-[#6b7280]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[2rem] border border-[#eadfd7] bg-white p-6 lg:hidden">
                    <h2 className="text-lg font-bold text-[#101827]">
                      Need help choosing a clinic?
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-[#6b7280]">
                      Tell us your treatment goals and travel schedule.
                      KSkinPick can help you compare suitable Korean skin clinic
                      options.
                    </p>

                    <Link
                      href="/contact"
                      className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#e84d67] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                    >
                      Free Consultation
                    </Link>
                  </div>

                  <section className="mt-6 rounded-[2rem] border border-[#eadfd7] bg-white p-6 md:p-8">
                    <h2 className="mb-5 font-serif text-3xl font-medium text-[#101827]">
                      FAQ
                    </h2>

                    <div className="space-y-3 md:hidden">
                      {post.faqs.map((item) => (
                        <details
                          key={item.question}
                          className="group rounded-2xl border border-[#eadfd7] bg-[#fbf7f2] p-5"
                        >
                          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                            <h3 className="flex items-start gap-2 font-semibold text-[#101827]">
                              <HelpCircle
                                size={18}
                                className="mt-0.5 shrink-0 text-[#e84d67]"
                              />
                              {item.question}
                            </h3>

                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#eadfd7] bg-white text-[#e84d67] transition group-open:rotate-45">
                              +
                            </span>
                          </summary>

                          <p className="mt-4 pl-7 text-sm leading-7 text-[#6b7280]">
                            {item.answer}
                          </p>
                        </details>
                      ))}
                    </div>

                    <div className="hidden space-y-4 md:block">
                      {post.faqs.map((item) => (
                        <div
                          key={item.question}
                          className="rounded-2xl border border-[#eadfd7] bg-[#fbf7f2] p-5"
                        >
                          <h3 className="flex items-start gap-2 font-semibold text-[#101827]">
                            <HelpCircle
                              size={18}
                              className="mt-0.5 shrink-0 text-[#e84d67]"
                            />
                            {item.question}
                          </h3>

                          <p className="mt-3 pl-7 text-sm leading-7 text-[#6b7280]">
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </Container>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}