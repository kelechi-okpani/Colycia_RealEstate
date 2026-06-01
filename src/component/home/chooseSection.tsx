'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Gem, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: "International Inspiration",
    desc: "Drawing design inspiration from successful housing models across North America and Europe."
  },
  {
    icon: ShieldCheck,
    title: "Long Term Value",
    desc: "Creating properties and communities designed to appreciate and remain relevant for generations."
  },
  {
    icon: Gem,
    title: "Affordable Luxury",
    desc: "Delivering modern living standards without the excessive costs associated with traditional luxury developments."
  }
];

const ChooseSection = () => {
  // 1. Parent Grid Stagger Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // 2. Individual Feature Card Entrance Reveal
  const itemVariants:any = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.215, 0.61, 0.355, 1] 
      },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-t border-gray-100 overflow-hidden">
      
      {/* 1. SECTION ACCENT BADGE */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-16"
      >
        <span className="inline-block bg-[#F49200]/10 border border-[#F49200]/30 text-[#F49200] text-[10px] font-black px-4 py-1.5 rounded-sm uppercase tracking-[0.2em]">
          Why Choose Calycia Smart Homes
        </span>
      </motion.div>

      {/* 2. INTERACTIVE FEATURE GRID */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14"
      >
        {features.map((feat, idx) => {
          const IconComponent = feat.icon;
          
          return (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="space-y-5 p-6 -m-6 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-slate-50/60 group transition-all duration-300 cursor-default"
            >
              {/* Dynamic Icon Container with Snappy Pop & Fill Transition */}
              <div className="p-3.5 bg-amber-50/60 text-[#F49200] w-fit rounded-xl transition-all duration-300 group-hover:bg-[#F49200] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#F49200]/20">
                <IconComponent className="w-7 h-7 stroke-[1.75] transition-transform duration-500 ease-out group-hover:rotate-[15deg]" />
              </div>
              
              {/* Feature Text Elements */}
              <div className="space-y-2 transform transition-transform duration-300 group-hover:translate-x-1">
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed tracking-wide">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
};

export default ChooseSection;