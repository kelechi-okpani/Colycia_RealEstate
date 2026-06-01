'use client';

import React from 'react';
import { 
  Building2, 
  Home, 
  LineChart, 
  Map, 
  Layers, 
  Handshake, 
  Leaf, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Compass
} from 'lucide-react';
import Navbar from '@/src/Layout/Navbar';
import ServiceHero from '@/src/component/Service/serviceHero';
import ServiceIntro from '@/src/component/Service/serviceIntro';
import Services from '@/src/component/Service/service';
import ServiceChoose from '@/src/component/Service/serviceChoose';


export default function OurServicesPage() {
  
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#F49200] selection:text-white overflow-x-hidden">
     
      <ServiceHero/>

      <ServiceIntro/>

      <Services/>

      <ServiceChoose/>

    </div>
  );
}