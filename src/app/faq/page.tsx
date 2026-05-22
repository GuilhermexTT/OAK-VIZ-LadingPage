import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { client } from "@/sanity/lib/client";
import FAQList from "@/components/FAQList";

export const revalidate = 0; // Desativa o cache para refletir edições imediatamente ao atualizar a página

export default async function FAQPage() {
  const faqs = await client.fetch(`
    *[_type == "faq"] | order(order asc) {
      _id,
      question,
      answer
    }
  `);

  return (
    <main className="min-h-screen bg-branco-creme-1 flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-8">
        <div className="container mx-auto max-w-3xl">
          <header className="text-center mb-20">
            <h1 className="font-serif text-4xl md:text-6xl text-marrom-escuro-1 tracking-tight uppercase mb-6">
              Dúvidas Frequentes
            </h1>
            <div className="w-16 h-[2px] bg-verde-claro-1 mx-auto"></div>
            <p className="mt-8 text-marrom-escuro-1/70 font-light text-lg">
              Encontre respostas para as perguntas mais comuns sobre nossos processos e serviços.
            </p>
          </header>

          {faqs.length > 0 ? (
            <FAQList faqs={faqs} />
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-marrom-escuro-1/5">
              <p className="text-xl text-marrom-escuro-1/60 italic font-light">
                Nenhuma dúvida cadastrada no momento.
              </p>
            </div>
          )}
        </div>
      </div>

      <BackToTop />
      <Footer />
    </main>
  );
}
