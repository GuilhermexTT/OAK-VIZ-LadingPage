'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

type Testimonial = {
  _id: string;
  name: string;
  role?: string;
  quote: string;
  imageUrl?: string;
};

interface Props {
  testimonials?: Testimonial[];
}

export default function TestimonialsSection({ testimonials = [] }: Props) {
  return (
    <section id="depoimentos" className="bg-branco-creme-1 text-verde-escuro-1 pt-24 pb-12 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="font-classic text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-center font-light"
        >
          O Que Nossos Clientes Dizem
        </motion.h2>

        {/* Swipe Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex items-center justify-center gap-3 mb-12 text-[#14250A]/40"
        >
          <div className="w-8 h-[1px] bg-[#14250A]/10"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Deslize para ver mais</span>
          <div className="flex gap-1 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
          <div className="w-8 h-[1px] bg-[#14250A]/10"></div>
        </motion.div>
      </div>
        
      <div className="w-full overflow-hidden">
        {testimonials.length > 0 ? (
          <div className="flex overflow-x-auto pt-10 pb-12 snap-x snap-mandatory gap-6 md:gap-8 px-[10vw] md:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {testimonials.map((t, i) => (
              <motion.div 
                key={t._id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="snap-center shrink-0 w-[80vw] sm:w-[320px] md:w-[380px] lg:w-[420px] bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-center text-center relative force-light-card"
              >
                {/* Minimalist Top Decorator */}
                <div className="w-8 h-[1px] bg-marrom-claro-2 mb-6"></div>
                
                {/* Quote Text */}
                <div className="mb-8 flex-grow flex items-center justify-center">
                  <p className="font-classic text-lg md:text-xl leading-[1.7] text-[#1B0F03] italic font-light tracking-wide">
                    "{t.quote}"
                  </p>
                </div>
                
                {/* Divider */}
                <div className="w-12 h-[1px] bg-[#14250A]/10 mb-6"></div>
                
                {/* Author Info */}
                <div className="flex flex-col items-center">
                  {t.imageUrl && (
                    <div className="relative w-14 h-14 rounded-full overflow-hidden mb-4 border border-[#14250A]/10 shadow-sm">
                      <Image src={t.imageUrl} alt={t.name} fill className="object-cover" />
                    </div>
                  )}
                  <h4 className="font-sans font-medium text-[#1B0F03] text-[13px] uppercase tracking-[0.15em]">{t.name}</h4>
                  {t.role && <p className="text-[#587149] text-[11px] mt-1.5 uppercase tracking-widest font-light">{t.role}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-[#14250A]/60 italic">
            Novos depoimentos em breve.
          </p>
        )}
      </div>
    </section>
  );
}
