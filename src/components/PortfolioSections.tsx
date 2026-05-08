'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const niches = [
  {
    category: 'ARQUITETURA',
    image: '/IdentidadeVisual/Arquitetura.jpg',
    link: '#arquitetura',
    position: 'center',
    scaleClass: 'scale-100 group-hover:scale-105'
  },
  {
    category: 'CORPORATIVO',
    image: '/IdentidadeVisual/Página de corporativo .jpg',
    link: '#corporativo',
    position: 'center',
    scaleClass: 'scale-110 group-hover:scale-[1.15]'
  }
];

export default function PortfolioSections() {
  return (
    <section className="bg-branco-creme-1 py-24 px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-marrom-escuro-1 font-medium tracking-tight">
            Trabalhos Selecionados
          </h2>
          <div className="w-16 h-[2px] bg-verde-claro-1 mx-auto mt-8"></div>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
          {niches.map((niche, index) => (
            <motion.div 
              key={niche.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group flex flex-col cursor-pointer bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image 
                  src={niche.image}
                  alt={niche.category}
                  fill
                  className={`object-cover transition-transform duration-1000 ${niche.scaleClass}`}
                  style={{ objectPosition: niche.position }}
                />
              </div>

              {/* Text Area */}
              <div className="p-8 md:p-10 flex justify-center items-center">
                <span className="text-verde-claro-1 font-serif text-xl md:text-2xl tracking-widest uppercase">
                  {niche.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
