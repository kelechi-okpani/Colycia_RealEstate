'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const AboutWhy = () => {
  // 1. Grid Container Stagger Rules
  const containerVariants:any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // 2. Card Entrance Animation Metrics
  const cardVariants:any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  // 3. Sequential Reveal for List Elements in the Center Highlight Card
  const listContainerVariants:any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const listItemVariants:any = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-slate-950 text-white py-24 md:py-32 overflow-hidden relative">
      
      {/* Dynamic Ambient Background Glow Matrix */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F49200]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-slate-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ASYMMETRIC HEADER SECTION WITH SYNCHRONIZED SCROLL ENTRY */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-black tracking-[0.25em] text-[#F49200] uppercase block mb-2">
              Market Realities
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
              Why We Exist
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-gray-400 max-w-md text-xs sm:text-sm leading-relaxed tracking-wide font-light"
          >
            Abuja's population has grown at an extraordinary pace, surpassing 4.3 million residents and continuing to expand every single year.
          </motion.p>
        </div>

        {/* METRIC-DRIVEN INTERACTIVE CHALLENGE GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch"
        >
          
          {/* LEFT CONTAINER CARD: THE CORE REALITY */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, borderColor: "rgba(244, 146, 0, 0.2)" }}
            className="bg-slate-900/40 border border-slate-900 p-8 rounded-2xl flex flex-col justify-between space-y-8 transition-all duration-300 group hover:bg-slate-900/60 shadow-xl"
          >
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-[0.15em] text-[#F49200]">
                The Core Reality
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light tracking-wide">
                As the city grows beyond its original master plan, housing demand continues to outpace supply exponentially. Traditional development entirely bypasses those who actively drive the city's growth.
              </p>
            </div>
            {/* Minimal Hardware-Accelerated Dynamic Counter Block */}
            <div className="text-5xl font-black text-slate-900 tracking-tighter transform transition-transform duration-500 group-hover:scale-105 group-hover:text-slate-800 select-none">
              01
            </div>
          </motion.div>

          {/* MIDDLE HIGH-STAKES FEATURED CARD: STRUCTURAL CHALLENGES */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="bg-slate-900 border-2 border-[#F49200] p-8 rounded-2xl lg:scale-105 shadow-2xl relative z-20 space-y-6 flex flex-col justify-center"
          >
            <h3 className="text-base font-black uppercase tracking-[0.15em] text-white flex items-center gap-2.5">
              <Target className="w-5 h-5 text-[#F49200] animate-pulse" /> 
              <span>Structural Challenges</span>
            </h3>
            
            {/* Embedded Nested List Stagger Sequences */}
            <motion.ul 
              variants={listContainerVariants}
              className="space-y-4 text-xs sm:text-sm text-gray-300 font-light tracking-wide"
            >
              {[
                "Formal housing supply remains significantly below structural demand curves.",
                "Many existing community homes fall below modern lifestyle infrastructure standards.",
                "Thousands of luxury properties remain completely vacant and out of reach for average earners.",
                "Growing families, young professionals, and regional entrepreneurs face mounting options deficits."
              ].map((text, index) => (
                <motion.li 
                  key={index}
                  variants={listItemVariants}
                  className="flex items-start gap-3 group/item"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F49200] mt-2 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-125" />
                  <span className="transition-colors duration-300 group-hover/item:text-white">
                    {text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* RIGHT CONTAINER CARD: STRATEGIC MISSION */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, borderColor: "rgba(244, 146, 0, 0.2)" }}
            className="bg-slate-900/40 border border-slate-900 p-8 rounded-2xl flex flex-col justify-between space-y-8 transition-all duration-300 group hover:bg-slate-900/60 shadow-xl"
          >
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-[0.15em] text-[#F49200]">
                Our Strategic Mission
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light tracking-wide">
                While market options focus exclusively on transient high-end luxury, Calycia was established to serve the broader market that has long been overlooked. We combine architectural distinction with localized accessibility.
              </p>
            </div>
            <div className="text-5xl font-black text-slate-900 tracking-tighter transform transition-transform duration-500 group-hover:scale-105 group-hover:text-slate-800 select-none">
              02
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutWhy;