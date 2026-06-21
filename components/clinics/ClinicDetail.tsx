import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  MapPin,
  Sparkles,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import type { Clinic } from "@/lib/data/en/clinics";

function getGalleryImages(clinic: Clinic) {
  return Array.from({ length: 9 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return `${clinic.imageBase}/interior-${number}.jpg`;
  });
}

export default function ClinicDetail({ clinic }: { clinic: Clinic }) {
  const galleryImages = getGalleryImages(clinic);

  return (
    <>
      <Header />

      <main className="bg-[#fbf7f2]">
        <section className="pt-6 md:pt-10">
          <Container>
            <Link
              href="/clinics"
              className="mb-5 inline-flex items-center gap-1 text-sm font-medium text-[#6b7280]"
            >
              <ChevronLeft size={16} />
              Back to clinics
            </Link>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="overflow-hidden rounded-[2rem] bg-white">
                <img
                  src={clinic.coverImage}
                  alt={clinic.name}
                  className="h-[280px] w-full object-cover md:h-[520px]"
                />
              </div>

              <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 md:p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#ffe8ed] px-3 py-1.5 text-xs font-semibold text-[#e84d67]">
                  <Sparkles size={14} />
                  Curated clinic profile
                </div>

                <h1 className="font-serif text-4xl font-medium tracking-[-0.04em] text-[#101827] md:text-6xl">
                  {clinic.name}
                </h1>

                <p className="mt-4 text-lg font-medium leading-7 text-[#101827]">
                  {clinic.tagline}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-[#6b7280]">
                  <MapPin size={16} className="text-[#e84d67]" />
                  {clinic.district}, {clinic.city}
                </div>

                <p className="mt-6 text-base leading-8 text-[#6b7280]">
                  {clinic.shortDescription}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {clinic.specialties.slice(0, 5).map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#ffe8ed] px-3 py-1.5 text-xs font-semibold text-[#e84d67]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-[#fbf7f2] p-5">
                  <p className="text-sm font-semibold text-[#101827]">
                    Good for
                  </p>

                  <div className="mt-3 space-y-2">
                    {clinic.bestFor.slice(0, 3).map((item) => (
                      <div
                        key={item}
                        className="flex gap-2 text-sm leading-6 text-[#6b7280]"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[#e84d67]"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact" icon={<CalendarDays size={18} />}>
                    Free Consultation
                  </Button>

                  <Button href="/clinics" variant="secondary">
                    Compare Clinics
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <Container>
            <div className="grid gap-5 md:grid-cols-3">
              {clinic.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#eadfd7] bg-white p-5"
                >
                  <CheckCircle2 size={20} className="text-[#e84d67]" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#101827]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-14 md:pb-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <aside className="h-fit rounded-[2rem] border border-[#eadfd7] bg-white p-6 md:sticky md:top-28">
                <h2 className="text-lg font-bold text-[#101827]">
                  Quick Answer
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                  {clinic.quickAnswer}
                </p>

                <div className="mt-6 border-t border-[#eadfd7] pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e84d67]">
                    Location
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                    {clinic.address}
                  </p>
                </div>
              </aside>

              <div className="space-y-6">
                <section className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 md:p-8">
                  <h2 className="mb-4 font-serif text-3xl font-medium text-[#101827]">
                    Overview
                  </h2>

                  <p className="text-base leading-8 text-[#6b7280]">
                    {clinic.overview}
                  </p>
                </section>

                <section className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 md:p-8">
                  <h2 className="mb-5 font-serif text-3xl font-medium text-[#101827]">
                    Clinic Gallery
                  </h2>

                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                    {galleryImages.map((image) => (
                      <div
                        key={image}
                        className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#fbf7f2]"
                      >
                        <img
                          src={image}
                          alt={`${clinic.name} interior`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 md:p-8">
                  <h2 className="mb-5 font-serif text-3xl font-medium text-[#101827]">
                    Specialty Areas
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {clinic.specialties.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#f3f4f6] px-4 py-2 text-sm font-medium text-[#101827]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 md:p-8">
                  <h2 className="mb-5 font-serif text-3xl font-medium text-[#101827]">
                    Treatment Keywords
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {clinic.treatmentKeywords.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#eadfd7] bg-white px-4 py-2 text-sm font-medium text-[#6b7280]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 md:p-8">
                  <h2 className="mb-5 font-serif text-3xl font-medium text-[#101827]">
                    Foreigner-Friendly Support
                  </h2>

                  <div className="space-y-3">
                    {clinic.foreignerSupport.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-[#101827]"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-[#e84d67]"
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[2rem] border border-[#eadfd7] bg-white p-6 md:p-8">
                  <h2 className="mb-5 font-serif text-3xl font-medium text-[#101827]">
                    FAQ
                  </h2>

                  <div className="space-y-4">
                    {clinic.faq.map((item) => (
                      <div
                        key={item.question}
                        className="border-b border-[#eadfd7] pb-4 last:border-0 last:pb-0"
                      >
                        <h3 className="font-semibold text-[#101827]">
                          {item.question}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-[#6b7280]">
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
      </main>

      <Footer />
    </>
  );
}