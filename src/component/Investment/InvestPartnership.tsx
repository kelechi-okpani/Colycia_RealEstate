const InvestMentPartnership  = () => {
    return(
   <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-slate-50 border border-gray-100 rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-black tracking-[0.2em] text-[#F49200] uppercase block">Synergy & Scale</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Partnership Opportunities</h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
              We welcome discussions with global and localized entities seeking alpha alignment.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { type: 'Individual Investors', context: 'Seeking exposure to high-growth real estate opportunities.' },
              { type: 'Diaspora Investors', context: 'Looking to participate in Nigeria\'s expanding housing market.' },
              { type: 'Institutional Partners', context: 'Interested in long-term residential development projects.' },
              { type: 'Strategic Development Partners', context: 'Seeking collaborative opportunities in land development and housing delivery.' }
            ].map((partner, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gray-200/60 space-y-1 shadow-xs">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight">{partner.type}</h4>
                <p className="text-[11px] text-gray-500 font-light leading-relaxed">{partner.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default InvestMentPartnership;