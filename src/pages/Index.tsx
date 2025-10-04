import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import BooksGrid from "@/components/BooksGrid";
import TestimonialSection from "@/components/TestimonialSection";
import SpecialOfferSection from "@/components/SpecialOfferSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <BooksGrid />
      <TestimonialSection />
      <SpecialOfferSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
