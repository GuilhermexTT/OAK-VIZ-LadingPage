'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-[#14250A] text-[#F8F6E5] py-24 md:py-32 px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[4/5] lg:aspect-[3/4] bg-[#DC9949] rounded-[24px] overflow-hidden shadow-2xl p-6 md:p-12"
          >
            <Image 
              src="/IdentidadeVisual/Sobre nos.jpg"
              alt="Sobre a Oak Viz"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tight">
              Sobre a Oak Viz
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-[#F8F6E5]/90 leading-relaxed font-light text-justify">
              <p>
                A Oak Viz é uma produtora audiovisual especializada em elevar o posicionamento de marcas, profissionais e projetos arquitetônicos.
              </p>
              <p>
                Nascemos com o propósito de unir a solidez do mercado corporativo à estética e precisão da arquitetura criando imagens que revelam a essência dos espaços e transmitem autoridade, segurança e valor à primeira vista.
              </p>
              <p>
                Entregamos soluções visuais completas e estratégicas para o mercado corporativo e de arquitetura.
              </p>
              <p>
                Nosso trabalho abrange desde retratos executivos de alto nível e vídeos institucionais, até a cobertura de eventos empresariais e fotografia que destacam o que há de melhor em seu negócio.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
