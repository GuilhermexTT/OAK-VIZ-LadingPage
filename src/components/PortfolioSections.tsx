'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const niches = [
  {
    title: 'Arquitetura',
    image: '/IdentidadeVisual/Arquitetura.jpg',
    description: 'Capturando a alma dos projetos arquitetônicos com olhar artístico e técnico.',
    link: '#arquitetura',
    position: 'center'
  },
  {
    title: 'Corporativo',
    image: '/IdentidadeVisual/Página de corporativo .jpg',
    description: 'Valorizando ambientes corporativos e a identidade visual de grandes empresas.',
    link: '#corporativo',
    position: 'top'
  }
];

export default function PortfolioSections() {
  return (
    <section className="bg-branco-creme-1 py-24 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 min-h-[600px]">
          {niches.map((niche) => (
            <div 
              key={niche.title}
              className="group relative flex-1 overflow-hidden rounded-2xl cursor-pointer shadow-2xl hover:shadow-marrom-escuro-1/20 transition-all duration-500"
            >
              {/* Background Image */}
              <Image 
                src={niche.image}
                alt={niche.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                style={{ objectPosition: niche.position }}
              />
              
              {/* Dark Overlay/Gradient for readability */}
              <div className="absolute inset-0 bg-linear-to-t from-marrom-escuro-1/90 via-marrom-escuro-1/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
                <h3 className="font-serif text-4xl md:text-5xl text-branco-creme-1 mb-4 tracking-tight">
                  {niche.title}
                </h3>
                <p className="text-branco-creme-1/70 text-lg font-medium max-w-sm mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {niche.description}
                </p>
                <div className="flex items-center gap-2 text-marrom-claro-2 font-bold uppercase tracking-widest text-sm">
                  Explorar Projetos
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
