'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const AboutGlobal = () => {
  // 1. Asymmetric Entry Vectors
  const rowTextVariants:any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const rowImageVariants:any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  // 2. Sequential Checklist Pop Staggers
  const pillContainerVariants:any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const pillVariants:any = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-28 md:space-y-40 overflow-hidden">
      
      {/* ROW 1: GLOBAL STANDARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* TEXT AREA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={rowTextVariants}
          className="lg:col-span-6 space-y-6 order-2 lg:order-1"
        >
          <div className="space-y-2">
            <span className="text-xs font-black tracking-[0.25em] text-[#F49200] uppercase block">
              Architectural Benchmarks
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight leading-none">
              Inspired By Global Standards
            </h2>
          </div>
          
          <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed tracking-wide">
            Our developments draw design and structural inspiration from some of the world's most successful residential communities across North America and Europe. Our goal is to bring international lifestyle standards to Nigeria without creating unfeasible financial burdens.
          </p>
          
          {/* STAGGERED PILL GRID */}
          <motion.div 
            variants={pillContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4"
          >
            {[
              "Modern Architectural Excellence", 
              "Functional Living Spaces", 
              "Smart Home Integration", 
              "Green Community Planning", 
              "Energy-Efficient Designs", 
              "Sustainable Infrastructure", 
              "Family-Oriented Environments"
            ].map((pill, idx) => (
              <motion.div 
                key={idx} 
                variants={pillVariants}
                className="flex items-center space-x-2.5 text-xs font-bold text-slate-800 bg-slate-50/80 border border-slate-100 p-3.5 rounded-xl transition-all duration-300 hover:bg-white hover:border-[#F49200]/20 hover:shadow-md hover:shadow-slate-100/50 group/item cursor-default"
              >
                <CheckCircle2 className="w-4 h-4 text-[#F49200] flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                <span className="tracking-wide text-slate-700 font-medium transition-colors duration-300 group-hover/item:text-slate-900">
                  {pill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* IMAGE CONTAINER */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={rowImageVariants}
          className="lg:col-span-6 order-1 lg:order-2 relative h-[320px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-slate-900/5 group select-none"
        >
          <Image 
            src="/home/slide3.png" 
            alt="Global modern architecture standard" 
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/5 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
        </motion.div>
      </div>

      {/* ROW 2: BUILDING THE FUTURE OF ABUJA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* IMAGE CONTAINER */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={rowImageVariants}
          className="lg:col-span-6 relative h-[320px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-slate-900/5 group select-none"
        >
          <Image 
            src="/home/slide1.png" 
            alt="Abuja commercial real estate growth" 
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/5 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
        </motion.div>

        {/* TEXT AREA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={rowTextVariants}
          className="lg:col-span-6 space-y-6"
        >
          <div className="space-y-2">
            <span className="text-xs font-black tracking-[0.25em] text-[#F49200] uppercase block">
              Urban Decentralization
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight leading-none">
              Building The Future of Abuja
            </h2>
          </div>
          
          <div className="space-y-4 text-gray-500 font-light text-sm md:text-base leading-relaxed tracking-wide">
            <p>
              As Abuja continues to expand into emerging districts and satellite communities, the city's future will increasingly depend on well-planned developments that support population growth while maintaining an uncompromising quality of life.
            </p>
            <p>
              The decentralization of Abuja is creating new growth corridors. Calycia Smart Homes is strategically positioned to participate in this transformation by developing residential hubs that are not only attractive but entirely functional, sustainable, and accessible.
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default AboutGlobal;