import { Leaf, TrendingUp } from "lucide-react";

const InvestWithUs = () => {
    return(
    <section className="bg-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-black tracking-[0.2em] text-[#F49200] uppercase block">Capital Efficiency</span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Why Invest With Us</h2>
              <div className="w-12 h-1 bg-[#F49200] mt-2" />
            </div>
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                {['Strong Market Fundamentals', 'Growing Population', 'Expanding Infrastructure', 'Increasing Housing Demand', 'Limited Quality Supply'].map((pillar, i) => (
                  <span key={i} className="bg-slate-900 border border-slate-800 text-xs text-gray-300 px-4 py-2 rounded-lg font-medium">
                    ✓ {pillar}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Growth Potential */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-xl space-y-4">
              <div className="flex items-center space-x-3 text-[#F49200]">
                <TrendingUp className="w-5 h-5" />
                <h3 className="text-base font-bold uppercase tracking-wider">Long-Term Growth Potential</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Abuja remains one of the most attractive real estate markets in West Africa. The city's continued development creates opportunities for:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-gray-200 pt-2">
                <li>• Capital Appreciation</li>
                <li>• Rental Income</li>
                <li>• Long-Term Asset Growth</li>
                <li>• Portfolio Diversification</li>
              </ul>
            </div>

            {/* Sustainable Approach */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-xl space-y-4">
              <div className="flex items-center space-x-3 text-[#F49200]">
                <Leaf className="w-5 h-5" />
                <h3 className="text-base font-bold uppercase tracking-wider">Sustainable Development Approach</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Every project is guided by structural metrics and ecological master plans to maintain lasting value:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-gray-200 pt-2">
                <li>• Quality Construction</li>
                <li>• Environmental Responsibility</li>
                <li>• Community Impact</li>
                <li>• Long-Term Value Creation</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    )
}

export default InvestWithUs;