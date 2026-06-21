import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-[#eadfd7] bg-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h3 className="mb-3 text-xl font-semibold">
              KSkinPick
            </h3>

            <p className="max-w-md text-sm leading-7 text-[#6b7280]">
              KSkinPick helps international patients
              compare Korean skin clinics, understand
              treatments, and make more informed
              decisions before booking aesthetic
              procedures in Korea.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Explore
            </h4>

            <div className="space-y-3 text-sm text-[#6b7280]">
              <div>
                <Link
                  href="/clinics"
                  className="hover:text-[#e84d67]"
                >
                  Clinics
                </Link>
              </div>

              <div>
                <Link
                  href="/treatments"
                  className="hover:text-[#e84d67]"
                >
                  Treatments
                </Link>
              </div>

              <div>
                <Link
                  href="/blog"
                  className="hover:text-[#e84d67]"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Company
            </h4>

            <div className="space-y-3 text-sm text-[#6b7280]">
              <div>
                <Link
                  href="/about"
                  className="hover:text-[#e84d67]"
                >
                  About Us
                </Link>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="hover:text-[#e84d67]"
                >
                  Free Consultation
                </Link>
              </div>

              <div>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#e84d67]"
                >
                  Privacy Policy
                </Link>
              </div>

              <div>
                <Link
                  href="/terms"
                  className="hover:text-[#e84d67]"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#eadfd7] pt-6">
          <div className="flex flex-col gap-2 text-sm text-[#6b7280] md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 KSkinPick. All rights reserved.
            </p>

            <p>
              Find. Compare. Book.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}