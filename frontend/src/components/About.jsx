import React from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  HeartHandshake, 
  ShieldCheck, 
  Users 
} from "lucide-react";

/**
 * About Section Component - Refined Version
 * Combines mission-driven storytelling with professional authority,
 * featuring glassmorphism badges and an interactive stats grid.
 */
export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* LEFT COLUMN — TEXT CONTENT */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-8 group">
            <span className="w-12 h-[2px] bg-blue-600 transition-all group-hover:w-20"></span>
            <span className="text-blue-700 font-black text-xs uppercase tracking-[0.3em]">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
            Compassionate Homecare <br />
            <span className="text-blue-600 relative">
              You Can Trust.
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-blue-100" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h2>

          <div className="space-y-6 mb-10">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              GETMO Homecare Services provides professional medical and non-medical care 
              to patients in the comfort of their homes — supporting families with 
              post-hospitalization care, rehabilitation, and chronic care across Kenya.
            </p>

            <p className="text-lg text-slate-500 leading-relaxed">
              Our mission is to restore independence, reduce hospital readmissions, and ensure 
              quality personalized care tailored to every patient's clinical and emotional needs.
            </p>
          </div>

          {/* Key Value Points */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: <ShieldCheck className="w-5 h-5" />, text: "Fully Certified Staff" },
              { icon: <Users className="w-5 h-5" />, text: "Patient-Centered Care" },
              { icon: <Globe className="w-5 h-5" />, text: "Nationwide Coverage" },
              { icon: <HeartHandshake className="w-5 h-5" />, text: "Chronic Support" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-blue-600">{item.icon}</div>
                <span className="text-sm font-bold text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="/about"
              className="px-8 py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-2 group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border-2 border-slate-100 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 hover:border-slate-200 transition-all text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN — COMPOSITE IMAGE STACK */}
        <div className="relative order-1 lg:order-2 px-4">
          {/* Main Image Frame */}
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1584515933487-779824d29309"
              alt="Homecare nurse assisting patient"
              className="object-cover w-full h-[500px] lg:h-[600px] hover:scale-105 transition-transform duration-1000"
            />

          </div>

          {/* Floating Experience Badge */}
          <div className="absolute -top-6 -right-6 lg:right-0 bg-white shadow-2xl border border-slate-100 p-6 rounded-3xl z-20 flex flex-col items-center justify-center text-center animate-bounce-subtle">
             <span className="text-4xl font-black text-blue-600 leading-none">10+</span>
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years of<br/>Excellence</span>
          </div>

          {/* 24/7 Professional Support Badge */}
          <div className="absolute -bottom-10 left-0 lg:-left-10 bg-slate-900 text-white shadow-2xl p-6 rounded-[2rem] z-20 flex items-center gap-5 border-4 border-white max-w-[280px]">
            <div className="bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-inner shrink-0">
              24/7
            </div>
            <div>
              <p className="font-black text-lg leading-tight uppercase tracking-tight">
                Professional Support
              </p>
              <p className="text-slate-400 text-xs mt-1 font-medium italic">
                Always here for your recovery.
              </p>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-100 rounded-full -z-10 mix-blend-multiply opacity-70"></div>
        </div>

      </div>
    </section>
  );
}

// Inline styles for custom animations
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes bounce-subtle {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-bounce-subtle { animation: bounce-subtle 4s ease-in-out infinite; }
  `;
  document.head.appendChild(style);
}