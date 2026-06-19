import { Building2, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

// Orchestrator for the three-column card grid layout arrival
const cardContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Staggers the entrance of Box 1, 2, and 3
      delayChildren: 0.15
    }
  }
};

// Elastic slide-up mechanics for individual cards
const singleCard = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 16 }
  }
};

const InvestMentValue = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      
      {/* Section Header Frame */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-xs font-black tracking-[0.2em] text-[#F49200] uppercase block mb-1">
          Target Segments
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
          Current Investment Focus
        </h2>
      </motion.div>

      {/* Interactive Animated Cards Grid */}
      <motion.div 
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        
        {/* Box 1 */}
        <motion.div 
          variants={singleCard}
          whileHover={{ y: -6, borderColor: "rgba(244, 146, 0, 0.25)" }}
          className="bg-white border border-gray-200/80 p-8 rounded-xl shadow-sm flex flex-col justify-between space-y-6 cursor-default transition-colors duration-200 group"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#F49200] group-hover:bg-[#F49200] group-hover:text-white transition-colors duration-300">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 uppercase tracking-tight">
              Residential Communities
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Development of modern housing projects within Abuja's emerging growth corridors.
            </p>
          </div>
          <div className="border-t border-gray-100 pt-4">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-1">
              Investment Areas:
            </span>
            <p className="text-xs text-slate-800 font-medium">
              Land Acquisition • Residential Construction • Community Infrastructure • Smart Housing Developments
            </p>
          </div>
        </motion.div>

        {/* Box 2 */}
        <motion.div 
          variants={singleCard}
          whileHover={{ y: -6, borderColor: "rgba(244, 146, 0, 0.25)" }}
          className="bg-white border border-gray-200/80 p-8 rounded-xl shadow-sm flex flex-col justify-between space-y-6 cursor-default transition-colors duration-200 group"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#F49200] group-hover:bg-[#F49200] group-hover:text-white transition-colors duration-300">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 uppercase tracking-tight">
              Strategic Land Banking
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              As Abuja expands beyond its traditional districts, strategic land acquisition presents significant long-term opportunities.
            </p>
          </div>
          <motion.p 
            initial={{ borderLeftWidth: 0 }}
            whileInView={{ borderLeftWidth: 2 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="text-xs text-slate-500 italic bg-gray-50 p-3 rounded border-l-[#F49200]"
          >
            Our focus is identifying high-potential locations positioned for future infrastructure growth and urban expansion.
          </motion.p>
        </motion.div>

        {/* Box 3 */}
        <motion.div 
          variants={singleCard}
          whileHover={{ y: -6, borderColor: "rgba(244, 146, 0, 0.25)" }}
          className="bg-white border border-gray-200/80 p-8 rounded-xl shadow-sm flex flex-col justify-between space-y-6 cursor-default transition-colors duration-200 group"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#F49200] group-hover:bg-[#F49200] group-hover:text-white transition-colors duration-300">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 uppercase tracking-tight">
              Public-Private Opportunities
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              As government housing initiatives continue to expand, opportunities exist to collaborate on projects that address Abuja's growing housing demand.
            </p>
          </div>
          <p className="text-xs text-slate-800 font-semibold pt-2 border-t border-gray-50">
            Calycia Smart Homes seeks strategic partnerships aligned with national housing development goals.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default InvestMentValue;