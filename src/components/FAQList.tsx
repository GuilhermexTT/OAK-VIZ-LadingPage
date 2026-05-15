'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type FAQ = {
  _id: string;
  question: string;
  answer: string;
};

interface FAQListProps {
  faqs: FAQ[];
}

export default function FAQList({ faqs }: FAQListProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <motion.div
          key={faq._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl md:rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden border border-marrom-escuro-1/5"
        >
          <button
            onClick={() => toggleFAQ(faq._id)}
            className="w-full text-left p-6 md:p-8 flex items-center justify-between group transition-colors hover:bg-branco-creme-1/30"
          >
            <span className="font-classic text-lg md:text-xl text-marrom-escuro-1 tracking-wide pr-8">
              {faq.question}
            </span>
            <div className={`shrink-0 p-2 rounded-full border border-marrom-escuro-1/10 transition-all duration-300 ${openId === faq._id ? 'bg-verde-claro-1 border-verde-claro-1 text-white rotate-180' : 'text-marrom-escuro-1/40'}`}>
              <ChevronDown className="w-5 h-5" />
            </div>
          </button>

          <AnimatePresence>
            {openId === faq._id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-marrom-escuro-1/5">
                  <p className="text-marrom-escuro-1/70 leading-relaxed font-light text-base md:text-lg whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
