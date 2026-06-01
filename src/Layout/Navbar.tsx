'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // Import the pathname hook
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current active route

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'INVESTMENT OPPORTUNITIES', href: '/investment' },
    { label: 'OUR SERVICES', href: '/services' },
     { label: 'GALLERY', href: '/gallery' },
  ];

  return (
    <nav className="relative z-30 max-w-7xl w-full mx-auto px-6 py-6 flex items-center justify-between bg-transparent">
      
      {/* 1. BRAND LOGO */}
      {/* <Link href="/">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative w-10 h-10 flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 55 C20 30, 40 15, 65 18 C80 20, 85 35, 80 50" stroke="#1E3A8A" strokeWidth="10" strokeLinecap="round"/>
            <path d="M40 75 L65 50 L90 75" stroke="#F49200" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="50" cy="45" r="8" fill="#F49200" />
          </svg>
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-black text-xl tracking-widest text-white font-sans">COLYCIA</span>
          <span className="text-[9px] font-bold tracking-[0.25em] text-[#F49200] mt-0.5">SMART HOMES</span>
        </div>
      </div>
      </Link> */}
      
      <Link href="/">
            <div className="flex items-center space-x-3 group cursor-pointer">
       
              <div className="relative w-15 h-10 flex-shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="Calycia Smart Homes Logo"
                  // fill
                  height={100}
                  width={100}
                  sizes="90px"
                  className=" object-contain transition-transform duration-200 group-hover:scale-105"
                  priority
                />
              </div>
             
            </div>
          </Link>


      {/* 2. DESKTOP LINKS (Dynamically Tracked) */}
      <div className="hidden lg:flex items-center space-x-8 text-xs font-bold tracking-widest">
        {navLinks.map((link, idx) => {
          // Check if the current URL matches the link's destination
          const isActive = pathname === link.href;

          return (
            <a 
              key={idx} 
              href={link.href} 
              className={`transition duration-200 relative py-1 text-gray-100 hover:text-white ${
                isActive 
                  ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#F49200] text-white' 
                  : 'hover:opacity-90'
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      {/* 3. DESKTOP CTA BUTTON */}
      <a 
        href="/contact" 
        className="hidden lg:inline-block bg-white text-slate-900 rounded-full px-7 py-3 text-xs font-black tracking-widest shadow-md hover:bg-[#F49200] hover:text-white transition duration-300 transform hover:-translate-y-0.5"
      >
        CONTACT US
      </a>

      {/* MOBILE TRIGGER */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="lg:hidden text-white focus:outline-none p-2 relative z-40 transition-colors"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* MOBILE INTERACTIVE DRAWER (Dynamically Tracked) */}
      <div 
        className={`fixed inset-0 bg-slate-950/98 z-30 flex flex-col justify-center items-center space-y-8 text-sm font-bold tracking-widest transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {navLinks.map((link, idx) => {
          const isActive = pathname === link.href;

          return (
            <a 
              key={idx} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`transition py-2 text-base ${
                isActive ? 'text-[#F49200] border-b-2 border-[#F49200]' : 'text-gray-300'
              }`}
            >
              {link.label}
            </a>
          );
        })}
        <a 
          href="/contact" 
          onClick={() => setIsOpen(false)}
          className="bg-white text-slate-900 rounded-full px-10 py-4 text-xs font-black tracking-widest shadow-lg hover:bg-[#F49200] hover:text-white transition w-2/3 text-center"
        >
          CONTACT US
        </a>
      </div>
    </nav>
  );
}