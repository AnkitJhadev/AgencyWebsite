import { ContactSection } from "@/components/ContactSection";
import { CTABanner } from "@/components/CTABanner";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ServicesSection } from "@/components/ServicesSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WorkSection } from "@/components/WorkSection";
import { WorkShowcase } from "@/components/WorkShowcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WorkShowcase />
        <ServicesSection />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <WorkSection />
        <CTABanner />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
