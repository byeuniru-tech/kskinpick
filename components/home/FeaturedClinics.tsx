import Link from "next/link";
import { ArrowRight, Heart, MapPin } from "lucide-react";

import Container from "@/components/layout/Container";
import { clinics } from "@/lib/data/en/clinics";

const featuredClinicConfig = [
  {
    slug: "arskin-hongdae",
    badge: "Best Seller",
    badgeClass: "bg-[#d8b44a] text-white",
  },
  {
    slug: "cellable153-nonhyeon",
    badge: "Highly Recommended",
    badgeClass: "bg-[#8b7cf6] text-white",
  },
];

export default function FeaturedClinics() {
  const selectedClinics = featuredClinicConfig
    .map((item) => {
      const clinic = clinics.find((clinic) => clinic.slug === item.slug);

      if (!clinic) return null;

      return {
        ...clinic,
        badge: item.badge,
        badgeClass: item.badgeClass,
      };
    })
    .filter(Boolean);

  return (
    <section className="bg-[#fbf7f2] py-14 md:py-20">
      <Container>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#e84d67]">
              Featured Clinics
            </p>

            <h2 className="font-serif text-4xl font-medium tracking-[-0.04em] text-[#101827] md:text-5xl">
              Recommended Clinics to Start With
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6b7280] md:text-base">
              A short selection of Korean skin clinics to compare before
              requesting a consultation.
            </p>
          </div>

          <Link
            href="/clinics"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#e84d67]"
          >
            View all clinics
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {selectedClinics.map((clinic) => {
            if (!clinic) return null;

            return (
              <Link
                key={clinic.slug}
                href={`/clinics/${clinic.slug}`}
                className="
                  group overflow-hidden rounded-[1.75rem]
                  border border-[#eadfd7]
                  bg-white
                  shadow-[0_14px_45px_rgba(16,24,39,0.06)]
                  transition
                  hover:-translate-y-1
                  hover:shadow-[0_24px_70px_rgba(16,24,39,0.1)]
                "
              >
                <div className="relative h-[130px] overflow-hidden bg-[#f4eee8] md:h-64">
                  <img
                    src={clinic.coverImage}
                    alt={clinic.name}
                    className="
                      h-full w-full object-cover
                      transition duration-500
                      group-hover:scale-105
                    "
                  />

                  <div
                    className={`
                      absolute left-3 top-3
                      rounded-full px-3 py-1.5
                      text-[11px] font-bold shadow-lg
                      md:left-4 md:top-4 md:px-4 md:py-2 md:text-xs
                      ${clinic.badgeClass}
                    `}
                  >
                    {clinic.badge}
                  </div>

                  <button
                    type="button"
                    className="
                      absolute right-3 top-3
                      flex h-9 w-9 items-center justify-center
                      rounded-full bg-white/95
                      text-[#101827]
                      shadow-lg
                      md:right-4 md:top-4 md:h-10 md:w-10
                    "
                    aria-label={`Save ${clinic.name}`}
                  >
                    <Heart size={17} />
                  </button>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-bold tracking-[-0.03em] text-[#101827] md:text-2xl">
                    {clinic.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-sm text-[#6b7280]">
                    <MapPin size={15} className="shrink-0 text-[#e84d67]" />
                    <span>
                      {clinic.district}, {clinic.city}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {clinic.specialties.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#f3f4f6] px-2.5 py-1 text-[11px] font-semibold text-[#374151] md:px-3 md:py-1.5 md:text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}