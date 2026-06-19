import { CheckCircle2, ShieldAlert } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Left block structural slide container
const imageSectionVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 18, duration: 0.8 }
  }
};

// Orchestrator for the right column text elements
const contentContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

// Subtle emergence for independent copy segments
const textBlock: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

// Unique pop-in animation targeting the bullet lists
const checkmarkItem: Variants = {
  hidden: { opacity: 0, x: 25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 }
  }
};

const InvestMentHousing = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center overflow-hidden">
      
      {/* Left Block: Image Section with parallax overflow zoom */}
      <motion.div 
        variants={imageSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="lg:col-span-6 h-[450px] md:h-[650px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 group relative"
      >
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          whileHover={{ scale: 1.04 }}
          src="/home/invest1.png" // Replaced static image with your high-fidelity asset
          alt="Luxury double volume residential interior" 
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </motion.div>

      {/* Right Block: Animated Typographic Canvas */}
      <motion.div 
        variants={contentContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="lg:col-span-6 space-y-6"
      >
        {/* Animated Headline Group */}
        <motion.div variants={textBlock} className="flex items-center space-x-2">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ShieldAlert className="w-5 h-5 text-[#F49200]" />
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
            A Significant Housing Gap
          </h2>
        </motion.div>

        {/* Callout Box with expanding border line */}
        <motion.div variants={textBlock} className="relative pl-4">
          <motion.span 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#F49200] origin-top"
          />
          <p className="italic font-medium text-slate-700 text-sm sm:text-base">
            Abuja's housing market faces a unique challenge. While premium districts contain thousands of vacant luxury homes, the majority of residents continue to face limited access to quality housing.
          </p>
        </motion.div>

        {/* Indicator Sub-List Area */}
        <div className="space-y-3 pt-2">
          <motion.p variants={textBlock} className="font-bold text-xs text-slate-400 tracking-wider uppercase">
            Key market indicators include:
          </motion.p>
          
          <ul className="space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
            {[
              "Housing demand significantly exceeds formal supply.",
              "Growing pressure on satellite communities.",
              "Rising rental costs across reachable nodes.",
              "Expanding infrastructure corridors demanding systematic layout setups.",
              "Increasing demand from middle-income households."
            ].map((text, index) => (
              <motion.li 
                variants={checkmarkItem}
                key={index} 
                className="flex items-start gap-2.5 group"
              >
                <CheckCircle2 className="w-4 h-4 text-[#F49200] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="group-hover:text-slate-900 transition-colors duration-200">{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Footer Conclusion Statement */}
        <motion.p 
          variants={textBlock} 
          className="text-xs sm:text-sm font-semibold text-slate-900 pt-1"
        >
          These conditions create long-term opportunities for sustainable residential development.
        </motion.p>
      </motion.div>

    </section>
  );
};

export default InvestMentHousing;