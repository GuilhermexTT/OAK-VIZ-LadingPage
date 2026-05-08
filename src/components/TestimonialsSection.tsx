'use client';

import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-[#F8F6E5] text-[#14250A] py-24 md:py-32 px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl mb-16 tracking-tight text-center"
        >
          O Que Nossos Clientes Dizem
        </motion.h2>
        
        {/* Espaço reservado para os depoimentos que virão do Sanity CMS futuramente */}
      </div>
    </section>
  );
}
