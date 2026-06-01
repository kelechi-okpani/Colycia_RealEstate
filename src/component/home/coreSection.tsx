'use client';

import React from 'react';
import { motion } from 'framer-motion';

const coreValues = [
  {
    index: "01",
    title: "OUR VISION",
    text: "To Become Africa's Leading Smart Housing Developer, Creating Sustainable Communities That Combine International Living Standards, Radiant Innovation, and Affordability While Improving The Quality Of Life For Future Generations."
  },
  {
    index: "02",
    title: "OUR MISSION",
    text: "To Bridge The Gap Between Luxury And Accessibility By Developing Thoughtfully Designed Residential Communities Inspired By Global Architectural Standards And Adapted To The Realities Of The African Market."
  },
  {
    index: "03",
    title: "OUR CORE VALUES",
    text: "We Focus On Creating Properties That Appreciate In Value And Provide Lasting Benefits For Homeowners And Investors through transparency, exceptional quality, and client-centric designs."
  }
];

const CoreSection = () => {
  // 1. Staggered Entry Orchestration for Grid Blocks
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // 2. Individual Card Float-Up Settings
  const cardVariants:any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        // use cubic bezier for typed easing instead of string
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {coreValues.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
            className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-xs hover:shadow-2xl hover:border-amber-500/20 flex flex-col space-y-6 relative overflow-hidden group cursor-default transition-all duration-300"
          >
            {/* Top Linear Highlight Anchor (Expands horizontally on hover) */}
            <span 
              className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#F49200] to-amber-500 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" 
            />

            {/* Heading Context Layout Block */}
            <div className="flex items-center justify-between">
              <div>
                <span className="inline-block bg-[#F49200]/10 border border-[#F49200]/20 text-[#F49200] text-[10px] font-black px-4 py-1.5 rounded-sm uppercase tracking-[0.15em]">
                  {item.title}
                </span>
              </div>
              {/* Structural Metric Display Mask */}
              <span className="text-3xl font-black text-slate-100 group-hover:text-amber-500/10 transition-colors duration-500 select-none">
                {item.index}
              </span>
            </div>

            {/* Primary Descriptive Content Text Block */}
            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed tracking-wide pt-2 border-t border-gray-50 group-hover:border-amber-500/5 transition-colors duration-500">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CoreSection;