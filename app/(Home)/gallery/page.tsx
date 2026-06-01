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

// Type definitions for gallery items
interface GalleryItem {
  id: number;
  title: string;
  location: string;
  category: 'completed' | 'ongoing' | 'interiors' | 'smart-features';
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Gallery Data mapping real estate development iterations
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Calycia Grand Residences (Phase 1)',
      location: 'Guzape, Abuja',
      category: 'completed',
      categoryLabel: 'Completed Development',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      description: 'Fully finished luxury 5-bedroom smart detached duplex featuring minimalist white facades and automated dynamic entry corridors.'
    },
    {
      id: 2,
      title: 'Eco-Smart Twin Duplexes',
      location: 'Katampe Extension, Abuja',
      category: 'ongoing',
      categoryLabel: 'Under Construction',
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      description: 'Advanced structural implementation showcasing integrated solar arrays, concrete framing structural matrices, and continuous perimeter protection systems.'
    },
    {
      id: 3,
      title: 'Minimalist Double-Volume Lounge',
      location: 'Wuye, Abuja',
      category: 'interiors',
      categoryLabel: 'Interior Architecture',
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      description: 'Premium interior architectural detailing utilizing custom walnut wall cladding, floating linear light arrays, and smart climatic control zones.'
    },
    {
      id: 4,
      title: 'The Smart Crest Terraces',
      location: 'Jahi, Abuja',
      category: 'completed',
      categoryLabel: 'Completed Development',
      imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80',
      description: 'Delivered row of residential blocks leveraging localized energy grids, unified smart locks, and high-efficiency spatial footprints.'
    },
    {
      id: 5,
      title: 'Integrated Automation Command Center',
      location: 'Maitama, Abuja',
      category: 'smart-features',
      categoryLabel: 'Smart Automation',
      imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80',
      description: 'Native home automation matrix preview highlighting ambient scenery programming, localized perimeter sensors, and climate scheduling mechanics.'
    },
    {
      id: 6,
      title: 'Premium Contemporary Kitchen Fit-outs',
      location: 'Life Camp, Abuja',
      category: 'interiors',
      categoryLabel: 'Interior Architecture',
      imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80',
      description: 'Ergonomic culinary configurations engineered with integrated invisible handles, moisture-sealed surfaces, and premium built-in appliances.'
    },
    {
      id: 7,
      title: 'Urban Oasis Core Estates',
      location: 'Karsana Corridor, Abuja',
      category: 'ongoing',
      categoryLabel: 'Under Construction',
      imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
      description: 'Mass infrastructure deployment highlighting optimized access road mapping, deep utility lines, and foundations for upcoming affordable luxury clusters.'
    },
    {
      id: 8,
      title: 'Master Bedroom Suite Illumination',
      location: 'Guzape, Abuja',
      category: 'interiors',
      categoryLabel: 'Interior Architecture',
      imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80',
      description: 'Luxury master quarters configured with concealed shadowline plaster ceilings, floor-to-ceiling dynamic glass elements, and localized walk-in wardrobe modules.'
    }
  ];

  // Filters items dynamically based on current selected tab state
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#F49200] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO BANNER SECTION */}
      <header className="relative bg-slate-950 text-white min-h-[45vh] flex flex-col justify-between overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity z-0"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-slate-950/40 to-slate-950 z-0" />

        <Navbar />

        {/* Dynamic Title Block */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-8 pb-24 text-center mt-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-[0.2em] uppercase text-white drop-shadow-md">
            PROJECT GALLERY
          </h1>
          <div className="w-16 h-[3px] bg-[#F49200] mx-auto mt-4" />
        </div>

        {/* Structural Curve Cut Separator */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10 translate-y-[1px]">
          <svg className="relative block w-full h-[40px] sm:h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 C180,0 380,10 560,55 C720,95 920,95 1200,25 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </header>

      {/* 2. ARCHITECTURAL STATEMENT BRIEF */}
      <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 text-center space-y-4">
        <span className="text-xs font-black tracking-[0.2em] text-[#F49200] uppercase block">
          Visual Index
        </span>
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
          Our Portfolio In Focus
        </h2>
        <p className="text-gray-500 font-light text-sm max-w-2xl mx-auto leading-relaxed">
          Explore our signature residential communities, strategic engineering phases, smart automation elements, and clean interior architectural footprints deployed across Abuja.
        </p>
      </section>

      {/* 3. DYNAMIC INTERACTIVE FILTER CONTROL BAR */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-8">
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 gap-2 sm:gap-3">
          {[
            { id: 'all', label: 'All Projects', icon: <Layers className="w-3.5 h-3.5" /> },
            { id: 'completed', label: 'Completed', icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
            { id: 'ongoing', label: 'Ongoing construction', icon: <Clock className="w-3.5 h-3.5" /> },
            { id: 'interiors', label: 'Interiors', icon: <Sparkles className="w-3.5 h-3.5" /> },
            { id: 'smart-features', label: 'Smart Tech', icon: <Building className="w-3.5 h-3.5" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${
                activeFilter === tab.id 
                  ? 'bg-slate-950 text-white shadow-md shadow-slate-950/10' 
                  : 'bg-slate-50 border border-gray-200 text-slate-600 hover:bg-gray-100 hover:text-slate-900'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="text-right text-[11px] text-gray-400 font-medium pr-2 hidden sm:block">
          Showing {filteredItems.length} curated perspective matrices
        </div>
      </section>

      {/* 4. CURATED MASONRY-STYLE ASYMMETRIC GRID CONFIGURATION */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame Wrapper */}
              <div className="relative h-[260px] w-full overflow-hidden bg-gray-50">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Background high contrast mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10" />
                
                {/* Dynamic Floating Action Icon */}
                <button
                  onClick={() => setSelectedImage(item)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-slate-950 w-12 h-12 rounded-full shadow-lg flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-20 hover:bg-[#F49200] hover:text-white"
                  title="Expand Layout Visual"
                >
                  <Eye className="w-5 h-5" />
                </button>

                {/* Floating Micro Pills */}
                <span className={`absolute top-4 left-4 z-20 text-[9px] font-black tracking-widest uppercase px-3 py-1.5 rounded-md shadow-xs border ${
                  item.category === 'completed' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                  item.category === 'ongoing' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                  item.category === 'interiors' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
                  'bg-slate-50 text-slate-700 border-slate-200'
                }`}>
                  {item.categoryLabel}
                </span>
              </div>

              {/* Text Meta Content Info Card Block */}
              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between bg-white">
                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-gray-400 text-[11px] font-semibold tracking-wide">
                    <MapPin className="w-3.5 h-3.5 text-[#F49200]" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-black text-slate-900 text-sm md:text-base uppercase tracking-tight leading-snug group-hover:text-[#F49200] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed line-clamp-2 pt-1">
                    {item.description}
                  </p>
                </div>
                
                <div className="pt-3 border-t border-gray-50 flex items-center justify-between text-[11px] font-bold tracking-wider uppercase text-slate-400 group-hover:text-slate-900 transition-colors">
                  <span>METRIC SPEC 0{index + 1}</span>
                  <button 
                    onClick={() => setSelectedImage(item)} 
                    className="flex items-center space-x-1 text-[#F49200] hover:underline bg-transparent border-none p-0 cursor-pointer"
                  >
                    <span>View Detail</span>
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LIGHTBOX AUTOMATION MODAL MODULE */}
      {selectedImage && (
        <div className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn">
          <div className="relative bg-white max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-auto">
            
            {/* Modal Close Floating Anchor */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-slate-950 text-white hover:bg-[#F49200] w-9 h-9 rounded-full flex items-center justify-center z-50 transition-colors border border-slate-800"
              aria-label="Close modal layout window"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Image View Area */}
            <div className="md:w-3/5 bg-slate-950 flex items-center justify-center relative min-h-[260px] md:min-h-[480px]">
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title} 
                className="w-full h-full object-cover md:absolute md:inset-0"
              />
            </div>

            {/* Right Detailed Descriptions Information Context */}
            <div className="md:w-2/5 p-8 flex flex-col justify-between bg-white overflow-y-auto">
              <div className="space-y-4">
                <span className="text-[10px] font-black tracking-widest text-[#F49200] uppercase bg-amber-50 px-3 py-1.5 rounded-md inline-block border border-amber-100">
                  {selectedImage.categoryLabel}
                </span>
                
                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                    {selectedImage.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-xs font-bold text-gray-400 tracking-wide pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F49200]" />
                    <span>{selectedImage.location}</span>
                  </div>
                </div>

                <div className="w-12 h-[2px] bg-gray-200" />

                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>

              {/* Modal Call To Actions Section */}
              <div className="pt-8 mt-6 border-t border-gray-100 space-y-3">
                <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Interested in similar properties?</p>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-slate-950 text-white px-5 py-3 rounded-lg text-xs font-bold tracking-widest hover:bg-[#F49200] transition group"
                >
                  <span>REQUEST OFF-PLAN INFO</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 6. BOOKING AND SCHEDULE FOOTER CARD INVITATION */}
      <section className="bg-slate-50 py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">Experience Our Work Firsthand</h3>
          <p className="text-xs sm:text-sm text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
            Physical project walkthrough structural inspections across active development vectors in Abuja can be locked in ahead of schedule with our investment relations agents.
          </p>
          <div>
            <button className="inline-flex items-center justify-center space-x-2 bg-[#F49200] text-white px-8 py-4 rounded-lg text-xs font-black tracking-widest shadow-lg shadow-amber-600/10 hover:bg-[#d98200] transition group">
              <span>SCHEDULE SITE WALKTHROUGH</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}