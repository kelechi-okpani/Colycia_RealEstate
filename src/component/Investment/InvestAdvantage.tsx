import { Globe2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Structural viewport emergence animation setup
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};

// Orchestration container for staggered cascading item arrival
const listContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 }
  }
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 }
  }
};

// Stagger sequence optimized specifically for country micro-pills
const countryContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
};

const countryPill: Variants = {
  hidden: { opacity: 0, x: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 12 }
  }
};

const InvestMentAdvantage = () => {
  return (
    <section className="bg-slate-50 py-20 border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block with independent delay entrance trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-12 space-y-3"
        >
          <span className="text-xs font-black tracking-[0.2em] text-[#F49200] uppercase block">
            Value Distinction
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
            The Calycia Advantage
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Unlike traditional developers focused solely on luxury estates, Calycia Smart Homes targets one of the largest underserved segments of the market.
          </p>
        </motion.div>

        {/* Dual Column Layout Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Affordable Luxury Offering Card with physical lift interaction */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            className="md:col-span-7 bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-4 cursor-default"
          >
            <h3 className="font-bold text-sm tracking-wider text-[#F49200] uppercase">
              Affordable Luxury
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">We develop homes that offer:</p>
            
            {/* Cascading structural list animation block */}
            <motion.div 
              variants={listContainer}
              className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-bold text-slate-800"
            >
              {['Modern Architecture', 'Smart-Ready Infrastructure', 'Green Spaces', 'Quality Construction', 'Contemporary Designs'].map((offer, i) => (
                <motion.div 
                  variants={listItem} 
                  key={i} 
                  className="flex items-center space-x-2"
                >
                  <motion.span 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.05), duration: 0.3 }}
                    className="w-1 h-3 bg-[#F49200] rounded-sm origin-bottom" 
                  />
                  <span>{offer}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <p className="text-xs text-gray-400 italic pt-2 border-t border-gray-50">
              While maintaining affordability for working professionals and growing families.
            </p>
          </motion.div>

          {/* Right Block: International Standards Card */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            className="md:col-span-5 bg-slate-900 text-white p-8 rounded-xl space-y-4 cursor-default shadow-lg shadow-slate-950/10"
          >
            <div className="flex items-center space-x-2 text-[#F49200]">
              {/* Spinning globe icon animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <Globe2 className="w-5 h-5" />
              </motion.div>
              <h3 className="font-bold text-sm tracking-wider uppercase">
                International Standards
              </h3>
            </div>
            
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              Our developments are inspired by successful housing models across:
            </p>
            
            {/* Horizontal sequential micro-pill alignment block */}
            <motion.div 
              variants={countryContainer}
              className="flex flex-wrap gap-2 pt-1"
            >
              {['Canada', 'United States', 'Sweden', 'Norway', 'Netherlands'].map((country, idx) => (
                <motion.span 
                  variants={countryPill}
                  whileHover={{ scale: 1.05, backgroundColor: "#1e293b", borderColor: "#F49200", color: "#fff" }}
                  key={idx} 
                  className="bg-slate-800 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded text-gray-200 border border-slate-700/60 transition-colors duration-150"
                >
                  {country}
                </motion.span>
              ))}
            </motion.div>
            
            <p className="text-xs text-gray-400 pt-3 border-t border-slate-800 font-light">
              This allows us to deliver communities that meet modern expectations while remaining relevant to local market needs.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InvestMentAdvantage;