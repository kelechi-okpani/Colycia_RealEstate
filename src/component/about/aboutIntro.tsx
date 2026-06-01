'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutIntro = () => {
  // 1. Left Side Structural Animations
  const leftColumnVariants:any = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  // 2. Right Side Text Stagger Orchestration
  const rightContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const textItemVariants:any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  // 3. Dynamic Expansion for Horizontal Accent Ruler
  const lineVariants:any = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start overflow-hidden">
      
      {/* LEFT COLUMN: BRAND IDENTIFIER & HEADING */}
      <motion.div 
        variants={leftColumnVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="lg:col-span-5 space-y-4"
      >
        <span className="text-xs font-black tracking-[0.25em] text-[#F49200] uppercase block">
          Calycia Smart Homes
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase tracking-tight">
          Building Luxury,<br />Inspired By Nature
        </h2>
        {/* Animated Horizon Line expanding from left origin */}
        <motion.div 
          variants={lineVariants}
          className="w-20 h-[3px] bg-slate-900 mt-2 origin-left" 
        />
      </motion.div>
      
      {/* RIGHT COLUMN: EDITORIAL COPY & CASE PARADOX CONTAINER */}
      <motion.div 
        variants={rightContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="lg:col-span-7 space-y-6 text-gray-500 font-light text-sm sm:text-base leading-relaxed tracking-wide"
      >
        <motion.p 
          variants={textItemVariants}
          className="font-medium text-slate-900 text-base md:text-lg tracking-normal leading-snug"
        >
          Calycia Smart Homes was founded on a simple belief: Quality housing should not be a privilege reserved for a few. 
        </motion.p>
        
        <motion.p variants={textItemVariants}>
          As Abuja continues its transformation into one of Africa's fastest-growing capital cities, the demand for modern, functional, and affordable housing has never been greater.
        </motion.p>
        
        {/* Callout Quote Box with Subtle Kinetic Pop */}
        <motion.div 
          variants={textItemVariants}
          className="p-6 md:p-8 bg-slate-50 border-l-4 border-[#F49200] my-8 rounded-r-2xl shadow-xs transition-colors duration-300 hover:bg-slate-100/70"
        >
          <p className="italic font-medium text-slate-800 text-sm md:text-base leading-relaxed">
            "Today, Abuja faces a unique housing paradox. While thousands of luxury properties remain vacant across premium districts, millions of residents continue to struggle to find quality homes that match their income levels and lifestyle aspirations."
          </p>
        </motion.div>
        
        <motion.p variants={textItemVariants}>
          Rapid urbanization, population growth, rising construction costs, and limited access to affordable financing have widened the gap between housing demand and housing supply. At Calycia Smart Homes, we see this challenge as an opportunity to redefine the future of residential living.
        </motion.p>
      </motion.div>

    </section>
  );
};

export default AboutIntro;