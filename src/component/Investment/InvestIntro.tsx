import { motion, Variants } from "framer-motion";

// Container variant to handle staggered orchestration of children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Time gap between consecutive child arrivals
      delayChildren: 0.1,
    }
  }
};

// Child component reveal mechanics
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 16 }
  }
};

const InvestMentIntro = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl space-y-6"
      >
        {/* Category Badge Indicator */}
        <motion.span 
          variants={itemVariants}
          className="text-xs font-black tracking-[0.2em] text-[#F49200] uppercase block"
        >
          Strategic Positioning
        </motion.span>
        
        {/* Main Section Headline */}
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight"
        >
          Invest in The Future Of Abuja
        </motion.h2>
        
        {/* Accent Bar widening horizontally from left origin */}
        <motion.div 
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } }
          }}
          className="w-20 h-1 bg-[#F49200] mt-2 origin-left" 
        />
        
        {/* Typography Block Wrapper */}
        <div className="text-gray-600 space-y-4 text-sm md:text-base leading-relaxed pt-2">
          
          <motion.p 
            variants={itemVariants}
            className="font-semibold text-slate-900 text-base md:text-lg"
          >
            Abuja stands at the center of one of Africa's most compelling real estate opportunities. Rapid population growth, urban expansion, and a significant housing deficit have created strong demand for modern, affordable, and sustainable housing solutions.
          </motion.p>
          
          <motion.p variants={itemVariants}>
            Calycia Smart Homes is strategically positioned to address this demand by developing residential communities that combine international living standards with local affordability.
          </motion.p>
          
          <motion.p variants={itemVariants}>
            We invite investors, development partners, and diaspora stakeholders to participate in shaping the next generation of housing in Nigeria's capital city.
          </motion.p>
          
        </div>
      </motion.div>
    </section>
  );
};

export default InvestMentIntro;