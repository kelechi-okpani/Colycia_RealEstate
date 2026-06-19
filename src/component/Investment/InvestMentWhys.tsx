'use client'
import { ArrowRight, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Left Column typography entrance staging
const contentBlockVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 70, damping: 16, duration: 0.7 }
  }
};

// Container to delay and ripple list items sequentially
const staggeredContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const internalPill = {
  hidden: { opacity: 0, scale: 0.95, x: -10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    x: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 14 }
  }
};

const InvestMentWhys = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center overflow-hidden">
      
      {/* Narrative Context Block (Pushed to bottom layout on small viewports via CSS orders) */}
      <motion.div 
        variants={contentBlockVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="lg:col-span-6 space-y-6 order-2 lg:order-1"
      >
        {/* Section Heading Group */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <MapPin className="w-5 h-5 text-[#F49200]" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
              Why Abuja?
            </h2>
          </div>
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            A Growing Capital
          </p>
        </div>
        
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          With a metropolitan population exceeding 4.3 million residents and consistent annual growth, Abuja continues to attract professionals, entrepreneurs, government workers, and businesses from across Nigeria and beyond.
        </p>

        {/* Highlights Matrix Card */}
        <div className="space-y-3 bg-slate-50 p-6 rounded-xl border border-gray-100">
          <p className="font-bold text-xs text-slate-900 tracking-wider uppercase mb-2">
            Population growth continues to create increasing demand for:
          </p>
          
          <motion.div 
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium"
          >
            {['Residential Housing', 'Mixed-Use Developments', 'Community Infrastructure', 'Affordable Housing Solutions'].map((item, idx) => (
              <motion.div 
                variants={internalPill}
                key={idx} 
                className="flex items-center space-x-2 group cursor-default"
              >
                <motion.span 
                  whileHover={{ scale: 1.5 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#F49200] transition-transform duration-200" 
                />
                <span className="group-hover:text-slate-900 transition-colors duration-150">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call-to-Action Interactive Button Component */}
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: "#d98200" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="inline-flex items-center justify-center space-x-2 bg-[#F49200] text-white px-6 py-3.5 rounded-lg text-xs font-black tracking-widest shadow-lg shadow-amber-600/10 transition group"
        >
          <span>BOOK INSPECTION</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
        </motion.button>
      </motion.div>

      {/* Right Column: Architectural Elevation Window */}
      <motion.div 
        initial={{ opacity: 0, x: 50, scale: 1.05 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 50, damping: 16, duration: 0.9 }}
        className="lg:col-span-6 order-1 lg:order-2 h-[450px] md:h-[650px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 group relative"
      >
        <motion.img 
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          src="/home/invest2.png" // Seamlessly updated using your real terrace design asset file name verbatim
          alt="Modern White Duplex Real Estate in Abuja" 
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>

    </section>
  );
};

export default InvestMentWhys;