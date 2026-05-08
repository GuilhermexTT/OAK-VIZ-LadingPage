import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioSections from "@/components/PortfolioSections";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PortfolioSections />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
