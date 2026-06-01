import { ArrowUpRight, Compass, Globe2, Leaf, Sparkles, TrendingUp } from "lucide-react";

const ServiceChoose = () => {
    return (

           <section className="bg-gray-50 py-20 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black tracking-[0.2em] text-[#F49200] uppercase block mb-1">Value Propositions</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Why Choose Calycia Smart Homes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: <Globe2 className="w-5 h-5" />, title: 'International Inspiration', desc: 'Drawing Design Inspiration From Successful Housing Models Across North America And Europe.' },
              { icon: <TrendingUp className="w-5 h-5" />, title: 'Long Term-Value', desc: 'Creating Properties And Communities Designed To Appreciate And Remain Relevant For Generations.' },
              { icon: <Sparkles className="w-5 h-5" />, title: 'Affordable Luxury', desc: 'Delivering Modern Living Standards Without The Excessive Costs Associated With Traditional Luxury Developments.' },
              { icon: <Leaf className="w-5 h-5" />, title: 'Sustainable Growth', desc: 'Integrating Systematic Ecological Frameworks Natively To Protect Asset Longevity and Capital Integrity.' },
              { icon: <Compass className="w-5 h-5" />, title: 'Local Expertise', desc: 'Deploying Decades Of Spatial Competency Across High-Yield Abuja Expansion Corridors Elegantly.' }
            ].map((box, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-xl border border-gray-200/60 shadow-xs space-y-4 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
                  index === 3 || index === 4 ? 'lg:col-span-1 md:col-span-1' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#F49200]">
                    {box.icon}
                  </div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">{box.title}</h4>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">{box.desc}</p>
                </div>
                <div className="flex justify-end text-[10px] font-bold text-[#F49200] tracking-widest uppercase items-center space-x-1 pt-2">
                  <span>METRIC {index + 1}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )

}


export default ServiceChoose;