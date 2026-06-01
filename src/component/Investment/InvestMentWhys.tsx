'use client'
import { ArrowRight, MapPin } from "lucide-react";

const InvestMentWhys = () => {
    return(
     <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-[#F49200]" />
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Why Abuja?</h2>
          </div>
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase -mt-2">A Growing Capital</p>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            With a metropolitan population exceeding 4.3 million residents and consistent annual growth, Abuja continues to attract professionals, entrepreneurs, government workers, and businesses from across Nigeria and beyond.
          </p>

          <div className="space-y-3 bg-slate-50 p-6 rounded-xl border border-gray-100">
            <p className="font-bold text-xs text-slate-900 tracking-wider uppercase mb-2">Population growth continues to create increasing demand for:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              {['Residential Housing', 'Mixed-Use Developments', 'Community Infrastructure', 'Affordable Housing Solutions'].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F49200]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="inline-flex items-center justify-center space-x-2 bg-[#F49200] text-white px-6 py-3.5 rounded-lg text-xs font-black tracking-widest shadow-lg shadow-amber-600/10 hover:bg-[#d98200] transition group">
            <span>BOOK INSPECTION</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 h-[650px] md:h-[650px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <img 
            src="/home/invest1.png" 
            alt="Modern White Duplex Real Estate in Abuja" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    )
}

export default InvestMentWhys;