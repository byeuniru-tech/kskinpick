"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const menu = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Clinics",
    href: "/clinics",
  },
  {
    label: "Treatments",
    href: "/treatments",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfd7] bg-[#fbf7f2]/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <div>
              <div className="text-xl font-semibold tracking-tight text-[#101827]">
                KSkinPick
              </div>

              <div className="text-[11px] uppercase tracking-[0.25em] text-[#6b7280]">
                Find. Compare. Book.
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#101827] transition hover:text-[#e84d67]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="
                inline-flex
                items-center justify-center
                rounded-full
                bg-[#e84d67]
                px-5 py-2.5
                text-sm font-semibold
                text-white
                transition
                hover:opacity-90
              "
            >
              Free Consultation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#eadfd7] bg-white text-[#101827] lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-[#eadfd7] py-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {menu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#101827] transition hover:bg-white hover:text-[#e84d67]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#e84d67] px-5 py-3 text-sm font-bold text-white"
              >
                Free Consultation
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}