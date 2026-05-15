'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Termos() {
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
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#14250A] tracking-tight">Termos de Uso</h1>
          <p className="text-xl text-[#412912]/80 leading-relaxed font-light">
            Bem-vindo ao site oficial da <span className="font-semibold text-[#DC9949]">Oak Viz</span>. Ao navegar e utilizar esta plataforma, você concorda com os termos e condições descritos abaixo. Estes termos visam garantir a proteção do trabalho autoral aqui exposto e a transparência na nossa comunicação.
          </p>
        </div>

        <div className="space-y-12 font-light leading-relaxed text-[#14250A]/90">
          <section className="relative pl-6 md:pl-8 border-l-2 border-[#DC9949]/30 hover:border-[#DC9949] transition-colors duration-300">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-[#412912]">1. Propriedade Intelectual e Direitos Autorais</h2>
            <p className="mb-4">
              Todo o conteúdo visual e textual deste site — incluindo fotografias, vídeos, logotipos, designs e textos — é de propriedade exclusiva da Oak Viz ou de seus licenciadores, protegidos pela Lei de Direitos Autorais (Lei nº 9.610/98).
            </p>
            <ul className="list-disc pl-5 space-y-3 marker:text-[#DC9949]">
              <li><strong className="text-[#14250A] font-medium">Proibições:</strong> É estritamente proibido baixar, reproduzir, distribuir, modificar, exibir publicamente ou utilizar qualquer imagem para fins comerciais ou editoriais sem a autorização prévia e por escrito da Oak Viz.</li>
              <li><strong className="text-[#14250A] font-medium">Uso Permitido:</strong> O compartilhamento de links diretos do portfólio para fins de visualização e indicação é permitido e incentivado.</li>
            </ul>
          </section>

          <section className="relative pl-6 md:pl-8 border-l-2 border-[#DC9949]/30 hover:border-[#DC9949] transition-colors duration-300">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-[#412912]">2. Uso do Site</h2>
            <p className="mb-4">
              Este site tem o objetivo de apresentar o portfólio de serviços de fotografia e facilitar o contato com potenciais clientes. O usuário compromete-se a:
            </p>
            <ul className="list-disc pl-5 space-y-3 marker:text-[#DC9949]">
              <li>Não utilizar robôs, scrapers ou tecnologias similares para extrair dados ou imagens de forma automatizada.</li>
              <li>Não utilizar o formulário de contato para envio de spam, conteúdo ofensivo ou comunicações não solicitadas.</li>
            </ul>
          </section>

          <section className="relative pl-6 md:pl-8 border-l-2 border-[#DC9949]/30 hover:border-[#DC9949] transition-colors duration-300">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-[#412912]">3. Coleta de Dados e Contato</h2>
            <p className="mb-4">
              Ao preencher nosso formulário de contato, você fornece dados como nome e e-mail.
            </p>
            <ul className="list-disc pl-5 space-y-3 marker:text-[#DC9949]">
              <li>Esses dados serão utilizados exclusivamente para responder à sua solicitação de orçamento ou dúvida.</li>
              <li>Não compartilhamos ou comercializamos informações de contato com terceiros. Para mais detalhes, consulte nossa Política de Privacidade.</li>
            </ul>
          </section>

          <section className="relative pl-6 md:pl-8 border-l-2 border-[#DC9949]/30 hover:border-[#DC9949] transition-colors duration-300">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-[#412912]">4. Limitação de Responsabilidade</h2>
            <p className="mb-4">
              A Oak Viz busca manter o site atualizado e funcional, porém:
            </p>
            <ul className="list-disc pl-5 space-y-3 marker:text-[#DC9949]">
              <li>Não nos responsabilizamos por interrupções temporárias de acesso devido a falhas técnicas de terceiros (hospedagem, conexão de internet).</li>
              <li>As imagens do portfólio representam trabalhos realizados e podem sofrer variações de cores e detalhes dependendo da calibração de cada monitor ou tela de dispositivo móvel.</li>
            </ul>
          </section>

          <section className="relative pl-6 md:pl-8 border-l-2 border-[#DC9949]/30 hover:border-[#DC9949] transition-colors duration-300">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-[#412912]">5. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de atualizar estes termos a qualquer momento para refletir mudanças em nossos serviços ou na legislação vigente. A data da última atualização sempre estará visível ao final deste documento.
            </p>
          </section>

          <section className="relative pl-6 md:pl-8 border-l-2 border-[#DC9949]/30 hover:border-[#DC9949] transition-colors duration-300">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-[#412912]">6. Foro</h2>
            <p>
              Para dirimir quaisquer dúvidas ou litígios decorrentes destes termos, fica eleito o foro da comarca da sede da Oak Viz, com renúncia expressa a qualquer outro.
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
