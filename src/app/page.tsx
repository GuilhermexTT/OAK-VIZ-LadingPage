import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioSections from "@/components/PortfolioSections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PortfolioSections />
    </main>
  );
}
