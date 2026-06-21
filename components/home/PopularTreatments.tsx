import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/layout/Container";
import { featuredTreatments } from "@/lib/data/en/treatments";

export default function PopularTreatments() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#e84d67]">
              Treatments
            </p>

            <h2 className="font-serif text-4xl font-medium tracking-[-0.04em] text-[#101827] md:text-5xl">
              Popular Korean Skin Treatments
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#6b7280]">
              Learn what each treatment is for, who it may suit, and what to ask
              before booking a clinic in Korea.
            </p>
          </div>

          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#e84d67]"
          >
            View all treatments
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredTreatments.map((treatment) => (
            <Link
              key={treatment.slug}
              href={`/treatments/${treatment.slug}`}
              className="group overflow-hidden rounded-[1.6rem] border border-[#eadfd7] bg-[#fbf7f2] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,24,39,0.08)]"
            >
              <div className="h-44 overflow-hidden bg-[#f4eee8]">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#e84d67]">
                  {treatment.category}
                </span>

                <h3 className="mt-4 text-xl font-bold tracking-[-0.03em] text-[#101827]">
                  {treatment.name}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6b7280]">
                  {treatment.shortDescription}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#e84d67]">
                  View treatment
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