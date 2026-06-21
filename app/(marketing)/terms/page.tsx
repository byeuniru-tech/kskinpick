import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export const metadata = {
  title: "Terms of Service | KSkinPick",
  description: "Terms of Service for KSkinPick.",
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#fbf7f2] pt-24 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#eadfd7] bg-white p-8 md:p-12">
            <h1 className="font-serif text-4xl text-[#2f2926]">
              Terms of Service
            </h1>

            <p className="mt-4 text-sm text-[#8b8179]">
              Last updated: June 2026
            </p>

            <div className="mt-10 space-y-8 text-[#5f554f] leading-8">
              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  Acceptance of Terms
                </h2>

                <p className="mt-3">
                  By accessing and using KSkinPick, you agree to these Terms of
                  Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  Informational Purpose
                </h2>

                <p className="mt-3">
                  KSkinPick provides information about Korean dermatology,
                  aesthetic clinics, and cosmetic treatments for educational and
                  informational purposes only.
                </p>

                <p className="mt-3">
                  Information on this website should not be considered medical
                  advice, diagnosis, or treatment recommendations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  No Medical Relationship
                </h2>

                <p className="mt-3">
                  Using KSkinPick does not create a doctor-patient relationship,
                  clinic-patient relationship, or any healthcare provider
                  relationship.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  Accuracy of Information
                </h2>

                <p className="mt-3">
                  We strive to provide accurate and updated information, but we
                  do not guarantee that all information is complete, current, or
                  error-free.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  Third-Party Clinics
                </h2>

                <p className="mt-3">
                  Information about clinics, treatments, pricing, availability,
                  and services may change without notice. Users should verify
                  details directly with the clinic before making decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  Limitation of Liability
                </h2>

                <p className="mt-3">
                  KSkinPick shall not be responsible for decisions, outcomes,
                  treatments, or services obtained from third-party clinics,
                  providers, or businesses referenced on this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  Changes to These Terms
                </h2>

                <p className="mt-3">
                  We may update these Terms of Service at any time. Continued
                  use of the website indicates acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#2f2926]">
                  Contact
                </h2>

                <p className="mt-3">
                  If you have questions regarding these Terms, please contact us
                  through our Contact page.
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