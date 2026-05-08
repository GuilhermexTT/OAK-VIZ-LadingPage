import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Desativar cache para dados frescos
export const revalidate = 60;

type Project = {
  _id: string;
  title: string;
  slug: string;
  imageUrl: string;
};

type PortfolioCategory = {
  category: string;
};

export default async function PortfolioCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Busca os projetos dessa categoria
  const projects = await client.fetch<Project[]>(`
    *[_type == "project" && category == $slug] | order(order asc) {
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
            <h1 className="font-serif text-4xl md:text-5xl text-marrom-escuro-1 tracking-tight uppercase">
              {categoryName}
            </h1>
            <div className="w-16 h-[2px] bg-verde-claro-1 mx-auto mt-6"></div>
            <p className="mt-6 text-marrom-escuro-1/70 font-light max-w-2xl mx-auto">
              Selecione um projeto para visualizar a galeria completa.
            </p>
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
              {projects.map((project) => (
                <Link key={project._id} href={`/projeto/${project.slug}`} className="group block h-full w-full">
                  <div className="flex flex-col cursor-pointer bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Image Container */}
                    <div className="relative w-full aspect-[4/5] overflow-hidden">
                      <Image 
                        src={project.imageUrl || '/placeholder.jpg'} 
                        alt={project.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                    {/* Text Area */}
                    <div className="p-8 md:p-10 flex justify-center items-center flex-grow bg-white">
                      <h3 className="text-verde-claro-1 font-serif text-xl md:text-2xl tracking-widest uppercase text-center">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
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
