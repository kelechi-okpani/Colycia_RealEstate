import { Building2, MapPin, Users } from "lucide-react";

const InvestMentValue = () => {
    return(
  <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-black tracking-[0.2em] text-[#F49200] uppercase block mb-1">Target Segments</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Current Investment Focus</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200/80 p-8 rounded-xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#F49200]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 uppercase tracking-tight">Residential Communities</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Development of modern housing projects within Abuja's emerging growth corridors.
              </p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-1">Investment Areas:</span>
              <p className="text-xs text-slate-800 font-medium">Land Acquisition • Residential Construction • Community Infrastructure • Smart Housing Developments</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200/80 p-8 rounded-xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#F49200]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 uppercase tracking-tight">Strategic Land Banking</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                As Abuja expands beyond its traditional districts, strategic land acquisition presents significant long-term opportunities.
              </p>
            </div>
            <p className="text-xs text-slate-500 italic bg-gray-50 p-3 rounded border-l-2 border-[#F49200]">
              Our focus is identifying high-potential locations positioned for future infrastructure growth and urban expansion.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200/80 p-8 rounded-xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#F49200]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 uppercase tracking-tight">Public-Private Opportunities</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                As government housing initiatives continue to expand, opportunities exist to collaborate on projects that address Abuja's growing housing demand.
              </p>
            </div>
            <p className="text-xs text-slate-800 font-semibold">
              Calycia Smart Homes seeks strategic partnerships aligned with national housing development goals.
            </p>
          </div>
        </div>
      </section>
    )
}

export default InvestMentValue;