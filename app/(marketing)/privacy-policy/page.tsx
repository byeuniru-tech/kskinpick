import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export const metadata = {
  alternates: {
    canonical: "/privacy-policy",
  },
  title: "Privacy Policy",
  description: "Privacy Policy for KSkinPick.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#fbf7f2] pt-24 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#eadfd7] bg-white p-8 md:p-12">
            <h1 className="font-serif text-4xl text-[#2f2926]">
              Privacy Policy
            </h1>

            <p className="mt-4 text-sm text-[#8b8179]">
              Last updated: June 2026
            </p>

            <div className="mt-10 space-y-8 text-[#5f554f] leading-8">
              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  Introduction
                </h2>

                <p className="mt-3">
                  KSkinPick respects your privacy. This Privacy Policy explains
                  how information may be collected, used, and protected when
                  you visit our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  Information We Collect
                </h2>

                <p className="mt-3">
                  We may collect non-personal information such as browser type,
                  device information, pages visited, and general analytics
                  data.
                </p>

                <p className="mt-3">
                  If you contact us directly, we may receive information that
                  you voluntarily provide, such as your name or email address.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  How We Use Information
                </h2>

                <ul className="mt-3 list-disc pl-6">
                  <li>To improve website content and user experience</li>
                  <li>To respond to inquiries</li>
                  <li>To analyze website performance and traffic</li>
                  <li>To maintain website security and functionality</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  Cookies
                </h2>

                <p className="mt-3">
                  KSkinPick may use cookies and similar technologies to improve
                  website functionality, understand visitor behavior, and
                  enhance user experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  Third-Party Services
                </h2>

                <p className="mt-3">
                  We may use third-party services such as analytics providers,
                  search tools, or advertising platforms. These services may
                  collect information according to their own privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  Data Security
                </h2>

                <p className="mt-3">
                  We take reasonable measures to protect information from
                  unauthorized access, disclosure, or misuse.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  Contact
                </h2>

                <p className="mt-3">
                  If you have questions regarding this Privacy Policy, please
                  contact us through our Contact page.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}