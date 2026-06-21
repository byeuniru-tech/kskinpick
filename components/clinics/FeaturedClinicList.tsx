import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";

import Container from "@/components/layout/Container";
import { clinics } from "@/lib/data/en/clinics";

export default function FeaturedClinicList() {
  return (
    <section className="bg-[#fbf7f2] py-10 md:py-16">
      <Container>
        <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#e84d67]">
              Clinics
            </p>

            <h1 className="max-w-3xl font-serif text-4xl font-medium tracking-[-0.04em] text-[#101827] md:text-6xl">
              Compare Korean Skin Clinics
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#6b7280]">
              Browse curated Korean skin clinics by location, specialty, and
              visitor-friendly support.
            </p>
          </div>

          <div className="hidden rounded-full border border-[#eadfd7] bg-white px-5 py-3 text-sm font-medium text-[#6b7280] md:block">
            {clinics.length} clinics listed
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {clinics.map((clinic) => (
            <Link
              key={clinic.slug}
              href={`/clinics/${clinic.slug}`}
              className="group overflow-hidden rounded-[1.5rem] border border-[#eadfd7] bg-white shadow-[0_10px_30px_rgba(16,24,39,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,24,39,0.08)]"
            >
              <div className="flex gap-4 p-4">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-[#f4eee8] md:h-32 md:w-32">
                  <img
                    src={clinic.coverImage}
                    alt={clinic.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#ffe8ed] px-2.5 py-1 text-[11px] font-semibold text-[#e84d67]">
                    <Sparkles size={12} />
                    Curated
                  </div>

                  <h2 className="line-clamp-1 text-lg font-bold tracking-[-0.02em] text-[#101827]">
                    {clinic.name}
                  </h2>

                  <div className="mt-2 flex items-center gap-1.5 text-sm text-[#6b7280]">
                    <MapPin size={14} className="shrink-0 text-[#e84d67]" />
                    <span className="line-clamp-1">
                      {clinic.district}, {clinic.city}
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#6b7280]">
                    {clinic.shortDescription}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#f0e5dd] px-4 py-4">
                <div className="mb-3 flex flex-wrap gap-2">
                  {clinic.specialties.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f3f4f6] px-2.5 py-1 text-[11px] font-medium text-[#374151]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-2 text-xs leading-5 text-[#6b7280]">
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-[#e84d67]"
                    />
                    <span className="line-clamp-2">{clinic.bestFor[0]}</span>
                  </div>

                  <ArrowRight
                    size={18}
                    className="shrink-0 text-[#e84d67] transition group-hover:translate-x-1"
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