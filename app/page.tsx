import { ContactSection } from "@/features/contact/ContactSection";
import { CTABanner } from "@/features/landing/CTABanner";
import { FAQSection } from "@/features/landing/FAQSection";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/features/landing/HeroSection";
import { Navbar } from "@/components/layout/Navbar";
import { PricingSection } from "@/features/landing/PricingSection";
import { ProblemSection } from "@/features/landing/ProblemSection";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { ServicesSection } from "@/features/landing/ServicesSection";
import { SolutionSection } from "@/features/landing/SolutionSection";
import { TestimonialsSection } from "@/features/landing/TestimonialsSection";
import { WorkSection } from "@/features/landing/WorkSection";
import { WorkShowcase } from "@/features/landing/WorkShowcase";

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
