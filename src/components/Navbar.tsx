'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-3 md:py-4 bg-[#14250A]/40 backdrop-blur-sm border-b border-white/10 shadow-lg shadow-black/5">
      <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="relative w-36 h-12 md:w-48 md:h-16">
          <Image 
            src="/identidade-visual/logo-navbar.png"
            alt="OAK VIZ Logo"
            fill
            className="object-contain brightness-100"
            priority
          />
        </div>
        
        <button 
          className="flex flex-col gap-1.5 cursor-pointer group"
          aria-label="Menu"
        >
          <span className="w-6 h-[1.5px] transition-all duration-300 bg-branco-creme-1"></span>
          <span className="w-4 h-[1.5px] transition-all duration-300 group-hover:w-6 bg-branco-creme-1"></span>
        </button>
      </nav>
    </header>
  );
}
