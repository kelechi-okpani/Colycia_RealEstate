'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const AboutSection = () => {
  // Stagger configurations for the right-hand text content blocks
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      // cast ease to any to satisfy framer-motion Transition typing for cubic-bezier array
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as any },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 overflow-hidden">
      
      {/* 1. SECTION HEADER WITH SMOOTH SCROLL REVEAL */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-16 md:mb-20 space-y-2"
      >
        <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em] max-w-xl mx-auto leading-relaxed">
          Premium Real Estate & Luxury Apartments in Abuja
        </p>
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight uppercase relative inline-block">
          Vision Built. Future Shaped.
          <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#F49200]" />
        </h2>
      </motion.div>

      {/* 2. SPLIT LAYOUT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: ARCHITECTURAL REVEAL IMAGE */}
        <motion.div 
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] as any }}
          className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl group border border-gray-100"
        >
          {/* Ambient Image Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-40" />
          
          <Image 
            src="/home/img1.png" 
            alt="Luxury modern house facade in Abuja" 
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
          />
        </motion.div>

        {/* RIGHT COLUMN: ORCHESTRATED EDITORIAL COPY COPYWRITING */}
        <motion.div 
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {/* Accent Badge Label */}
          <motion.div variants={textItemVariants}>
            <span className="inline-block bg-[#F49200]/10 border border-[#F49200]/30 text-[#F49200] text-[10px] font-black px-4 py-1.5 rounded-sm uppercase tracking-[0.2em]">
              About Our Ecosystem
            </span>
          </motion.div>

          {/* Premium Sub-heading */}
          <motion.h3 
            variants={textItemVariants}
            className="text-2xl md:text-3xl font-black text-slate-900 leading-tight uppercase tracking-tight"
          >
            Building Luxury, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F49200] to-amber-600">
              Inspired By Perfection
            </span>
          </motion.h3>

          {/* Core Descriptive Copy block */}
          <motion.p 
            variants={textItemVariants}
            className="text-gray-500 font-light text-sm sm:text-base leading-relaxed tracking-wide"
          >
            Calycia Smart Homes was founded on a single core principle: exceptional urban living spaces should not be an elusive privilege. As Abuja driving factors transform it into one of the continent's most dynamic capital expansion corridors, we strategically engineer residential infrastructures balancing sophisticated automated systems with accessible architectural values.
          </motion.p>

          {/* Tactical Action Link Container with Dynamic Underline Expansion */}
          <motion.div variants={textItemVariants} className="pt-2">
            <a 
              href="/about" 
              className="inline-flex items-center space-x-2 text-xs font-black tracking-widest uppercase text-slate-900 group cursor-pointer relative pb-1"
            >
              <span>Read Our Blueprint</span>
              <ArrowUpRight className="w-4 h-4 text-[#F49200] transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              
              {/* Animated Custom Bottom Border Line */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F49200] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;