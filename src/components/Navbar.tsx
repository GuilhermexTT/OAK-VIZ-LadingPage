'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 ${
        isScrolled ? 'bg-branco-creme-1/90 backdrop-blur-lg border-b border-marrom-escuro-1/5' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-8 flex justify-between items-center">
        <div className="relative w-48 h-16">
          <Image 
            src="/IdentidadeVisual/logo_aplicação_1-removebg-preview.png"
            alt="OAK VIZ Logo"
            fill
            className={`object-contain transition-all duration-300 ${isScrolled ? 'brightness-0 opacity-80' : 'brightness-100'}`}
            priority
          />
        </div>
        
        <button 
          className="flex flex-col gap-1.5 cursor-pointer group"
          aria-label="Menu"
        >
          <span className={`w-6 h-[1.5px] transition-all ${isScrolled ? 'bg-marrom-escuro-1' : 'bg-branco-creme-1'}`}></span>
          <span className={`w-4 h-[1.5px] transition-all group-hover:w-6 ${isScrolled ? 'bg-marrom-escuro-1' : 'bg-branco-creme-1'}`}></span>
        </button>
      </nav>
    </header>
  );
}
