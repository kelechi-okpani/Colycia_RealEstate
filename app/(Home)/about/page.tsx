'use client';

import React from 'react';
import { 
  Compass, 
  ShieldCheck, 
  Gem, 
  Target, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Quote 
} from 'lucide-react';
import Navbar from '@/src/Layout/Navbar';
import AboutHero from '@/src/component/about/aboutHero';
import AboutIntro from '@/src/component/about/aboutIntro';
import AboutWhy from '@/src/component/about/aboutWhy';
import AboutGlobal from '@/src/component/about/aboutGlobal';
import AboutDevelopment from '@/src/component/about/aboutDevelopment';
import AboutGrowth from '@/src/component/about/aboutGrowth';
import AboutMore from '@/src/component/about/aboutMore';



export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#F49200] selection:text-white overflow-x-hidden">
      
      {/* 1. SUB-PAGE HERO BANNER */}
       <AboutHero />

       <AboutIntro />


       <AboutWhy />

       <AboutGlobal />

       <AboutDevelopment />
       
       <AboutGrowth />
       
       <AboutMore />

    


      {/* 6. GROWTH STRATEGY TIMELINE SECTION */}
   

      {/* 7. MORE THAN HOMES & SIGN-OFF (Luxury Editorial Footer Block) */}
   

    </div>
  );
}