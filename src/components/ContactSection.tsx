'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'arquitetura',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio (integrar com API depois se necessário)
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setFormData({ name: '', email: '', projectType: 'arquitetura', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contato" className="bg-[#F8F6E5] py-24 md:py-32 px-6 border-t border-[#14250A]/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1B0F03] font-light tracking-tight leading-tight">
            Vamos registrar sua <br className="hidden md:block" /> próxima obra?
          </h2>
          <div className="w-16 h-[1px] bg-[#14250A]/20 mx-auto mt-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Nome */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nome completo"
                  className="w-full bg-transparent border-b border-[#412912]/20 py-4 text-[#1B0F03] placeholder:text-[#412912]/40 focus:outline-none focus:border-[#14250A] transition-colors font-light"
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Seu melhor e-mail"
                  className="w-full bg-transparent border-b border-[#412912]/20 py-4 text-[#1B0F03] placeholder:text-[#412912]/40 focus:outline-none focus:border-[#14250A] transition-colors font-light"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Tipo de Projeto */}
              <div className="relative group">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#412912]/20 py-4 text-[#1B0F03]/80 focus:outline-none focus:border-[#14250A] transition-colors font-light appearance-none cursor-pointer"
                >
                  <option value="arquitetura">Arquitetura</option>
                  <option value="corporativo">Corporativo</option>
                  <option value="outros">Outros</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#412912]/40">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>

              {/* Fake spacer for alignment */}
              <div className="hidden md:block"></div>
            </div>

            {/* Mensagem */}
            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Conte-me um pouco sobre o projeto..."
                rows={4}
                className="w-full bg-transparent border-b border-[#412912]/20 py-4 text-[#1B0F03] placeholder:text-[#412912]/40 focus:outline-none focus:border-[#14250A] transition-colors font-light resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-6 pt-8 pb-12">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#14250A] text-[#F8F6E5] px-12 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#587149] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-black/5"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
              
              {status === 'success' && (
                <p className="text-[#14250A] text-sm font-light italic">Mensagem enviada com sucesso! Em breve entrarei em contato.</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
