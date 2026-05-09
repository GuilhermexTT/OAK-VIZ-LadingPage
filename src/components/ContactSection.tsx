'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const whatsappNumber = "5511990033476"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá,%20vi%20seu%20portifólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto!`;

  return (
    <section id="contato" className="bg-[#14250A] py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Subtle Background Pattern or Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#587149]/5 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-classic text-5xl md:text-6xl text-[#F8F6E5] mb-8 tracking-tight leading-tight font-light italic">
            Vamos Construir Algo Incrível
          </h2>
          <div className="w-12 h-[1px] bg-[#F8F6E5]/20 mx-auto mt-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-12 md:p-20 border border-white/10 flex flex-col items-center text-center relative overflow-hidden"
        >
          <p className="text-[#F8F6E5]/80 font-light text-lg md:text-xl max-w-xl mb-12">
            Pronto para ver sua obra através de um novo olhar? Entre em contato e vamos registrar a essência do seu projeto juntos!
          </p>

          {/* Contact Icons */}
          <div className="flex gap-6 mb-12">
            <a 
              href="mailto:oakvizbr@gmail.com" 
              className="p-4 rounded-full bg-white/5 text-[#F8F6E5] hover:bg-[#F8F6E5] hover:text-[#14250A] transition-all duration-300 border border-white/10"
              title="E-mail"
            >
              <Mail size={24} strokeWidth={1.5} />
            </a>
            <a 
              href="#" 
              target="_blank"
              className="p-4 rounded-full bg-white/5 text-[#F8F6E5] hover:bg-[#F8F6E5] hover:text-[#14250A] transition-all duration-300 border border-white/10"
              title="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a 
              href="https://www.instagram.com/oakviz/" 
              target="_blank"
              className="p-4 rounded-full bg-white/5 text-[#F8F6E5] hover:bg-[#F8F6E5] hover:text-[#14250A] transition-all duration-300 border border-white/10"
              title="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>

          {/* Main WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#F8F6E5] text-[#14250A] px-10 py-5 rounded-full text-sm font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-white hover:scale-105 shadow-2xl shadow-black/20"
          >
            <MessageCircle size={20} className="group-hover:animate-bounce" />
            Entrar em Contato
          </a>

        </motion.div>
      </div>
    </section>
  );
}
