'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative w-full py-8 md:py-12 text-[#F8F6E5] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/identidade-visual/Rodape.jpg" 
          alt="Background do Rodapé Oak Viz" 
          fill
          className="object-cover"
          quality={100}
        />
        {/* Overlay escuro para garantir que o texto seja legível */}
        <div className="absolute inset-0 bg-[#14250A]/70"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10 mx-auto max-w-6xl px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo / Brand */}
          <div className="flex flex-col items-start">
            <h2 className="font-serif text-3xl font-bold mb-4 tracking-tight text-[#DC9949]">OAK VIZ</h2>
            <p className="text-[#F8F6E5]/80 font-light leading-relaxed max-w-sm">
              Elevando o posicionamento de marcas e projetos através de soluções audiovisuais completas e estratégicas.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4 text-white">Navegação</h3>
            <ul className="space-y-3 font-light text-[#F8F6E5]/80">
              <li><Link href="#portfolio" className="hover:text-[#DC9949] transition-colors">Portfólio</Link></li>
              <li><Link href="#sobre" className="hover:text-[#DC9949] transition-colors">Sobre Nós</Link></li>
              <li><Link href="#depoimentos" className="hover:text-[#DC9949] transition-colors">Depoimentos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4 text-white">Contato</h3>
            <ul className="space-y-3 font-light text-[#F8F6E5]/80">
              <li>contato@oakviz.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>

        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-12 mb-6">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex flex-col items-center gap-3 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full border border-[#F8F6E5]/30 flex items-center justify-center transition-all duration-500 group-hover:border-[#DC9949] group-hover:bg-[#DC9949]/10">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transform transition-transform duration-500 group-hover:-translate-y-1"
              >
                <path d="M18 15l-6-6-6 6"/>
              </svg>
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#F8F6E5]/60 font-bold group-hover:text-[#F8F6E5] transition-colors">Voltar ao topo</span>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F8F6E5]/20 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center text-sm font-light text-[#F8F6E5]/60">
          <p>© {new Date().getFullYear()} Oak Viz. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
