import Navbar from "@/components/Navbar"; // Updated: 2024-05-08 21:07
import Hero from "@/components/Hero";
import PortfolioSections from "@/components/PortfolioSections";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { client } from "@/sanity/lib/client";

// Desliga o cache para que edições no Sanity sejam refletidas instantaneamente ao atualizar a página
export const revalidate = 0;

export default async function Home() {
  // Fetch testimonials
  const testimonials = await client.fetch(`
    *[_type == "testimonial"]{
      _id,
      name,
      role,
      quote,
      "imageUrl": image.secure_url
    }
  `);

  // Fetch portfolio categories for the grid
  const portfolioItems = await client.fetch(`
    *[_type == "portfolio"] | order(order asc) {
      _id,
      category,
      "slug": slug.current,
      "imageUrl": image.secure_url
    }
  `);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PortfolioSections portfolioItems={portfolioItems} />
      <AboutSection />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />
      <BackToTop />
      <Footer />
    </main>
  );
}
