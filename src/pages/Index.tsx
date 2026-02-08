import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import OverviewSection from "@/components/landing/OverviewSection";
import GoalsSection from "@/components/landing/GoalsSection";
import Layer1Section from "@/components/landing/Layer1Section";
import EducationSection from "@/components/landing/EducationSection";
import BaaSSection from "@/components/landing/BaaSSection";
import ArchitectureSection from "@/components/landing/ArchitectureSection";
import ValuesSection from "@/components/landing/ValuesSection";
import RoadmapSection from "@/components/landing/RoadmapSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <GoalsSection />
        <Layer1Section />
        <EducationSection />
        <BaaSSection />
        <ArchitectureSection />
        <ValuesSection />
        <RoadmapSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
