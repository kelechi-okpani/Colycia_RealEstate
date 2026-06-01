'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const FeaturedSection = () => {
  // 1. Core Stagger Configuration for Property Layout Grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // 2. Cinematic Scroll-In Settings
  const itemVariants:any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 overflow-hidden">
      
      {/* SECTION HEADER WITH SCROLL REVEAL */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-2"
      >
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight uppercase relative inline-block">
          Featured Properties
          <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#F49200]" />
        </h2>
      </motion.div>

      {/* PROPERTY STACK & GRID WRAPPER */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6"
      >
        
        {/* LARGE HIGHLIGHT PROPERTY: GWARIMPA */}
        <motion.div 
          variants={itemVariants}
          className="relative h-[380px] md:h-[440px] rounded-2xl overflow-hidden group shadow-2xl border border-slate-900/5 flex flex-col justify-end p-8 text-white cursor-pointer select-none"
        >
          <Image 
            src="/home/slide1.png" 
            alt="Luxury Property in Gwarimpa, Abuja"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          {/* Deep Luxury Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10 opacity-85 transition-opacity duration-300 group-hover:opacity-95" />
          
          {/* Subtle Accent Tag */}
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-sm">
              Prime Location
            </span>
          </div>

          <div className="relative z-20 text-right w-full transform transition-transform duration-500 group-hover:translate-x-[-8px]">
            <span className="text-[10px] text-[#F49200] font-black uppercase tracking-[0.25em] block mb-1">
              EXCLUSIVE PORTFOLIO
            </span>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight uppercase drop-shadow-md">
              Gwarimpa, Abuja
            </h3>
          </div>
        </motion.div>

        {/* TWO SMALLER SYMMETRICAL COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* COLUMN CARD A: KUBWA */}
          <motion.div 
            variants={itemVariants}
            className="relative h-[280px] rounded-2xl overflow-hidden group shadow-xl border border-slate-900/5 flex flex-col justify-end p-6 text-white cursor-pointer select-none"
          >
            <Image 
              src="/home/slide2.png" 
              alt="Premium Property in Kubwa, Abuja"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent z-10 opacity-85 transition-opacity duration-300 group-hover:opacity-95" />
            
            <div className="relative z-20 text-center w-full transform transition-transform duration-500 group-hover:translate-y-[-4px]">
              <span className="text-[9px] text-[#F49200] font-black uppercase tracking-[0.2em] block mb-0.5">
                HIGH-GROWTH ASSET
              </span>
              <h3 className="text-xl font-black tracking-tight uppercase drop-shadow-sm">
                Kubwa, Abuja
              </h3>
            </div>
          </motion.div>

          {/* COLUMN CARD B: LUGBE */}
          <motion.div 
            variants={itemVariants}
            className="relative h-[280px] rounded-2xl overflow-hidden group shadow-xl border border-slate-900/5 flex flex-col justify-end p-6 text-white cursor-pointer select-none"
          >
            <Image 
              src="/home/slide3.png" 
              alt="Smart Housing in Lugbe, Abuja"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent z-10 opacity-85 transition-opacity duration-300 group-hover:opacity-95" />
            
            <div className="relative z-20 text-center w-full transform transition-transform duration-500 group-hover:translate-y-[-4px]">
              <span className="text-[9px] text-[#F49200] font-black uppercase tracking-[0.2em] block mb-0.5">
                MODERN ECOSYSTEM
              </span>
              <h3 className="text-xl font-black tracking-tight uppercase drop-shadow-sm">
                Lugbe, Abuja
              </h3>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* FOOTER SEE ALL ACTION NAVIGATION LINK */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-right mt-8"
      >
        <a 
          href="/properties" 
          className="inline-flex items-center space-x-1.5 text-xs font-black tracking-widest uppercase text-slate-900 group cursor-pointer relative pb-1"
        >
          <span>See All Properties</span>
          <ArrowUpRight className="w-4 h-4 text-[#F49200] transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          
          {/* Animated Signature Bottom Border Underline */}
          <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#F49200] transition-all duration-300 ease-out group-hover:w-full" />
        </a>
      </motion.div>

    </section>
  );
};

export default FeaturedSection;