import Navbar from "@/src/Layout/Navbar"

const ServiceHero = () => {
    return (
         <header className="relative bg-slate-950 text-white min-h-[45vh] flex flex-col justify-between overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-luminosity z-0"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-slate-950/40 to-slate-950 z-0" />

        <Navbar />

        {/* Section Title */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-8 pb-24 text-center mt-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.2em] uppercase text-white drop-shadow-md">
            OUR SERVICES
          </h1>
          <div className="w-16 h-[3px] bg-[#F49200] mx-auto mt-4" />
        </div>

        {/* Brand Wave Shape Base Separator */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10 translate-y-[1px]">
          <svg className="relative block w-full h-[40px] sm:h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 C180,0 380,10 560,55 C720,95 920,95 1200,25 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </header>
    )
}


export default ServiceHero;