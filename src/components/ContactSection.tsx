'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const whatsappNumber = "5511999999999"; // Substitua pelo seu número real
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá,%20vi%20seu%20portifólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto!`;

  return (
    <section id="contato" className="bg-[#F8F6E5] py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-[2.5rem] p-12 md:p-20 shadow-[0_20px_50px_rgba(20,37,10,0.05)] border border-[#14250A]/5 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Decorative Glow (Subtle) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#14250A]/5 blur-[100px] rounded-full -z-10"></div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1B0F03] mb-6 tracking-tight leading-tight">
            Vamos Construir Algo Incrível
          </h2>
          
          <p className="text-[#1B0F03]/60 font-light text-lg md:text-xl max-w-xl mb-12">
            Pronto para transformar suas ideias em realidade? Entre em contato e vamos criar soluções inovadoras juntos.
          </p>

          {/* Contact Icons */}
          <div className="flex gap-6 mb-12">
            <a 
              href="mailto:contato@oakviz.com.br" 
              className="p-4 rounded-full bg-[#14250A]/5 text-[#14250A] hover:bg-[#14250A] hover:text-[#F8F6E5] transition-all duration-300"
              title="E-mail"
            >
              <Mail size={24} strokeWidth={1.5} />
            </a>
            <a 
              href="#" 
              className="p-4 rounded-full bg-[#14250A]/5 text-[#14250A] hover:bg-[#14250A] hover:text-[#F8F6E5] transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
            <a 
              href="#" 
              className="p-4 rounded-full bg-[#14250A]/5 text-[#14250A] hover:bg-[#14250A] hover:text-[#F8F6E5] transition-all duration-300"
              title="Instagram"
            >
              <Instagram size={24} strokeWidth={1.5} />
            </a>
          </div>

          {/* Main WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#14250A] text-[#F8F6E5] px-10 py-5 rounded-full text-sm font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#587149] hover:scale-105 shadow-2xl shadow-black/10"
          >
            <MessageCircle size={20} className="group-hover:animate-bounce" />
            Entrar em Contato
          </a>

        </motion.div>
      </div>
    </section>
  );
}
