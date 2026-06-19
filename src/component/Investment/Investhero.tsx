import Navbar from "@/src/Layout/Navbar";
import { motion } from "framer-motion";

const InvestMentHero = () => {
  return (
    <header className="relative bg-slate-950 text-white min-h-[45vh] flex flex-col justify-between overflow-hidden">
      
      {/* Background Image with a subtle scale/zoom reveal */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity z-0"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80')` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-slate-950/40 to-slate-950 z-0" />

      {/* Navbar Wrapper to fade it in nicely with the page load */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 w-full"
      >
        <Navbar />
      </motion.div>

      {/* Hero Title Block */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-8 pb-24 text-center mt-auto">
        {/* Heading with vertical lift and tracking expansion */}
        <motion.h1 
          initial={{ opacity: 0, y: 30, letterSpacing: "0.15em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-5xl font-black uppercase text-white drop-shadow-md selection:bg-[#F49200]"
        >
          INVESTMENT OPPORTUNITIES
        </motion.h1>
        
        {/* Accent Line expanding from the center */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
          className="w-16 h-[3px] bg-[#F49200] mx-auto mt-4 origin-center" 
        />
      </div>

      {/* Architectural Wave Base rising slightly from the bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 1 }} // 1px keeps it perfectly tucked to prevent layout gaps
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10"
      >
        <svg className="relative block w-full h-[40px] sm:h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,40 C180,0 380,10 560,55 C720,95 920,95 1200,25 L1200,120 L0,120 Z" className="fill-white" />
        </svg>
      </motion.div>
    </header>
  )
}

export default InvestMentHero; 