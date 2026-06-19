'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '../../Layout/Navbar';
import { AutoType } from '@/src/utils/AutoType';

const HeroSection = () => {
  // 1. Stagger Configurations for sub-elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as any },
    },
  };

  // 2. Auto-Typing Character Logic using MotionValues
  const baseText = "BUILD GENERATIONAL WEALTH.";
  const count = useMotionValue(0);
  // Safely slices the string as the count increments from 0 to the text length
  const displayText = useTransform(count, (latest) => baseText.slice(0, Math.round(latest)));

  useEffect(() => {
    // Delays typing slightly so it begins right after the main header appears
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1.8,
      delay: 0.8,
      ease: "linear" as any,
    });
    return controls.stop;
  }, [count]);

  return (
    <header className="relative bg-slate-950 text-white min-h-[90vh] flex flex-col justify-between overflow-hidden">
      
      {/* Cinematic Ken Burns Background Zoom Effect */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center mix-blend-normal z-0"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80')` }}
      />
      
      {/* Subtle darkening gradient for structural link contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30 z-0" />

      {/* Embedded Navbar Wrapper */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Content Body with Staggered Entry Orchestration */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-12 pb-32 flex flex-col items-start justify-center my-auto"
      >
        <motion.span 
          variants={itemVariants}
          className="text-[#F49200] text-xs font-black uppercase tracking-[0.25em] mb-4 bg-amber-500/10 px-3 py-1 rounded-sm backdrop-blur-xs border border-amber-500/20"
        >
          PREMIUM REAL ESTATE INVESTMENTS
        </motion.span>
        

      <AutoType 
              phrases={[
                "PREMIUM REAL ESTATE INVESTMENTS",
                "SECURE HIGH-YIELD RENTAL REVENUE",
                // "BUILD LASTING GENERATIONAL WEALTH",
                // "STRATEGIC CAPITAL APPRECIATION",
                // "EXCLUSIVE LUXURY PORTFOLIOS"
              ]} 
            />
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase max-w-3xl mb-6 select-none">
          {/* Static First Line */}
          <motion.span variants={itemVariants} className="block mb-2 text-white">
            Invest in Abuja.
          </motion.span>
          
          {/* Auto-Typing Second Line with CSS Blinking Cursor */}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 inline-block">
            <motion.span>
              {/* {displayText} */}
  <AutoType 
              phrases={[
                "PREMIUM REAL ESTATE INVESTMENTS",
                "SECURE HIGH-YIELD RENTAL REVENUE",
                "BUILD LASTING GENERATIONAL WEALTH",
                "STRATEGIC CAPITAL APPRECIATION",
                "EXCLUSIVE LUXURY PORTFOLIOS"
              ]} 
            />

            </motion.span>
            {/* Smooth terminal cursor block */}
            <motion.span 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" as any }}
              className="inline-block ml-1 w-[3px] h-[1em] bg-[#F49200] align-middle"
            />
          </span>
        </h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-gray-300 max-w-xl text-xs sm:text-sm md:text-base font-light leading-relaxed tracking-wide"
        >
          Strategic Real Estate Opportunities In One Of Africa's Fastest Growing Capital Cities.
        </motion.p>
      </motion.div>

      {/* Liquid Wave Cutout Base */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10 translate-y-[1px]">
        <svg
          className="relative block w-full h-[50px] sm:h-[90px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C180,0 380,10 560,55 C720,95 920,95 1200,25 L1200,120 L0,120 Z"
            className="fill-gray-50"
          />
        </svg>

        {/* Floating CTA Button with Custom Spring Mechanics & Magnetic Hover */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 120, damping: 14 }}
          className="absolute top-[-10px] sm:top-[0px] left-6 sm:left-12 z-20"
        >
          <button className="bg-[#F49200] text-white font-black text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center space-x-3 shadow-xl group border border-amber-400/20 cursor-pointer relative overflow-hidden transition-all duration-300 active:scale-95 hover:bg-[#d67f00] hover:shadow-[#F49200]/20 hover:shadow-2xl">
            {/* Subtle Glare Shimmer Effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shimmer" style={{ animationDuration: '1.5s' }} />
            
            <span className="tracking-widest uppercase text-[11px] sm:text-xs">Explore Opportunities</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;

// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import Navbar from '../../Layout/Navbar';

// const HeroSection = () => {
//   // 1. Text & Element Stagger Configurations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" as const }, // Smooth cinematic easeOut
//     },
//   };

//   return (
//     <header className="relative bg-slate-950 text-white min-h-[90vh] flex flex-col justify-between overflow-hidden">
      
//       {/* Cinematic Ken Burns Background Zoom Effect */}
//       <motion.div 
//         initial={{ scale: 1.15, opacity: 0 }}
//         animate={{ scale: 1, opacity: 0.6 }}
//         transition={{ duration: 2.5, ease: "easeOut" }}
//         className="absolute inset-0 bg-cover bg-center mix-blend-normal z-0"
//         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80')` }}
//       />
      
//       {/* Subtle darkening gradient for structural link contrast */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30 z-0" />

//       {/* Embedded Navbar Wrapper */}
//       <div className="relative z-20">
//         <Navbar />
//       </div>

//       {/* Hero Content Body with Staggered Entry Orchestration */}
//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-12 pb-32 flex flex-col items-start justify-center my-auto"
//       >
//         <motion.span 
//           variants={itemVariants}
//           className="text-[#F49200] text-xs font-black uppercase tracking-[0.25em] mb-4 bg-amber-500/10 px-3 py-1 rounded-sm backdrop-blur-xs border border-amber-500/20"
//         >
//           PREMIUM REAL ESTATE INVESTMENTS
//         </motion.span>
        
//         <motion.h1 
//           variants={itemVariants}
//           className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase max-w-3xl mb-6"
//         >
//           Invest in Abuja. <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
//             Build Generational Wealth.
//           </span>
//         </motion.h1>
        
//         <motion.p 
//           variants={itemVariants}
//           className="text-gray-300 max-w-xl text-xs sm:text-sm md:text-base font-light leading-relaxed tracking-wide"
//         >
//           Strategic Real Estate Opportunities In One Of Africa's Fastest Growing Capital Cities.
//         </motion.p>
//       </motion.div>

//       {/* Liquid Wave Cutout Base */}
//       <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10 translate-y-[1px]">
//         <svg
//           className="relative block w-full h-[50px] sm:h-[90px]"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,40 C180,0 380,10 560,55 C720,95 920,95 1200,25 L1200,120 L0,120 Z"
//             className="fill-gray-50"
//           />
//         </svg>

//         {/* Floating CTA Button with Custom Spring Mechanics & Magnetic Hover */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8, y: 20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ delay: 0.8, type: "spring", stiffness: 120, damping: 14 }}
//           className="absolute top-[-10px] sm:top-[0px] left-6 sm:left-12 z-20"
//         >
//           <button className="bg-[#F49200] text-white font-black text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center space-x-3 shadow-xl group border border-amber-400/20 cursor-pointer relative overflow-hidden transition-all duration-300 active:scale-95 hover:bg-[#d67f00] hover:shadow-[#F49200]/20 hover:shadow-2xl">
//             {/* Subtle Glare Shimmer Effect */}
//             <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shimmer" style={{ animationDuration: '1.5s' }} />
            
//             <span className="tracking-widest uppercase text-[11px] sm:text-xs">Explore Opportunities</span>
//             <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
//           </button>
//         </motion.div>
//       </div>
//     </header>
//   );
// };

// export default HeroSection;