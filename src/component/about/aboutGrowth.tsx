'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const AboutGrowth = () => {
  // 1. Grid Content Stagger Orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // 2. Phase Card Progressive Rise Animation
  const cardVariants:any = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  // 3. Roadmap Core Connector Line Growth Transition
  const lineVariants:any = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.2, delay: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 overflow-hidden">
      
      {/* SECTION HEADER WITH SCROLL REVEAL */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-20 space-y-3"
      >
        <span className="text-xs font-black tracking-[0.25em] text-[#F49200] uppercase block">
          The Roadmap Forward
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight leading-none">
          Our Growth Strategy
        </h2>
        <p className="text-gray-500 font-light text-xs sm:text-sm tracking-wide">
          Our long-term vision extends far beyond individual, isolated real-estate developments.
        </p>
      </motion.div>

      {/* INTERACTIVE ROADMAP STACK WRAPPER */}
      <div className="relative">
        
        {/* Dynamic Connected Timeline Track (Replaces static CSS pseudo-element for crisp motion) */}
        <motion.div 
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 hidden lg:block origin-left z-0"
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10"
        >
          {[
            { phase: "Phase One", title: "Strategic Entry", desc: "Develop foundational affordable luxury residential communities in high-demand, strategic growth areas directly across Abuja." },
            { phase: "Phase Two", title: "Regional Expansion", desc: "Expand outwards into emerging satellite districts where massive population growth and infrastructure development create critical housing demands." },
            { phase: "Phase Three", title: "National Recognition", desc: "Establish Calycia Smart Homes as a nationally recognized real estate brand, replicating our model across major Nigerian urban hubs." }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-100 p-8 rounded-2xl shadow-xl shadow-slate-100/40 space-y-5 transition-all duration-300 group cursor-default hover:border-[#F49200]/40 hover:shadow-2xl hover:shadow-slate-200/60"
            >
              {/* Dynamic Phase Status Badge */}
              <div className="w-fit">
                <span className="text-[10px] font-black tracking-widest text-[#F49200] uppercase bg-amber-50/80 px-3 py-1.5 rounded-md transition-colors duration-300 group-hover:bg-[#F49200] group-hover:text-white">
                  {item.phase}
                </span>
              </div>
              
              {/* Card Title & Kinetic Icon Anchor */}
              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 transform transition-all duration-300 group-hover:text-[#F49200] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                
                {/* Descriptive Copy Block */}
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default AboutGrowth;