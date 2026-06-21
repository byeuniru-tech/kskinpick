import {
  Building2,
  ClipboardList,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";
import Container from "@/components/layout/Container";

const items = [
  {
    icon: Building2,
    label: "500+ Clinics Reviewed",
  },
  {
    icon: ClipboardList,
    label: "50+ Treatment Guides",
  },
  {
    icon: Headphones,
    label: "English Support",
  },
  {
    icon: MessageCircle,
    label: "Free Consultation",
  },
];

export default function TrustBar() {
  return (
    <section className="relative z-20 -mt-8">
      <Container>
        <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-4 shadow-[0_24px_80px_rgba(16,24,39,0.08)] md:p-6">
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-medium text-[#101827] md:hidden">
  <ShieldCheck size={15} className="text-[#e84d67]" />

  <span>Trusted by International Patients</span>

  <Star
    size={12}
    fill="currentColor"
    className="text-[#e84d67]"
  />

  <span className="font-semibold text-[#101827]">
    4.9
  </span>
</div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-0">
            <div className="hidden items-center gap-3 border-r border-[#eadfd7] px-4 md:flex">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ffe8ed] text-[#e84d67]">
                <ShieldCheck size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#101827]">
                  Trusted by International Patients
                </p>
                <div className="mt-1 flex items-center gap-2">
  <Star
    size={14}
    fill="currentColor"
    className="text-[#e84d67]"
  />

  <span className="text-sm font-semibold text-[#101827]">
    4.9
  </span>

  <span className="text-xs text-[#6b7280]">
    / 5
  </span>
</div>
              </div>
            </div>

            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 rounded-2xl border border-[#eadfd7] bg-[#fbf7f2] p-3 md:rounded-none md:border-0 md:bg-white md:px-5 ${
                    index < items.length - 1 ? "md:border-r" : ""
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffe8ed] text-[#e84d67] md:h-11 md:w-11">
                    <Icon size={17} />
                  </div>

                  <p className="text-xs font-semibold leading-snug text-[#101827] md:text-sm">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}