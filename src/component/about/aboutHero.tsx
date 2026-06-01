'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/src/Layout/Navbar";

const AboutHero = () => {
  // 1. Text & Architectural Elements Entrance Configurations
  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants:any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }, // Smooth cinematic ease out
    },
  };

  const lineVariants:any = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <header className="relative bg-slate-950 text-white min-h-[45vh] flex flex-col justify-between overflow-hidden">
      
      {/* Cinematic Panoramic Reveal Background (Ken Burns effect) */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity z-0"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80')` }}
      />
      
      {/* Luxury Ambient Shading Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-950/40 to-slate-950 z-0" />

      {/* Reusable Clean Navbar Wrapper */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Orchestrated Title Block Container */}
      <motion.div 
        variants={headerContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-8 pb-24 text-center mt-auto select-none"
      >
        {/* Animated Subpage Main Heading */}
        <motion.h1 
          variants={titleVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.25em] uppercase text-white drop-shadow-lg"
        >
          ABOUT US
        </motion.h1>
        
        {/* Horizon Underline Expanding out from Center Origin */}
        <motion.div 
          variants={lineVariants}
          className="w-16 h-[3px] bg-[#F49200] mx-auto mt-4 origin-center" 
        />
      </motion.div>

      {/* Premium Wave Shape Base Separator */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10 translate-y-[1px]">
        <svg className="relative block w-full h-[40px] sm:h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,40 C180,0 380,10 560,55 C720,95 920,95 1200,25 L1200,120 L0,120 Z" className="fill-white" />
        </svg>
      </div>
    </header>
  );
};

export default AboutHero;