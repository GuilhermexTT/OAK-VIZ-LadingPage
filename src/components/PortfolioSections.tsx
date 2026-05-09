'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import Link from 'next/link';

const defaultNiches = [
  {
    category: 'ARQUITETURA',
    slug: 'arquitetura',
    imageUrl: '/identidade-visual/Arquitetura.jpg',
    position: 'center',
    scaleClass: 'scale-100 group-hover:scale-105'
  },
  {
    category: 'CORPORATIVO',
    slug: 'corporativo',
    imageUrl: '/identidade-visual/corporativo.jpg',
    position: 'center',
    scaleClass: 'scale-110 group-hover:scale-[1.15]'
  }
];

type PortfolioItem = {
  _id?: string;
  category: string;
  slug?: string;
  imageUrl: string;
  position?: string;
  scaleClass?: string;
};

interface Props {
  portfolioItems?: PortfolioItem[];
}

export default function PortfolioSections({ portfolioItems = [] }: Props) {
  const displayItems = portfolioItems.length > 0 ? portfolioItems.map(item => ({
    ...item,
    position: 'center',
    scaleClass: 'scale-100 group-hover:scale-105'
  })) : defaultNiches;

  return (
    <section id="portfolio" className="bg-branco-creme-1 py-24 px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-classic text-5xl md:text-6xl text-marrom-escuro-1 font-light tracking-tight">
            Trabalhos Selecionados
          </h2>
          <div className="w-12 h-[1px] bg-verde-claro-1 mx-auto mt-8"></div>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
          {displayItems.map((niche, index) => {
            const cardContent = (
              <div className="group flex flex-col cursor-pointer bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 h-full w-full">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image 
                    src={niche.imageUrl}
                    alt={niche.category}
                    fill
                    className={`object-cover transition-transform duration-1000 ${niche.scaleClass}`}
                    style={{ objectPosition: niche.position }}
                  />
                </div>

                {/* Text Area */}
                <div className="p-8 md:p-10 flex flex-col justify-center items-center flex-grow bg-white relative">
                  <span className="text-[#14250A] font-classic text-xl md:text-2xl tracking-[0.2em] font-light uppercase italic">
                    {niche.category}
                  </span>
                  
                  {/* Hover Indicator */}
                  <motion.span 
                    className="text-[#587149] text-[10px] uppercase tracking-[0.3em] font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    Explorar Galeria
                  </motion.span>
                </div>
              </div>
            );

            return (
              <motion.div 
                key={niche.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="h-full"
              >
                {niche.slug ? (
                  <Link href={`/portfolio/${niche.slug}`} className="block h-full w-full">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
