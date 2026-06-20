import { ArrowRight, Building, CheckCircle2, Clock, Eye, Layers, MapPin, Maximize2, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';


interface GalleryItem {
  id: number;
  title: string;
  location: string;
  category: 'completed' | 'ongoing' | 'interiors' | 'smart-features';
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

// Parent container variant for orchestrated staggering sequence
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Creates sequential cascading effect
    }
  }
};

// Child item transition variants for structural movement
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    y: -10,
    transition: { duration: 0.25 } 
  }
};
//  const galleryItems: GalleryItem[] = [
//     {
//       id: 1,
//       title: 'Calycia Grand Residences (Phase 1)',
//       location: 'Guzape, Abuja',
//       category: 'completed',
//       categoryLabel: 'Completed Development',
//       imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
//       description: 'Fully finished luxury 5-bedroom smart detached duplex featuring minimalist white facades and automated dynamic entry corridors.'
//     },
//     {
//       id: 2,
//       title: 'Eco-Smart Twin Duplexes',
//       location: 'Katampe Extension, Abuja',
//       category: 'ongoing',
//       categoryLabel: 'Under Construction',
//       imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
//       description: 'Advanced structural implementation showcasing integrated solar arrays, concrete framing structural matrices, and continuous perimeter protection systems.'
//     },
//     {
//       id: 3,
//       title: 'Minimalist Double-Volume Lounge',
//       location: 'Wuye, Abuja',
//       category: 'interiors',
//       categoryLabel: 'Interior Architecture',
//       imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
//       description: 'Premium interior architectural detailing utilizing custom walnut wall cladding, floating linear light arrays, and smart climatic control zones.'
//     },
//     {
//       id: 4,
//       title: 'The Smart Crest Terraces',
//       location: 'Jahi, Abuja',
//       category: 'completed',
//       categoryLabel: 'Completed Development',
//       imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80',
//       description: 'Delivered row of residential blocks leveraging localized energy grids, unified smart locks, and high-efficiency spatial footprints.'
//     },
//     {
//       id: 5,
//       title: 'Integrated Automation Command Center',
//       location: 'Maitama, Abuja',
//       category: 'smart-features',
//       categoryLabel: 'Smart Automation',
//       imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80',
//       description: 'Native home automation matrix preview highlighting ambient scenery programming, localized perimeter sensors, and climate scheduling mechanics.'
//     },
//     {
//       id: 6,
//       title: 'Premium Contemporary Kitchen Fit-outs',
//       location: 'Life Camp, Abuja',
//       category: 'interiors',
//       categoryLabel: 'Interior Architecture',
//       imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80',
//       description: 'Ergonomic culinary configurations engineered with integrated invisible handles, moisture-sealed surfaces, and premium built-in appliances.'
//     },
//     {
//       id: 7,
//       title: 'Urban Oasis Core Estates',
//       location: 'Karsana Corridor, Abuja',
//       category: 'ongoing',
//       categoryLabel: 'Under Construction',
//       imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
//       description: 'Mass infrastructure deployment highlighting optimized access road mapping, deep utility lines, and foundations for upcoming affordable luxury clusters.'
//     },
//     {
//       id: 8,
//       title: 'Master Bedroom Suite Illumination',
//       location: 'Guzape, Abuja',
//       category: 'interiors',
//       categoryLabel: 'Interior Architecture',
//       imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80',
//       description: 'Luxury master quarters configured with concealed shadowline plaster ceilings, floor-to-ceiling dynamic glass elements, and localized walk-in wardrobe modules.'
//     }
//   ];
// Updated Gallery Data mapping the provided real estate assets
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'The Crest Terraces (Front Elevation)',
    location: 'Guzape, Abuja',
    category: 'completed',
    categoryLabel: 'Completed Development',
    imageUrl: '/gallery/1.jpeg',
    description: 'Direct frontal frame highlighting the symmetrical tri-color accent profiling (Forest Green, Ochre Yellow, and Charcoal Black), integrated ground-level garage bays, and dynamic vertical louvers.'
  },
  {
    id: 2,
    title: 'Eco-Smart Terrace Block (Angular Core)',
    location: 'Guzape, Abuja',
    category: 'completed',
    categoryLabel: 'Completed Development',
    imageUrl: '/gallery/2.jpeg',
    description: 'Dynamic three-quarter angular viewpoint accentuating the staggered structural depth, integrated smoked-glass curtain walls, and contemporary perimeter landscape modeling.'
  },
  {
    id: 3,
    title: 'Linear Cluster Matrix (Symmetrical Framing)',
    location: 'Guzape, Abuja',
    category: 'completed',
    categoryLabel: 'Completed Development',
    imageUrl: '/gallery/3.jpeg',
    description: 'Ground-level landscape horizon frame highlighting the white sand-textured external rendering against vibrant ornamental foliage.'
  },
  {
    id: 4,
    title: 'Ochre Wing Detail View',
    location: 'Guzape, Abuja',
    category: 'interiors', // Categorized under interiors/architectural detail
    categoryLabel: 'Architectural Detail',
    imageUrl: '/gallery/4.jpeg',
    description: 'Close-up perspective detailing the premium dark-brick veneer tiling textures framed beautifully by high-contrast geometric structural borders.'
  },
  {
    id: 5,
    title: 'Master Plan Master Matrix (Mass Elevation)',
    location: 'Guzape, Abuja',
    category: 'ongoing',
    categoryLabel: 'Under Construction',
    imageUrl: '/gallery/5.jpeg',
    description: 'Ultra-wide community scale layout preview demonstrating consecutive residential block alignment, continuous access pathways, and optimized spatial footprints.'
  },
  {
    id: 6,
    title: 'Aerial Perspective & Spatial Volumetrics',
    location: 'Guzape, Abuja',
    category: 'smart-features',
    categoryLabel: 'Site Engineering',
    imageUrl: '/gallery/6.jpeg',
    description: 'High-angle rooftop bird-eye vector mapping highlighting structural insulation boards, continuous masonry alignments, and modern block-paved interlocking layout grid.'
  },
  {
    id: 7,
    title: 'Rear Façade & Entry Portals',
    location: 'Guzape, Abuja',
    category: 'completed',
    categoryLabel: 'Completed Development',
    imageUrl: '/gallery/7.jpeg',
    description: 'Tight approach view showcasing dark security entry doors, integrated overhead lighting layout, and reflective privacy glass structures.'
  },
  {
    id: 8,
    title: 'Curated Townhouse Segment Elevation',
    location: 'Guzape, Abuja',
    category: 'interiors',
    categoryLabel: 'Architectural Detail',
    imageUrl: '/gallery/8.jpeg',
    description: 'An orthogonal frontal snapshot tracking the transition between intermediate structural columns, recessed balcony voids, and integrated planters.'
  },
  {
    id: 9,
    title: 'The Gold Crest Entry Matrix',
    location: 'Guzape, Abuja',
    category: 'smart-features',
    categoryLabel: 'Smart Automation',
    imageUrl: '/gallery/9.jpeg',
    description: 'Side entry framing capturing the sleek vehicle presentation bays, geometric structural massing, and premium landscape borders.'
  }
];

const Gallery_Lightbox = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

 

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      {/* Navigation Filter Frame - Smooth viewport arrival */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 pt-10 pb-8"
      >
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
              className={`relative flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors duration-200 whitespace-nowrap z-0 ${
                activeFilter === tab.id ? 'text-white' : 'bg-slate-50 border border-gray-200 text-slate-600 hover:bg-gray-100 hover:text-slate-900'
              }`}
            >
              {activeFilter === tab.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-slate-950 rounded-full -z-10 shadow-md shadow-slate-950/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="text-right text-[11px] text-gray-400 font-medium pr-2 hidden sm:block">
          Showing {filteredItems.length} curated perspective matrices
        </div>
      </motion.section>

      {/* Grid Display Framework with dynamic structural layout transition handling */}
    <section className="max-w-7xl mx-auto px-6 pb-24">
  <motion.div 
    layout
    variants={containerVariants}
    initial="hidden"
    animate="show"
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    <AnimatePresence mode="popLayout">
      {filteredItems.map((item, index) => (
        <motion.div 
          layout
          variants={cardVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          key={item.id}
          className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
        >
          {/* Image Frame Wrapper - Using explicit positioning for next/image fill */}
          <div className="relative h-[260px] w-full overflow-hidden bg-gray-50 isolation-isolate">
            <motion.div
              className="absolute inset-0 w-full h-full"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }}
            >
              <Image 
                src={item.imageUrl} 
                alt={item.title} 
                fill
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                className="object-cover"
                priority={index < 3} // Eager load top fold images to prevent pop-in
              />
            </motion.div>
            
            {/* Backdrop Dimmer overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-center justify-center z-10 pointer-events-none" 
            />
            
            {/* Dynamic Floating Action Icon */}
            <motion.button
              onClick={() => setSelectedImage(item)}
              initial={{ opacity: 0, y: "-30%", x: "-50%" }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-slate-950 w-12 h-12 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:top-1/2 transition-all duration-300 z-20 hover:bg-[#F49200] hover:text-white"
              title="Expand Layout Visual"
            >
              <Eye className="w-5 h-5" />
            </motion.button>

            <span className={`absolute top-4 left-4 z-20 text-[9px] font-black tracking-widest uppercase px-3 py-1.5 rounded-md shadow-xs border ${
              item.category === 'completed' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
              item.category === 'ongoing' ? 'bg-amber-50 text-amber-700 border-amber-200' :
              item.category === 'interiors' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
              'bg-slate-50 text-slate-700 border-slate-200'
            }`}>
              {item.categoryLabel}
            </span>
          </div>

          {/* Text Description Info Cards */}
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
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>
        </section>

      {/* Lightbox Overlay Module */}
            <AnimatePresence>
            {selectedImage && (
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-4 backdrop-blur-xs"
                >
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative bg-white max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-auto"
                >
                    <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#F49200" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-slate-950 text-white w-9 h-9 rounded-full flex items-center justify-center z-50 border border-slate-800"
                    aria-label="Close modal layout window"
                    >
                    <X className="w-4 h-4" />
                    </motion.button>

                    {/* Updated Lightbox Image Container utilizing fixed layout wrappers */}
                    <div className="md:w-3/5 bg-slate-950 flex items-center justify-center relative min-h-[260px] md:min-h-[480px]">
                    <motion.div
                        initial={{ scale: 1.05, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image 
                        src={selectedImage.imageUrl} 
                        alt={selectedImage.title} 
                        fill
                        sizes="(max-w-768px) 100vw, 60vw"
                        className="object-cover"
                        priority
                        />
                    </motion.div>
                    </div>

                    <div className="md:w-2/5 p-8 flex flex-col justify-between bg-white overflow-y-auto">
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15, duration: 0.4 }}
                        className="space-y-4"
                    >
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
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.4 }}
                        className="pt-8 mt-6 border-t border-gray-100 space-y-3"
                    >
                        <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Interested in similar properties?</p>
                        <motion.button 
                        whileHover="hover"
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedImage(null)}
                        className="w-full inline-flex items-center justify-center space-x-2 bg-slate-950 text-white px-5 py-3 rounded-lg text-xs font-bold tracking-widest transition-colors hover:bg-[#F49200]"
                        >
                        <span>REQUEST OFF-PLAN INFO</span>
                        <motion.div
                            variants={{
                            hover: { x: 6 }
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <ArrowRight className="w-4 h-4" />
                        </motion.div>
                        </motion.button>
                    </motion.div>
                    </div>

                </motion.div>
                </motion.div>
            )}
            </AnimatePresence>
    </>
  );
};

export default Gallery_Lightbox;