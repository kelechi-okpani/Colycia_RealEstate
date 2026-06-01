import {Map, Building2, CheckCircle2, Handshake, Home, Layers, Leaf, LineChart } from "lucide-react";

const Services = () => {
    return (
              <section className="max-w-7xl mx-auto px-6 space-y-24 pb-20">
        
        {/* Service 1: Residential Property Development */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-amber-50 flex items-center justify-center text-[#F49200]">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Residential Property Development</h3>
            </div>
            <div className="text-gray-600 text-sm space-y-3 leading-relaxed font-light">
              <p className="font-medium text-slate-800">We Design And Develop Modern Residential Communities That Combine Contemporary Architecture, Functionality, And Affordability.</p>
              <p>Our Developments Are Carefully Planned To Meet The Needs Of Today's Families, Professionals, And Investors While Maintaining The Highest Standards Of Quality And Sustainability.</p>
            </div>
            <div className="pt-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Our residential developments feature:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Modern Architectural Designs', 'Smart-Home-Ready Infrastructure',
                  'Green Spaces And Landscaping', 'Secure And Family-Friendly Environments',
                  'Sustainable Community Planning', 'Quality Construction Standards'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#F49200] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs font-bold text-[#F49200] italic uppercase pt-2">Every Project Is Built Around Our Philosophy Of Delivering Affordable Luxury Without Compromise.</p>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Residential Property Development Block" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Service 2: Affordable Luxury Housing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" alt="Affordable Luxury Housing Design" className="w-full h-full object-cover" />
          </div>
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-amber-50 flex items-center justify-center text-[#F49200]">
                <Home className="w-4 h-4" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Affordable Luxury Housing</h3>
            </div>
            <div className="text-gray-600 text-sm space-y-3 leading-relaxed font-light">
              <p>Abuja's Housing Market Has Long Been Divided Between Expensive Luxury Developments And Inadequate Housing Alternatives.</p>
              <p className="font-medium text-slate-800">Calycia Smart Homes Bridges This Gap By Creating Homes That Combine International Design Standards With Practical Affordability.</p>
            </div>
            <div className="pt-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Our Affordable Luxury Model Allows More People To Enjoy:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {['Modern Living Environments', 'Premium Design Aesthetics', 'Efficient Space Utilization', 'Sustainable Construction', 'Long-Term Property Value'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#F49200] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs font-bold text-slate-900 border-l-2 border-[#F49200] pl-3 uppercase tracking-wider">We Believe Quality Housing Should Be Accessible, Not Exclusive.</p>
          </div>
        </div>

        {/* Service 3: Real Estate Investment Opportunities */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded bg-amber-50 flex items-center justify-center text-[#F49200]">
                  <LineChart className="w-4 h-4" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Real Estate Investment Opportunities</h3>
              </div>
              <div className="text-gray-600 text-sm space-y-3 leading-relaxed font-light">
                <p className="font-medium text-slate-800">We Provide Investors With Access To Strategically Selected Real Estate Opportunities Within Abuja's Rapidly Expanding Property Market.</p>
                <p>Our Investment Approach Focuses On Identifying High-Growth Areas Where Increasing Population, Infrastructure Expansion, And Housing Demand Create Strong Long-Term Potential.</p>
              </div>
            </div>
            
            <div className="lg:col-span-6 bg-slate-50 p-6 rounded-xl border border-gray-100">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Investment Areas Include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-800">
                {['Residential Developments', 'Strategic Land Acquisition', 'Community Housing Projects', 'Emerging Growth Corridors', 'Future Urban Expansion Zones'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F49200]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-gray-500 font-light mt-4 pt-3 border-t border-gray-200/60">
                Our Goal Is To Create Investment Opportunities That Generate Sustainable Value While Contributing To The Development Of Thriving Communities.
              </p>
            </div>
          </div>

          {/* Double Dynamic Images Split (Ref: end of image_e081ca.png / start of image_e0814f.png) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="h-[240px] md:h-[300px] rounded-xl overflow-hidden shadow-md border border-gray-100">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" alt="Abuja Growth House Gate Asset" className="w-full h-full object-cover" />
            </div>
            <div className="h-[240px] md:h-[300px] rounded-xl overflow-hidden shadow-md border border-gray-100">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" alt="Beige Architectural Cladding Asset" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Service 4: Strategic Land Acquisition (Ref: image_e0814f.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-amber-50 flex items-center justify-center text-[#F49200]">
                <Map className="w-4 h-4" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Strategic Land Acquisition</h3>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest -mt-1">Land Asset Allocation</p>
            <div className="text-gray-600 text-sm space-y-3 leading-relaxed font-light">
              <p className="font-medium text-slate-800">As Abuja Continues To Expand, Land Remains One Of The Most Valuable Long-Term Assets In The Real Estate Sector.</p>
              <p>We Identify And Secure Strategically Positioned Land Parcels In Emerging Development Corridors With Strong Future Growth Potential.</p>
              <p className="text-xs font-semibold text-[#F49200] bg-amber-50/50 p-3 rounded-md border-l-2 border-[#F49200]">This Allows Us To Create Sustainable Communities While Providing Long-Term Value Opportunities For Stakeholders And Investors.</p>
            </div>
          </div>
          <div className="lg:col-span-6 bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between min-h-[220px]">
            <span className="text-[10px] font-black tracking-widest text-[#F49200] uppercase">Strategic Objective</span>
            <p className="text-sm md:text-base font-light text-gray-300 leading-relaxed my-4">
              "Positioning structural capital within high-yield infrastructure expansion nodes before market saturation peaks."
            </p>
            <div className="w-8 h-[2px] bg-white/20" />
          </div>
        </div>

        {/* Service 5: Smart Community Development (Ref: image_e0814f.png) */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-amber-50 flex items-center justify-center text-[#F49200]">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Smart Community Development</h3>
            </div>
            <p className="text-sm text-gray-600 font-light">
              The Future Of Housing Extends Beyond Individual Buildings. At Calycia Smart Homes, We Focus On Developing Complete Communities That Enhance Quality Of Life Through Thoughtful Planning And Modern Infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {['Road Networks', 'Green Recreational Areas', 'Security Planning', 'Utility Infrastructure', 'Sustainable Layouts', 'Smart-Living Integration'].map((pill, i) => (
              <div key={i} className="bg-white border border-gray-200/80 p-4 rounded-xl shadow-xs text-center flex flex-col items-center justify-center space-y-2 hover:border-[#F49200] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F49200]" />
                <span className="text-xs font-bold text-slate-900 tracking-tight leading-tight">{pill}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs font-black tracking-widest text-slate-400 uppercase pt-2">Our Objective Is To Create Environments Where People Can Live, Work, And Thrive.</p>
          
          {/* Wide Landscape Banner Image */}
          <div className="w-full h-[280px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 pt-2">
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80" alt="Complete Luxury Smart Community Master Plan View" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Service 6 & 7: Dual Column Split [Development Partnerships & Sustainable Housing Solutions] (Ref: image_e0814f.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
          
          {/* Service 6: Development Partnerships */}
          <div className="bg-white border border-gray-200/70 p-8 rounded-2xl shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded bg-amber-50 flex items-center justify-center text-[#F49200]">
                  <Handshake className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Development Partnerships</h3>
              </div>
              <div className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light space-y-2">
                <p>We Actively Collaborate With Investors, Landowners, Contractors, Institutions, And Strategic Partners Who Share Our Vision For The Future Of Housing.</p>
                <p className="font-medium text-slate-800">Through Partnership-Driven Development Models, We Seek To Accelerate The Delivery Of Quality Residential Communities While Creating Shared Value For All Stakeholders.</p>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <p className="text-[11px] font-black text-slate-400 tracking-wider uppercase mb-2">We Welcome Partnerships With:</p>
              <div className="flex flex-wrap gap-1.5">
                {['Individual Investors', 'Diaspora Investors', 'Landowners', 'Development Partners', 'Private Institutions', 'Public-Sector Stakeholders'].map((item, idx) => (
                  <span key={idx} className="bg-slate-50 text-slate-700 text-[10px] font-bold px-2.5 py-1.5 rounded border border-gray-100">
                    • {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Service 7: Sustainable Housing Solutions */}
          <div className="bg-slate-950 text-white p-8 rounded-2xl shadow-md space-y-4 flex flex-col justify-between border border-slate-900">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[#F49200]">
                <Leaf className="w-4 h-4" />
                <h3 className="text-xl font-black uppercase tracking-tight text-white">Sustainable Housing Solutions</h3>
              </div>
              <div className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light space-y-2">
                <p className="font-medium text-[#F49200]">Sustainability Is At The Core Of Our Development Philosophy.</p>
                <p>Our Projects Are Designed To Balance Modern Living With Environmental Responsibility By Integrating:</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-gray-200">
                {['Energy-Efficient Designs', 'Green Spaces', 'Sustainable Building Practices', 'Long-Term Community Planning', 'Responsible Land Use'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="w-1 h-1 rounded-full bg-[#F49200]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-slate-800 pt-4 text-center">
              <p className="text-xs font-bold tracking-wider text-gray-400 uppercase">We Believe Future Communities Should Be Both Economically And Environmentally Sustainable.</p>
            </div>
          </div>

        </div>
      </section>
    )

}


export default Services;