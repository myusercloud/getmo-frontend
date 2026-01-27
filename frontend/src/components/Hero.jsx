import React from "react";
import { 
  Clock, 
  ShieldCheck, 
  HeartPulse, 
  UserCheck, 
  ChevronRight, 
  Calendar,
  Star
} from "lucide-react";

/**
 * Hero Component - Refined Version
 * Features a modern split-screen design with glassmorphism, 
 * smooth gradients, and enhanced responsive layouts.
 */
export default function Hero() {
  // Using a professional medical placeholder for the background
  const heroImageUrl = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070";

  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image with Gradient Mask */}
        <div 
          className="hidden lg:block absolute inset-0 left-1/3 w-2/3 h-full"
          style={{
            backgroundImage: `url(${heroImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)",
          }}
        />
        
        {/* Mobile/Tablet Background */}
        <div 
          className="lg:hidden absolute inset-0 w-full h-full opacity-40"
          style={{
            backgroundImage: `url(${heroImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Decorative Shapes */}
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[300px] h-[300px] bg-indigo-100 rounded-full blur-[100px] opacity-40"></div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="animate-in fade-in slide-in-from-left duration-700">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 mb-8 shadow-sm">
              <Star size={14} className="fill-blue-600" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                Accredited Homecare Excellence
              </span>
            </div>

            {/* Typography */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              Clinical Excellence <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-blue-600">At Your Doorstep.</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-blue-100 -z-10 rounded-full opacity-50"></span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed font-medium">
              Professional hospital-grade medical care in the comfort of your home. 
              Available 24/7 for chronic management, recovery, and elder care.
            </p>

            {/* ACTION AREA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
              <a
                href="https://wa.me/254723015506"
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
              >
                Book Consultation
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-4 px-6 py-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-sm w-full sm:w-auto">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=avatar${i}`} alt="Specialist" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-slate-900">4.9/5 Rating</p>
                  <p className="text-slate-500 text-xs">From 500+ Patients</p>
                </div>
              </div>
            </div>

            {/* TRUST INDICATORS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              <TrustBadge icon={<ShieldCheck size={20} />} label="Certified" color="blue" />
              <TrustBadge icon={<HeartPulse size={20} />} label="Compassion" color="red" />
              <TrustBadge icon={<UserCheck size={20} />} label="Specialists" color="emerald" />
              <TrustBadge icon={<Clock size={20} />} label="24/7 Help" color="indigo" />
            </div>
          </div>

          {/* RIGHT SIDE (FOR TABLET/MOBILE DECORATION) */}
          <div className="hidden lg:flex justify-end relative">
            {/* Floating Info Card */}
            <div className="absolute top-10 -left-10 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Available</p>
                <p className="text-sm font-bold text-slate-900">24/7</p>
              </div>
            </div>

            <div className="absolute bottom-20 -left-20 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4 animate-float">
               <div className="flex items-center gap-1">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                 ))}
               </div>
               <p className="text-xs font-bold text-slate-700">"Highly Professional Care"</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave Divider (Optional) */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

/**
 * Reusable Trust Badge Component
 */
function TrustBadge({ icon, label, color }) {
  const colors = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    red: "bg-red-50 text-red-600 border-red-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100"
  };

  return (
    <div className={`flex items-center gap-2 p-2 rounded-xl border ${colors[color]} bg-white/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md`}>
      <div className="shrink-0">{icon}</div>
      <span className="text-[11px] font-bold text-slate-700 whitespace-nowrap">{label}</span>
    </div>
  );
}

// Simple animations via standard CSS
const style = document.createElement('style');
style.innerHTML = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
`;
document.head.appendChild(style);