'use client';

import { motion } from 'framer-motion';

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-branco-creme-1 py-12 flex justify-center border-t border-marrom-escuro-1/5">
      <motion.button 
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group flex flex-col items-center gap-3 cursor-pointer"
      >
        <div className="w-12 h-12 rounded-full border border-marrom-escuro-1/20 flex items-center justify-center transition-all duration-500 group-hover:border-marrom-claro-2 group-hover:bg-marrom-claro-2/5">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-marrom-escuro-1 transform transition-transform duration-500 group-hover:-translate-y-1"
          >
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-marrom-escuro-1/60 font-bold group-hover:text-marrom-escuro-1 transition-colors">Voltar ao topo</span>
      </motion.button>
    </div>
  );
}
