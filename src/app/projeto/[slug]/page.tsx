import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectGallery from '@/components/ProjectGallery';

export const revalidate = 60;

type ProjectDetail = {
  title: string;
  categorySlug: string;
  categoryName: string;
  coverImage: string;
  gallery: string[];
  youtubeVideos: string[];
};

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const projectData = await client.fetch<any>(`
    *[_type == "project" && slug.current == $slug][0] {
      title,
      category,
      "coverImage": coverImage.secure_url,
      "gallery": gallery[].secure_url,
      youtubeVideos
    }
  `, { slug });

  if (!projectData) {
    return (
      <main className="min-h-screen bg-branco-creme-1 text-marrom-escuro-1 flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl">Projeto não encontrado</h1>
        <Link href="/" className="mt-4 text-verde-claro-1 hover:underline">Voltar para o início</Link>
      </main>
    );
  }

  const categorySlug = projectData.category;
  const categoryName = categorySlug === 'arquitetura' ? 'Arquitetura' : categorySlug === 'corporativo' ? 'Corporativo' : categorySlug;

  const project: ProjectDetail = {
    ...projectData,
    categorySlug,
    categoryName,
  };

  return (
    <main className="min-h-screen bg-branco-creme-1 flex flex-col">
      <Navbar />

      <article className="flex-grow pt-32 pb-24 px-8">
        <div className="container mx-auto max-w-5xl">

          {/* Header do Projeto */}
          <header className="mb-20 text-center">
            <Link
              href={`/portfolio/${project.categorySlug}`}
              className="font-classic italic text-[#1B0F03]/60 hover:text-[#14250A] transition-colors text-lg md:text-xl tracking-wide mb-8 inline-block"
            >
              ← Voltar para {project.categoryName}
            </Link>
            <h1 className="font-serif text-5xl md:text-7xl text-marrom-escuro-1 mt-4 font-light">
              {project.title}
            </h1>
          </header>

          {/* Galeria de Fotos com Lightbox */}
          {project.gallery && project.gallery.length > 0 && (
            <ProjectGallery images={project.gallery} projectTitle={project.title} />
          )}

          {/* Vídeos do YouTube */}
          {project.youtubeVideos && project.youtubeVideos.length > 0 && (
            <div className="mb-16">
              <h2 className="font-serif text-3xl text-marrom-escuro-1 mb-8 text-center">Vídeos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.youtubeVideos.map((url, index) => {
                  // Extrair ID do vídeo para iframe (suporta watch, shorts, embed, etc)
                  let videoId = '';
                  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([^&?]+)/);
                  if (match && match[1]) {
                    videoId = match[1];
                  }

                  if (!videoId) return null;

                  return (
                    <div key={index} className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={`YouTube video player ${index}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </article>

      <Footer />
    </main>
  );
}
