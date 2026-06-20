'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Building2, ShieldCheck } from 'lucide-react';


const SingleVideo = () => {
  return (
    <section className="bg-white text-slate-900 py-16 md:py-24 overflow-hidden  border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT: Premium Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1 flex flex-col justify-center">
            <div className="space-y-2">
              <span className="text-xs font-black tracking-[0.25em] text-[#F49200] uppercase block">
                Exclusive Virtual Preview
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight max-w-xl leading-[1.1] md:leading-none">
                Experience The Crest <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-gray-500">
                  From Anywhere.
                </span>
              </h2>
              <div className="w-16 h-1 bg-[#F49200] pt-0.5" />
            </div>

            <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed max-w-xl">
              Take an immersive digital walkthrough of our high-performance developments in Guzape, Abuja. From the meticulous concrete framing matrices to the premium tricolor facades, experience how we build architectural legacy.
            </p>

            {/* Micro-spec bullet grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg w-full">
              <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-2xs">
                <Building2 className="w-5 h-5 text-[#F49200] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Structural Depth</h4>
                  <p className="text-[11px] font-medium text-gray-500">Tri-color premium elevation design.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#F49200] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Smart Shield</h4>
                  <p className="text-[11px] font-medium text-gray-500">Integrated biometric layout controls.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button className="inline-flex items-center space-x-2 bg-transparent text-[#F49200] text-xs font-bold tracking-widest uppercase hover:text-slate-900 transition-colors group cursor-pointer border-none p-0">
                <span>Request Detailed Floor Plans</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* RIGHT: Vertical Device Frame Mockup */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[260px] sm:max-w-[290px] md:max-w-[300px] aspect-[9/19] rounded-[40px] sm:rounded-[48px] bg-slate-900 border-[8px] sm:border-[10px] border-slate-900 shadow-2xl overflow-hidden ring-4 ring-gray-100 isolation-isolate"
            >
              {/* Phone Status Top Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-4 bg-slate-900 rounded-b-xl z-30 flex items-center justify-center">
                <div className="w-10 sm:w-12 h-1 bg-slate-950 rounded-full mb-1" />
              </div>

              {/* Video Player Container */}
              <div className="absolute inset-0 w-full h-full bg-slate-950 z-10">
                <video
                  src="/gallery/shorts.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-[1.01]"
                  style={{ contentVisibility: 'auto' }}
                />
                
                {/* Floating Micro Indicator */}
                <div className="absolute bottom-6 right-6 z-20 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5 text-[#F49200]" />
                </div>
              </div>

              {/* Dynamic Bottom Home Bar Overlay */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-1 bg-white/30 rounded-full z-30 pointer-events-none" />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SingleVideo;