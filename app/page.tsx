import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedClinics from "@/components/home/FeaturedClinics";
import PopularTreatments from "@/components/home/PopularTreatments";
import BlogPreview from "@/components/home/BlogPreview";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <FeaturedClinics />
        <PopularTreatments />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}