import { Globe2 } from "lucide-react";

const InvestMentAdvantage = () => {
    return(
    <section className="bg-slate-50 py-20 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-black tracking-[0.2em] text-[#F49200] uppercase block">Value Distinction</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">The Calycia Advantage</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Unlike traditional developers focused solely on luxury estates, Calycia Smart Homes targets one of the largest underserved segments of the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Block: Affordable Luxury offering */}
            <div className="md:col-span-7 bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="font-bold text-sm tracking-wider text-[#F49200] uppercase">Affordable Luxury</h3>
              <p className="text-xs sm:text-sm text-gray-500">We develop homes that offer:</p>
              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-bold text-slate-800">
                {['Modern Architecture', 'Smart-Ready Infrastructure', 'Green Spaces', 'Quality Construction', 'Contemporary Designs'].map((offer, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <span className="w-1 h-3 bg-[#F49200] rounded-sm" />
                    <span>{offer}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 italic pt-2 border-t border-gray-50">
                While maintaining affordability for working professionals and growing families.
              </p>
            </div>

            {/* Right Block: International Standards */}
            <div className="md:col-span-5 bg-slate-900 text-white p-8 rounded-xl space-y-4">
              <div className="flex items-center space-x-2 text-[#F49200]">
                <Globe2 className="w-5 h-5" />
                <h3 className="font-bold text-sm tracking-wider uppercase">International Standards</h3>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                Our developments are inspired by successful housing models across:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Canada', 'United States', 'Sweden', 'Norway', 'Netherlands'].map((country, idx) => (
                  <span key={idx} className="bg-slate-800 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded text-gray-200 border border-slate-700/60">
                    {country}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 pt-3 border-t border-slate-800 font-light">
                This allows us to deliver communities that meet modern expectations while remaining relevant to local market needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default InvestMentAdvantage;