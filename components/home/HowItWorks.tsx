import { CalendarDays, ClipboardCheck, Search, ChevronRight } from "lucide-react";
import Container from "@/components/layout/Container";

const steps = [
  {
    number: "1",
    title: "Search & Compare",
    description: "Explore and compare clinics, treatments, reviews, and prices.",
    icon: Search,
  },
  {
    number: "2",
    title: "Understand & Choose",
    description:
      "Read treatment guides and clinic information to make an informed choice.",
    icon: ClipboardCheck,
  },
  {
    number: "3",
    title: "Book Consultation",
    description: "Book your consultation easily. Our team is here to help you.",
    icon: CalendarDays,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#fbf7f2] py-14 md:py-20">
      <Container>
        <div className="mb-8 text-center md:mb-12">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#101827]">
            How It Works
          </p>

          <h2 className="mx-auto max-w-[620px] font-serif text-[28px] font-medium leading-tight tracking-[-0.03em] text-[#101827] md:text-[40px]">
            Find the right clinic in 3 simple steps
          </h2>
        </div>

        <div className="space-y-3 md:grid md:grid-cols-3 md:gap-10 md:space-y-0">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="
                  flex items-center gap-4 rounded-2xl border border-[#eadfd7]
                  bg-white px-4 py-4 shadow-[0_10px_30px_rgba(16,24,39,0.04)]
                  md:border-0 md:bg-transparent md:p-0 md:shadow-none
                "
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#ffe8ed] text-[#e84d67] md:h-20 md:w-20">
                  <Icon size={25} className="md:h-8 md:w-8" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-[#101827] md:text-lg">
                    {step.number}. {step.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#6b7280] md:mt-2 md:text-sm md:leading-6">
                    {step.description}
                  </p>
                </div>

                <ChevronRight
                  size={18}
                  className="shrink-0 text-[#e84d67] md:hidden"
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}