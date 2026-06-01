import React from 'react';
import { Compass, ShieldCheck, Gem, ArrowRight, Menu } from 'lucide-react';
import HeroSection from '../../src/component/home/HeroSection';
import AboutSection from '@/src/component/home/AboutSection';
import CoreSection from '@/src/component/home/coreSection';
import ServiceSection from '@/src/component/home/serviceSection';
import ChooseSection from '@/src/component/home/chooseSection';
import FeaturedSection from '@/src/component/home/featuredSection';
import CallToActionSection from '@/src/component/home/actionSection';





export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans selection:bg-[#F49200] selection:text-white">
      
      <HeroSection />

      <AboutSection />

      <CoreSection />
      
      <ServiceSection />

      <ChooseSection />

      <FeaturedSection />

      <CallToActionSection />

    </div>
  );
}