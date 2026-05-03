import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { WorkSection } from "@/components/WorkSection";
import { WorkShowcase } from "@/components/WorkShowcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WorkShowcase />
        <ProblemSection />
        <SolutionSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
