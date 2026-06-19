import { Leaf, TrendingUp } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Container for cascading the top elements and pills
const topContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

// Animation for individual pillar tags
const pillarBadgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 }
  }
};

// Slide up variant for the main value cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 16 }
  }
};

const InvestWithUs = () => {
  return (
    <section className="bg-slate-950 text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Header & Pillar Tags Grid */}
        <motion.div 
          variants={topContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16"
        >
          {/* Header Block */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-black tracking-[0.2em] text-[#F49200] uppercase block">
              Capital Efficiency
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              Why Invest With Us
            </h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-12 h-1 bg-[#F49200] mt-2 origin-left" 
            />
          </div>

          {/* Pillars Tags Wrapper */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              {[
                'Strong Market Fundamentals', 
                'Growing Population', 
                'Expanding Infrastructure', 
                'Increasing Housing Demand', 
                'Limited Quality Supply'
              ].map((pillar, i) => (
                <motion.span 
                  variants={pillarBadgeVariants}
                  whileHover={{ scale: 1.03, borderColor: "rgba(244, 146, 0, 0.4)", color: "#fff" }}
                  key={i} 
                  className="bg-slate-900 border border-slate-800 text-xs text-gray-300 px-4 py-2 rounded-lg font-medium cursor-default transition-colors duration-200"
                >
                  <span className="text-[#F49200] mr-1">✓</span> {pillar}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dual Value Proposition Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Card 1: Growth Potential */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, borderColor: "rgba(244, 146, 0, 0.25)", backgroundColor: "rgba(15, 23, 42, 0.8)" }}
            className="bg-slate-900/50 border border-slate-800 p-8 rounded-xl space-y-4 group cursor-default transition-colors duration-300 shadow-xl"
          >
            <div className="flex items-center space-x-3 text-[#F49200]">
              <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-base font-bold uppercase tracking-wider text-white">
                Long-Term Growth Potential
              </h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Abuja remains one of the most attractive real estate markets in West Africa. The city's continued development creates opportunities for:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-gray-200 pt-2 border-t border-slate-800/60">
              {['Capital Appreciation', 'Rental Income', 'Long-Term Asset Growth', 'Portfolio Diversification'].map((item, index) => (
                <li key={index} className="flex items-center space-x-1.5 group-hover:text-white transition-colors duration-200">
                  <span className="text-[#F49200] font-light text-sm">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Sustainable Approach */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, borderColor: "rgba(244, 146, 0, 0.25)", backgroundColor: "rgba(15, 23, 42, 0.8)" }}
            className="bg-slate-900/50 border border-slate-800 p-8 rounded-xl space-y-4 group cursor-default transition-colors duration-300 shadow-xl"
          >
            <div className="flex items-center space-x-3 text-[#F49200]">
              <Leaf className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-base font-bold uppercase tracking-wider text-white">
                Sustainable Development Approach
              </h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Every project is guided by structural metrics and ecological master plans to maintain lasting value:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-gray-200 pt-2 border-t border-slate-800/60">
              {['Quality Construction', 'Environmental Responsibility', 'Community Impact', 'Long-Term Value Creation'].map((item, index) => (
                <li key={index} className="flex items-center space-x-1.5 group-hover:text-white transition-colors duration-200">
                  <span className="text-[#F49200] font-light text-sm">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default InvestWithUs;