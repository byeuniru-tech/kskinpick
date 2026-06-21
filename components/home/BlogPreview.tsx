import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import Container from "@/components/layout/Container";
import { featuredBlogPosts } from "@/lib/data/en/blog";

export default function BlogPreview() {
  const visibleBlogPosts = featuredBlogPosts.slice(0, 3);

  return (
    <section className="bg-[#fbf7f2] py-16 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#e84d67]">
              Latest Articles
            </p>

            <h2 className="font-serif text-4xl font-medium tracking-[-0.04em] text-[#101827] md:text-5xl">
              Korean Skin Clinic Guides
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#6b7280]">
              Practical articles about Korean treatments, clinic comparisons,
              downtime, costs, and booking tips for international visitors.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#e84d67]"
          >
            View all articles
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {visibleBlogPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`
                group overflow-hidden rounded-[1.6rem]
                border border-[#eadfd7]
                bg-white
                shadow-[0_12px_35px_rgba(16,24,39,0.04)]
                transition
                hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(16,24,39,0.08)]
                ${index >= 2 ? "hidden md:block" : ""}
              `}
            >
              <div className="h-44 overflow-hidden bg-[#f4eee8]">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#ffe8ed] px-3 py-1 text-[11px] font-semibold text-[#e84d67]">
                    {post.category}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs text-[#6b7280]">
                    <Clock size={13} className="text-[#e84d67]" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="line-clamp-2 text-xl font-bold tracking-[-0.03em] text-[#101827]">
                  {post.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6b7280]">
                  {post.excerpt}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#e84d67]">
                  Read article
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}