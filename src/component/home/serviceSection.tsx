'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const ServiceSection = () => {
  // 1. Grid Parent Stagger Rules
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // 2. Individual Asymmetric Block Reveal Metrics
  const cardVariants:any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7,
         ease: [0.42, 0, 0.58, 1]
          
        },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 overflow-hidden">
      
      {/* SECTION HEADER WITH SCROLL REVEAL */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-2"
      >
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight uppercase relative inline-block">
          Our Architectural Services
          <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#F49200]" />
        </h2>
      </motion.div>

      {/* ASYMMETRIC GRID CONFIGURATION */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        
        {/* LEFT COLUMN: MAIN FEATURED BROADCASE CARD */}
        <motion.div 
          variants={cardVariants}
          className="lg:col-span-1 relative h-[450px] lg:h-auto rounded-2xl overflow-hidden group shadow-xl border border-slate-900/5 text-white flex flex-col justify-end p-8 cursor-pointer select-none"
        >
          {/* Next.js Optimized Image Overlay Layer */}
          <Image 
            src="/home/slide1.png" 
            alt="Residential Property Development"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Dynamic Cinematic Gradient Drop (Fixed from native broken code variable) */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10 opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
          
          <div className="relative z-20 space-y-3 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
            <span className="text-[10px] text-[#F49200] font-black uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded-xs border border-amber-500/20 w-fit block">
              Development
            </span>
            <h3 className="text-xl font-black tracking-wide uppercase leading-tight">Residential Property Development</h3>
            <p className="text-xs text-gray-300 font-light leading-relaxed">
              We design and develop modern residential communities that combine contemporary architecture, functionality, and affordability.
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: STACKED DOUBLE HORIZONTAL PLACEMENT CARDS */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Upper Stacked Row Card */}
          <motion.div 
            variants={cardVariants}
            className="relative h-[220px] rounded-2xl overflow-hidden group shadow-xl border border-slate-900/5 text-white flex flex-col justify-end p-8 cursor-pointer select-none"
          >
            <Image 
              src="/home/slide2.png" 
              alt="Real Estate Investment Opportunities"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10 opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
            
            <div className="relative z-20 max-w-xl space-y-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
              <span className="text-[10px] text-[#F49200] font-black uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded-xs border border-amber-500/20 w-fit block">
                Capital Allocation
              </span>
              <h3 className="text-xl font-black tracking-wide uppercase leading-tight">Real Estate Investment Opportunities</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed max-w-lg">
                We provide investors with access to strategically selected real estate opportunities within Abuja's rapidly expanding property market.
              </p>
            </div>
          </motion.div>

          {/* Lower Stacked Row Card */}
          <motion.div 
            variants={cardVariants}
            className="relative h-[220px] rounded-2xl overflow-hidden group shadow-xl border border-slate-900/5 text-white flex flex-col justify-end p-8 cursor-pointer select-none"
          >
            <Image 
              src="/home/slide3.png" 
              alt="Affordable Luxury Housing"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10 opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
            
            <div className="relative z-20 max-w-xl space-y-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
              <span className="text-[10px] text-[#F49200] font-black uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded-xs border border-amber-500/20 w-fit block">
                Premium Access
              </span>
              <h3 className="text-xl font-black tracking-wide uppercase leading-tight">Affordable Luxury Housing</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed max-w-lg">
                Abuja's housing market has long been divided between expensive luxury developments and inadequate housing alternatives. We bridge that divide.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* FOOTER SERVICE LINK CONTAINER */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-right mt-8"
      >
        <a 
          href="/services" 
          className="inline-flex items-center space-x-1.5 text-xs font-black tracking-widest uppercase text-slate-900 group cursor-pointer relative pb-1"
        >
          <span>See All Services</span>
          <ArrowUpRight className="w-4 h-4 text-[#F49200] transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          
          {/* Animated Interactive Bottom Border Segment */}
          <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#F49200] transition-all duration-300 ease-out group-hover:w-full" />
        </a>
      </motion.div>

    </section>
  );
};

export default ServiceSection;