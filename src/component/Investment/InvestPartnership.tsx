import { motion, Variants } from "framer-motion";

// Left content reveal mechanics
const leftContentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 16 }
  }
};

// Stagger controller for the right column grid blocks
const gridContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Elastic fade and scale pop for internal partnership cards
const cardItem: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const InvestMentPartnership = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      <div className="bg-slate-50 border border-gray-100 rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Context Header Column */}
        <motion.div 
          variants={leftContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 space-y-3"
        >
          <span className="text-xs font-black tracking-[0.2em] text-[#F49200] uppercase block">
            Synergy & Scale
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
            Partnership Opportunities
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
            We welcome discussions with global and localized entities seeking alpha alignment.
          </p>
        </motion.div>

        {/* Right Side: Matrix Partnership Cards Grid */}
        <motion.div 
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {[
            { type: 'Individual Investors', context: 'Seeking exposure to high-growth real estate opportunities.' },
            { type: 'Diaspora Investors', context: 'Looking to participate in Nigeria\'s expanding housing market.' },
            { type: 'Institutional Partners', context: 'Interested in long-term residential development projects.' },
            { type: 'Strategic Development Partners', context: 'Seeking collaborative opportunities in land development and housing delivery.' }
          ].map((partner, i) => (
            <motion.div 
              variants={cardItem}
              whileHover={{ y: -4, scale: 1.01, borderColor: "rgba(244, 146, 0, 0.3)" }}
              transition={{ type: "spring", stiffness: 150, damping: 14 }}
              key={i} 
              className="bg-white p-5 rounded-xl border border-gray-200/60 space-y-1 shadow-sm cursor-default transition-colors duration-200"
            >
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight selection:bg-[#F49200]/20">
                {partner.type}
              </h4>
              <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                {partner.context}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default InvestMentPartnership;