'use client';

import React, { useState } from 'react';
import { 
  Maximize2, 
  X, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Building,
  Eye,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Navbar from '@/src/Layout/Navbar';
import GalleryHero from '@/src/component/Gallery/GalleryHero';
import Gallery_Architecture from '@/src/component/Gallery/GalleryArchitechture';
import Gallery_Booking from '@/src/component/Gallery/GalleryBooking';
import Gallery_Lightbox from '@/src/component/Gallery/GalleryLightbox';
import SingleVideo from '@/src/component/Gallery/SingleVideo';



export default function GalleryPage() {


  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#F49200] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO BANNER SECTION */}
      <GalleryHero/>
  

      {/* 2. ARCHITECTURAL STATEMENT BRIEF */}
       <Gallery_Architecture/>

      {/* 3. DYNAMIC INTERACTIVE FILTER CONTROL BAR */}
      {/* 4. CURATED MASONRY-STYLE ASYMMETRIC GRID CONFIGURATION */}
      {/* 5. LIGHTBOX AUTOMATION MODAL MODULE */}
   
      <SingleVideo/>
      
      <Gallery_Lightbox/>
      {/* 6. BOOKING AND SCHEDULE FOOTER CARD INVITATION */}
  
        <Gallery_Booking/>
    </div>
  );
}