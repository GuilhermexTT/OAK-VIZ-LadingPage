'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Privacidade() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen bg-[#F8F6E5] text-[#14250A] flex flex-col items-center relative overflow-hidden"
    >
      {/* Decorative Top Accent */}
      <div className="w-full h-2 bg-[#DC9949] absolute top-0 left-0"></div>

      {/* Decorative Background Elements (optional, very subtle) */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#DC9949]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#412912]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl w-full px-6 py-20 sm:px-12 md:px-16 z-10">
        <Link 
          href="/" 
          className="group inline-flex items-center text-[#412912] hover:text-[#DC9949] transition-colors mb-16 font-medium tracking-widest uppercase text-sm"
        >
          <svg className="w-4 h-4 mr-3 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para Home
        </Link>

        <div className="border-b border-[#412912]/10 pb-10 mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#14250A] tracking-tight">Privacidade e Uso</h1>
          <p className="text-xl text-[#412912]/80 leading-relaxed font-light">
            Este site foi criado para apresentar o trabalho fotográfico da <span className="font-semibold text-[#DC9949]">Oak Viz</span> e facilitar o nosso contato. Queremos que sua experiência aqui seja simples e segura.
          </p>
        </div>

        <div className="space-y-12 font-light leading-relaxed text-[#14250A]/90">
          <section className="relative pl-6 md:pl-8 border-l-2 border-[#DC9949]/30 hover:border-[#DC9949] transition-colors duration-300">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-[#412912]">1. Suas Informações</h2>
            <ul className="list-disc pl-5 space-y-3 marker:text-[#DC9949]">
              <li><strong className="text-[#14250A] font-medium">Não coletamos dados:</strong> Este site não possui cadastro, banco de dados ou sistemas de login.</li>
              <li><strong className="text-[#14250A] font-medium">Contato via WhatsApp:</strong> Ao clicar nos botões de contato, você será redirecionado para o WhatsApp. A partir daí, nossa conversa segue as normas de privacidade do próprio aplicativo. Só teremos acesso às informações que você decidir compartilhar durante a nossa conversa.</li>
            </ul>
          </section>

          <section className="relative pl-6 md:pl-8 border-l-2 border-[#DC9949]/30 hover:border-[#DC9949] transition-colors duration-300">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-[#412912]">2. Direitos Autorais</h2>
            <ul className="list-disc pl-5 space-y-3 marker:text-[#DC9949]">
              <li><strong className="text-[#14250A] font-medium">Respeite a arte:</strong> Todas as fotos deste site são de propriedade da Oak Viz. Elas estão aqui para sua apreciação e como portfólio.</li>
              <li><strong className="text-[#14250A] font-medium">Uso proibido:</strong> É proibido baixar ou usar essas imagens para qualquer fim (comercial ou pessoal) sem falar com a gente antes. O olhar do fotógrafo é o nosso maior patrimônio!</li>
            </ul>
          </section>

          <section className="relative pl-6 md:pl-8 border-l-2 border-[#DC9949]/30 hover:border-[#DC9949] transition-colors duration-300">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-[#412912]">3. Cookies</h2>
            <p className="mb-4">
              Usamos apenas o básico para o site carregar rápido e funcionar bem no seu celular ou computador. Não rastreamos seus passos para te vender anúncios depois.
            </p>
          </section>

          <div className="pt-10 mt-16 border-t border-[#412912]/10 flex flex-col md:flex-row justify-between items-center text-sm text-[#412912]/60 uppercase tracking-widest">
            <span>© 2026 Oak Viz</span>
            <span className="mt-4 md:mt-0">Última atualização: 14 de maio de 2026</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
