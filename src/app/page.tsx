import Navbar from "@/components/Navbar"; // Updated: 2024-05-08 21:07
import Hero from "@/components/Hero";
import PortfolioSections from "@/components/PortfolioSections";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { client } from "@/sanity/lib/client";

// Turn off caching for this page so data is always fresh, 
// or you can configure Next.js revalidation strategy instead.
export const revalidate = 60; // revalidate every 60 seconds

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
