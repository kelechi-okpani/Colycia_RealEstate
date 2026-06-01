import { CheckCircle2, ShieldAlert } from "lucide-react";

const InvestMentHousing = () => {
    return(
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 h-[650px] md:h-[650px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <img 
            src="/home/invest2.png" 
            alt="Luxury double volume residential interior" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="w-5 h-5 text-[#F49200]" />
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">A Significant Housing Gap</h2>
          </div>
          <p className="italic font-medium text-slate-700 border-l-2 border-[#F49200] pl-4 text-sm sm:text-base">
            Abuja's housing market faces a unique challenge. While premium districts contain thousands of vacant luxury homes, the majority of residents continue to face limited access to quality housing.
          </p>

          <div className="space-y-3 pt-2">
            <p className="font-bold text-xs text-slate-400 tracking-wider uppercase">Key market indicators include:</p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F49200] mt-0.5 flex-shrink-0" />
                <span>Housing demand significantly exceeds formal supply.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F49200] mt-0.5 flex-shrink-0" />
                <span>Growing pressure on satellite communities.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F49200] mt-0.5 flex-shrink-0" />
                <span>Rising rental costs across reachable nodes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F49200] mt-0.5 flex-shrink-0" />
                <span>Expanding infrastructure corridors demanding systematic layout setups.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F49200] mt-0.5 flex-shrink-0" />
                <span>Increasing demand from middle-income households.</span>
              </li>
            </ul>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 pt-1">
            These conditions create long-term opportunities for sustainable residential development.
          </p>
        </div>
      </section>
    )
}

export default InvestMentHousing;