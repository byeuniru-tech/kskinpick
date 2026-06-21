import { CalendarDays, Search } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7f2]">
      <div className="relative min-h-[500px] w-full md:min-h-[720px] lg:min-h-[760px]">
        <picture>
          <source media="(max-width: 767px)" srcSet="/hero-clinic-mobile.png" />
          <img
            src="/hero-clinic-desktop.png"
            alt="Skin clinic consultation in Korea"
            className="
              absolute inset-0 h-full w-full
              object-contain
              object-[58%_center]
              md:object-center
              md:opacity-100
              
            "
          />
        </picture>

        <div
          className="
            absolute inset-0
            bg-gradient-to-b from-[#fbf7f2] via-[#fbf7f2]/50 to-[#fbf7f2]/0
            md:bg-gradient-to-r md:from-[#fbf7f2] md:via-[#fbf7f2]/60 md:to-transparent
          "
        />

        <div className="relative z-10 w-[92%] max-w-screen-2xl mx-auto">
          <div className="max-w-[560px] pt-10 md:pt-28 lg:pt-32">


            <h1 className="font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.04em] text-[#101827] md:text-[72px] lg:text-[84px]">
              Looking for a{" "}
              <span className="text-[#e84d67]">trusted</span> skin clinic in
              Korea?
            </h1>

            <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-[#374151] md:text-lg md:leading-8">
              We help international patients compare clinics, understand
              treatments, and book consultations.
            </p>

            <div className="mt-40 md:mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/clinics" icon={<Search size={18} />}>
                Find Clinics
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                icon={<CalendarDays size={18} />}
              >
                Free Consultation
              </Button>
            </div>

            <div className="mt-8 hidden items-center gap-3 text-sm text-[#6b7280] md:flex">
              <span className="font-medium text-[#101827]">
                Popular searches:
              </span>
              <span>Rejuran</span>
              <span>•</span>
              <span>Ultherapy</span>
              <span>•</span>
              <span>Skin Botox</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}