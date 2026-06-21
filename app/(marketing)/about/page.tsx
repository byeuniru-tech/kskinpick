import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export const metadata = {
  title: "About KSkinPick",
  description:
    "Learn why KSkinPick exists and how we help international patients compare Korean skin clinics and treatments.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-[#fbf7f2]">
        <section className="py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#e84d67]">
                About KSkinPick
              </p>

              <h1 className="font-serif text-5xl font-medium tracking-[-0.04em] text-[#101827] md:text-7xl">
                Helping International Patients Navigate Korean Skin Clinics
              </h1>

              <p className="mt-8 text-lg leading-9 text-[#6b7280]">
                KSkinPick was created to make Korean skin treatments easier to
                understand for international visitors. Instead of spending hours
                searching through advertisements, social media posts, and
                scattered reviews, our goal is to provide clear treatment
                information and help patients compare clinics more confidently.
              </p>
            </div>
          </Container>
        </section>

        <section className="pb-12 md:pb-20">
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-8">
                <h2 className="text-2xl font-bold text-[#101827]">
                  Compare Clinics
                </h2>

                <p className="mt-4 leading-8 text-[#6b7280]">
                  Browse clinics by location, specialties, and visitor-friendly
                  support instead of relying only on advertisements.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-8">
                <h2 className="text-2xl font-bold text-[#101827]">
                  Understand Treatments
                </h2>

                <p className="mt-4 leading-8 text-[#6b7280]">
                  Learn about popular Korean treatments such as Rejuran,
                  Ultherapy, Botox, acne scar procedures, and other skin
                  rejuvenation options.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-8">
                <h2 className="text-2xl font-bold text-[#101827]">
                  Get Recommendations
                </h2>

                <p className="mt-4 leading-8 text-[#6b7280]">
                  Tell us your goals and we can help you narrow down clinics and
                  treatments that may fit your needs.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-12 md:pb-20">
          <Container>
            <div className="rounded-[2.5rem] border border-[#eadfd7] bg-white p-8 md:p-12">
              <h2 className="font-serif text-4xl font-medium text-[#101827]">
                How We Select Clinics
              </h2>

              <div className="mt-8 space-y-6 text-[#6b7280]">
                <p>
                  KSkinPick is designed as an informational platform. We review
                  clinic information, treatment categories, visitor
                  accessibility, and publicly available details to help patients
                  understand their options.
                </p>

                <p>
                  We do not claim that one clinic is universally better than
                  another. Every patient has different goals, budgets, travel
                  schedules, and medical considerations.
                </p>

                <p>
                  We encourage visitors to receive professional consultation and
                  discuss individual concerns directly with qualified medical
                  providers before making treatment decisions.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-12 md:pb-20">
          <Container>
            <div className="rounded-[2.5rem] border border-[#eadfd7] bg-white p-8 md:p-12">
              <h2 className="font-serif text-4xl font-medium text-[#101827]">
                Editorial Policy
              </h2>

              <div className="mt-8 space-y-6 text-[#6b7280]">
                <p>
                  Our treatment content is intended for educational purposes and
                  should not be considered medical advice.
                </p>

                <p>
                  Treatment suitability, expected outcomes, downtime, and risks
                  vary between individuals. Information on this website should
                  be used as a starting point for research rather than a
                  substitute for professional consultation.
                </p>

                <p>
                  We strive to keep information updated, but clinics, products,
                  pricing, and treatment protocols may change over time.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-20">
          <Container>
            <div className="rounded-[2.5rem] bg-[#101827] p-10 text-center text-white md:p-16">
              <h2 className="font-serif text-4xl font-medium">
                Looking for a Clinic Recommendation?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-white/80">
                Tell us what treatment you are interested in, your travel plans,
                and your preferences. We will help you explore suitable clinic
                options.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-[#101827]"
              >
                Free Consultation
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}