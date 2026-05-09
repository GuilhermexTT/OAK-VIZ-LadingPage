'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: 'Portifólio', href: '/#portfolio' },
    { name: 'Sobre a Oak Viz', href: '/#sobre' },
    { name: 'Depoimentos', href: '/#depoimentos' },
    { name: 'Contato', href: '/#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-3 md:py-4 bg-[#14250A]/40 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/5">
      <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Left */}
        <Link href="/" className="relative z-50 w-36 h-12 md:w-48 md:h-16 hover:opacity-80 transition-opacity">
          <Image 
            src="/identidade-visual/logo-navbar.png"
            alt="OAK VIZ Logo"
            fill
            className="object-contain brightness-100"
            priority
          />
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-10">
          {menuLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-branco-creme-1 text-sm font-medium tracking-[0.2em] uppercase hover:text-verde-claro-1 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button Right */}
        <button 
          className="md:hidden relative z-50 p-2 text-branco-creme-1 hover:text-verde-claro-1 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 h-screen w-full bg-[#14250A] z-40 flex flex-col items-center justify-center gap-12"
            >
              {menuLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-branco-creme-1 text-2xl font-serif tracking-[0.3em] uppercase hover:text-verde-claro-1 transition-all"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="absolute bottom-12 text-branco-creme-1/40 text-xs tracking-widest uppercase">
                Oak Viz
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

