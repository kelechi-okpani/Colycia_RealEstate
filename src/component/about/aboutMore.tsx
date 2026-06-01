'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const AboutMore = () => {
  // 1. Structural Orchestration Variants
  const containerVariants:any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // 2. Kinetic Elements Fade and Rise Sequences
  const elementVariants:any = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  // 3. Horizontal Signature Rule Transition
  const lineVariants:any = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-slate-950 text-white py-24 px-6 border-t border-[#F49200]/30 overflow-hidden">
      
      {/* Ambient Backdrop Conical Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F49200]/[0.02] rounded-full blur-3xl pointer-events-none z-0" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center space-y-12 relative z-10 select-none"
      >
        
        {/* Kinetic Quote Graphic Indicator */}
        <motion.div 
          variants={elementVariants}
          className="flex justify-center text-[#F49200]"
        >
          <div className="relative p-4 rounded-full bg-slate-900/50 border border-slate-800/60 shadow-inner group transition-colors duration-500 hover:border-[#F49200]/20">
            <Quote className="w-10 h-10 opacity-30 transform rotate-180 transition-transform duration-700 group-hover:rotate-0 group-hover:opacity-60" />
          </div>
        </motion.div>

        {/* Editorial Text Statement */}
        <div className="space-y-4">
          <motion.h2 
            variants={elementVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-[0.2em] text-white"
          >
            More Than Homes
          </motion.h2>
          
          <motion.p 
            variants={elementVariants}
            className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto leading-relaxed tracking-wide"
          >
            We are not simply building houses. We are building integrated communities. We are creating tangible opportunities for families to own quality assets, supporting the macro-growth of Abuja through thoughtful structural engineering.
          </motion.p>
        </div>

        {/* Brand Anchor Signature Base */}
        <div className="space-y-6 max-w-md mx-auto pt-4">
          {/* Animated Signature Axis Rule */}
          <motion.div 
            variants={lineVariants}
            className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent origin-center" 
          />
          
          <motion.div variants={elementVariants} className="space-y-1">
            <p className="text-xs font-black tracking-[0.3em] text-[#F49200] uppercase">
              Calycia Smart Homes
            </p>
            <p className="text-[10px] text-gray-500 font-light tracking-widest uppercase">
              Building Luxury, Inspired By Nature.
            </p>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default AboutMore;