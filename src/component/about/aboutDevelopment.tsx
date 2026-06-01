'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutDevelopment = () => {
  // 1. Grid Container Orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // 2. Individual Card Entrance Curves
  const cardVariants:any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="bg-slate-50/50 py-24 md:py-32 border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CENTERED HEADER TIMELINE ENTRY */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20 space-y-3"
        >
          <span className="text-xs font-black tracking-[0.25em] text-[#F49200] uppercase block">
            Our Operating Foundations
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight leading-none">
            Our Development Philosophy
          </h2>
          <p className="text-gray-500 font-light text-xs sm:text-sm tracking-wide">
            Every Calycia Smart Homes project is strictly guided by five core principles:
          </p>
        </motion.div>

        {/* STAGGERED PHILOSOPHY GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {[
            { title: "Modern Living", desc: "We design and deliver homes that natively reflect contemporary digital lifestyles and evolving functional residential needs." },
            { title: "Affordability Without Compromise", desc: "We fundamentally believe that cost efficiency should never mean sacrificing material quality, structural safety, or elite design integrity." },
            { title: "Sustainable Communities", desc: "Our developments deeply integrate green open spaces, natural landscapes, and environmentally conscious master planning layout." },
            { title: "Long-Term Value", desc: "We focus heavily on creating appreciating properties that provide permanent, lasting equity value for homeowners and institutional investors." },
            { title: "Innovation", desc: "From smart-ready internal home configurations to efficient localized utility infrastructure solutions, we embrace progressive innovation that simplifies everyday living." }
          ].map((principle, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: "rgba(244, 146, 0, 0.25)" }}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between transition-all duration-300 group cursor-default hover:shadow-xl hover:shadow-slate-100/80 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-5">
                {/* Micro-interactive Numeric Index Bubble */}
                <div className="w-10 h-10 rounded-xl bg-amber-50/70 text-[#F49200] flex items-center justify-center font-black text-xs transition-all duration-300 group-hover:bg-[#F49200] group-hover:text-white group-hover:scale-110">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Content Text Fields */}
                <div className="space-y-2">
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed tracking-wide">
                    {principle.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutDevelopment;