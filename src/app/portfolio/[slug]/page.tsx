import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectGrid from '@/components/ProjectGrid';

// Desativar cache para dados frescos
export const revalidate = 60;

type Project = {
  _id: string;
  title: string;
  slug: string;
  imageUrl: string;
};

export default async function PortfolioCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Busca os projetos dessa categoria (case-insensitive para garantir que apareçam)
  const projects = await client.fetch<Project[]>(`
    *[_type == "project" && (category == $slug || lower(category) == $slug)] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      "imageUrl": coverImage.asset->url
    }
  `, { slug });

  const categoryName = slug === 'arquitetura' ? 'Arquitetura' : slug === 'corporativo' ? 'Corporativo' : slug;

  if (slug !== 'arquitetura' && slug !== 'corporativo') {
    return (
      <main className="min-h-screen bg-branco-creme-1 text-marrom-escuro-1 flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl">Categoria não encontrada</h1>
        <Link href="/" className="mt-4 text-verde-claro-1 hover:underline">Voltar para o início</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-branco-creme-1">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Link 
              href="/"
              className="font-classic italic text-[#1B0F03]/60 hover:text-[#14250A] transition-colors text-lg md:text-xl tracking-wide mb-8 inline-block"
            >
              ← Voltar para o Início
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl text-marrom-escuro-1 tracking-tight uppercase">
              {categoryName}
            </h1>
            <div className="w-16 h-[2px] bg-verde-claro-1 mx-auto mt-6"></div>
            <p className="mt-6 text-marrom-escuro-1/70 font-light max-w-2xl mx-auto">
              Selecione um projeto para visualizar a galeria completa.
            </p>
          </div>

          {projects.length > 0 ? (
            <ProjectGrid projects={projects} />
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-marrom-escuro-1/60 italic font-light">
                Nenhum projeto encontrado nesta categoria ainda.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}

