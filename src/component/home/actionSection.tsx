'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="relative bg-white border-t border-gray-100 py-24 px-6 text-center overflow-hidden">
      
      {/* 1. Ambient Premium Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* 2. Orchestrated Content Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        className="relative z-10 max-w-3xl mx-auto space-y-8"
      >
        {/* Context Tag Line */}
        <div className="space-y-4">
          <span className="inline-block bg-[#F49200]/10 border border-[#F49200]/20 text-[#F49200] text-[10px] font-black px-4 py-1.5 rounded-sm uppercase tracking-[0.2em]">
            Secure Your Acreage
          </span>
          
          {/* Dynamic Typographic Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none">
            Make Your Dream Home A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-[#F49200]">
              Reality In Abuja
            </span>
          </h2>
        </div>

        {/* 3. High-Fidelity Button Wrapper utilizing Spring Physics */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, type: "spring", stiffness: 140, damping: 14 }}
          className="pt-4 flex justify-center"
        >
          <button className="bg-[#F49200] text-white font-black text-xs sm:text-sm px-10 py-4 rounded-full flex items-center space-x-3 shadow-xl group border border-amber-400/20 cursor-pointer relative overflow-hidden transition-all duration-300 active:scale-98 hover:bg-[#d67f00] hover:shadow-[#F49200]/30 hover:shadow-2xl">
            
            {/* Pure Framer Motion Glare Shimmer (No Tailwind config edits needed) */}
            <motion.span 
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.7, ease: "linear" }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/25 to-white/0 pointer-events-none"
            />
            
            <span className="tracking-widest uppercase text-[11px] sm:text-xs">Book Inspection</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default CallToActionSection;