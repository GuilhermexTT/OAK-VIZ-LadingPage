'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#b8c0ab]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{ backgroundImage: "url('/identidade-visual/Capa-fundo-neutro.png')" }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-branco-creme-1/20 to-branco-creme-1/60 z-1" />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center pointer-events-none">
        
        {/* Logo */}
        <div className="w-[80%] max-w-[500px] md:max-w-[700px] lg:max-w-[850px] opacity-90 animate-fade-in-up mb-6 md:mb-10 mt-8 md:mt-0">
          <Image 
            src="/identidade-visual/logo-sem-fundo.png" 
            alt="Oak Viz Logo" 
            width={1500} 
            height={1500} 
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>
        
        {/* Slogan */}
        <p className="font-classic text-2xl md:text-3xl lg:text-5xl italic font-light text-marrom-escuro-1/80 tracking-[0.05em] animate-fade-in text-center mb-10 md:mb-12">
          A imagem fala antes de qualquer coisa
        </p>

        {/* Button */}
        <div className="animate-fade-in-up pointer-events-auto">
          <a 
            href="#portfolio" 
            className="inline-flex items-center bg-[#D19C57] hover:bg-[#b88546] text-branco-creme-1 px-10 md:px-12 py-3.5 md:py-4.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:-translate-y-1 shadow-2xl shadow-[#D19C57]/30"
          >
            VER PORTIFÓLIO
          </a>
        </div>

        {/* Scroll Indicator */}
        <a href="#portfolio" className="mt-16 animate-slow-bounce cursor-pointer flex flex-col items-center gap-2 pointer-events-auto group">
          <span className="text-[10px] uppercase tracking-[0.3em] text-marrom-escuro-1/60 font-bold group-hover:text-marrom-claro-2 transition-colors">Descubra</span>
          <ChevronDown className="w-5 h-5 text-marrom-escuro-1 group-hover:text-marrom-claro-2 transition-colors" strokeWidth={1.5} />
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slowBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slow-bounce {
          animation: slowBounce 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
