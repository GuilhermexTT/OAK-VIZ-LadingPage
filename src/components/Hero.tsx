'use client';

import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-end justify-center overflow-hidden pb-32">
      {/* Background Image - Removed bg-fixed to make logo follow the slogan */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{ backgroundImage: "url('/IdentidadeVisual/Capa.jpg')" }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-branco-creme-1/20 to-branco-creme-1/60 z-1" />

      {/* Content: Slogan (Logo Subtitle) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none translate-y-32">
        <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic font-medium text-marrom-escuro-1/80 tracking-tight animate-fade-in">
          A imagem fala antes de qualquer coisa
        </p>
      </div>

      {/* Content: Button */}
      <div className="relative z-10 container mx-auto px-8 text-center max-w-4xl animate-fade-in-up flex flex-col items-center gap-10 mb-12 pointer-events-none">
        <a 
          href="#portfolio" 
          className="inline-flex items-center bg-marrom-claro-2 hover:bg-marrom-claro-1 text-branco-creme-1 px-10 py-4 rounded-full text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-marrom-claro-2/20 pointer-events-auto"
        >
          VER PORTFÓLIO
        </a>
      </div>

      {/* Scroll Indicator - Custom slow bounce */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-slow-bounce cursor-pointer flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-marrom-escuro-1/60 font-bold">Descubra</span>
        <ChevronDown className="w-5 h-5 text-marrom-escuro-1" strokeWidth={1.5} />
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
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, 10px);
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
