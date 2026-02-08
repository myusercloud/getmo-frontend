import React, { useState, useEffect } from "react";
import { 
  Clock, ShieldCheck, HeartPulse, UserCheck, 
  ChevronRight, Calendar, Star, ChevronLeft 
} from "lucide-react";

const slides = [
  {
    title: "Critical Care",
    highlight: "24/7 Medical Support",
    description: "Professional hospital-grade medical care in the comfort of your home. Available 24/7 for chronic management.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070",
  },
{
  title: "Specialized Care",
  highlight: "For Your Loved Ones.",
  description: "Dignified and compassionate senior care services including mobility support and medication management.",
  // Verified working URL: A warm, professional homecare setting
  image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=2070",
},
  {
    title: "Post-Operative",
    highlight: "Recovery Support.",
    description: "Expert nursing care to help you recover faster after surgery without leaving your family's side.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2070",
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden">
      
      {/* BACKGROUND LAYER */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          {/* Desktop Image */}
          <div 
            className="hidden lg:block absolute inset-0 left-1/3 w-2/3 h-full"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)",
            }}
          />
          {/* Mobile Image */}
          <div 
            className="lg:hidden absolute inset-0 w-full h-full opacity-30"
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </div>
      ))}

      {/* CONTENT LAYER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="transition-all duration-700 transform translate-y-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 mb-8">
              <Star size={14} className="fill-blue-600" />
              <span className="text-xs font-bold uppercase tracking-widest">Accredited Excellence</span>
            </div>

            {/* Dynamic Text with Key to trigger re-animation */}
            <div key={current} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
                {slides[current].title} <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-blue-600">{slides[current].highlight}</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-blue-100 -z-10 rounded-full opacity-50"></span>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed font-medium">
                {slides[current].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:row items-center gap-4 mb-14">
              <a href="https://wa.me/254723015506" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group">
                Book Consultation <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button onClick={prevSlide} className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-sm">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextSlide} className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-sm">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`h-2 transition-all rounded-full ${current === i ? "w-8 bg-blue-600" : "w-2 bg-slate-300"}`}
          />
        ))}
      </div>
    </section>
  );
}