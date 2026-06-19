import { ArrowRight } from "lucide-react"

const Gallery_Booking = () => {
    return (
        <>
   <section className="bg-slate-50 py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">Experience Our Work Firsthand</h3>
          <p className="text-xs sm:text-sm text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
            Physical project walkthrough structural inspections across active development vectors in Abuja can be locked in ahead of schedule with our investment relations agents.
          </p>
          <div>
            <button className="inline-flex items-center justify-center space-x-2 bg-[#F49200] text-white px-8 py-4 rounded-lg text-xs font-black tracking-widest shadow-lg shadow-amber-600/10 hover:bg-[#d98200] transition group">
              <span>SCHEDULE SITE WALKTHROUGH</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
        </>
    )
}


export default Gallery_Booking