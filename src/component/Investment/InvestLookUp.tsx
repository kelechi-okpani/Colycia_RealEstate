import { motion, Variants } from "framer-motion";

// Main viewport reveal container
const footerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Fluid upward motion for elements
const footerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 16 }
  }
};

const InvestMentLookup = () => {
  return (
    <section className="bg-slate-950 text-white py-20 px-6 border-t-2 border-[#F49200] overflow-hidden">
      <motion.div 
        variants={footerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        {/* Top Text Group */}
        <div className="space-y-3">
          <motion.span 
            variants={footerItem}
            className="text-xs font-black tracking-[0.3em] text-[#F49200] uppercase block"
          >
            Looking Ahead
          </motion.span>
          <motion.p 
            variants={footerItem}
            className="text-sm md:text-base text-gray-300 font-light max-w-2xl mx-auto leading-relaxed"
          >
            The future of Abuja will be shaped by developers capable of delivering quality housing at scale. Calycia Smart Homes is committed to being part of that future by creating communities that combine affordability, innovation, sustainability, and long-term value.
          </motion.p>
        </div>

        {/* CTA Callout Card Box with interactive hover depth */}
        <motion.div 
          variants={footerItem}
          whileHover={{ y: -4, scale: 1.01, borderColor: "rgba(244, 146, 0, 0.3)" }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="bg-slate-900 border border-slate-800 p-6 rounded-xl max-w-xl mx-auto space-y-2 cursor-default shadow-xl shadow-black/30"
        >
          <h4 className="text-xs font-black uppercase tracking-widest text-white selection:bg-[#F49200]">
            Start Your Investment Journey
          </h4>
          <p className="text-[11px] text-gray-400 font-light">
            Whether you are an individual investor, a diaspora stakeholder, or an institutional partner, we invite you to explore opportunities with Calycia Smart Homes.
          </p>
        </motion.div>

        {/* Footer Slogan with matching dynamic top-border line animation */}
        <motion.div 
          variants={footerItem}
          className="pt-4 border-t border-slate-900/0 relative"
        >
          {/* Subtle line expansion to replace the static border top look */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-slate-800 origin-center"
          />
          
          <p className="text-[10px] text-gray-500 tracking-widest uppercase font-medium pt-4 selection:bg-[#F49200]">
            Building Luxury, Inspired By Nature • Creating Modern Communities, Delivering Long-Term Value.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default InvestMentLookup;