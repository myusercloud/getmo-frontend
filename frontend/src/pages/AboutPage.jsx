import React from "react";
import { 
  CheckCircle2, 
  ArrowRight, 
  Stethoscope, 
  Heart, 
  ShieldCheck, 
  Users, 
  Activity, 
  Home,
  Star,
  Zap,
  Award
} from "lucide-react";

/**
 * Enhanced AboutPage Component
 * A full-page layout featuring a mission-driven header, 
 * a structured service grid, and an authoritative 'Why Choose Us' section.
 */
export default function AboutPage() {
  const services = [
    { title: "Post-Hospitalization Care", icon: <Home className="w-5 h-5" /> },
    { title: "Skilled Nursing & Meds", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Chronic Illness Support", icon: <Activity className="w-5 h-5" /> },
    { title: "Physiotherapy & Rehab", icon: <Zap className="w-5 h-5" /> },
    { title: "Elderly Companionship", icon: <Heart className="w-5 h-5" /> },
    { title: "Mobility Assistance", icon: <Users className="w-5 h-5" /> },
    { title: "Family Training", icon: <Award className="w-5 h-5" /> },
    { title: "Readmission Prevention", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  const values = [
    { id: "01", title: "Empathy-First Approach", desc: "Our team is selected not just for skill, but for their genuine compassion." },
    { id: "02", title: "Licensed Professionals", desc: "All caregivers and nurses are fully certified and vetted for home care." },
    { id: "03", title: "Independence Focus", desc: "We don't just care for you; we help you regain the strength to care for yourself." },
    { id: "04", title: "Clinical Excellence", desc: "Hospital-grade standards adapted specifically for a domestic environment." },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO / HEADER SECTION */}
      <section className="relative py-28 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest">
                Our Mission
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1]">
              About, <br />
              <span className="text-blue-600 italic font-medium">GETMO HOMEHEALTH</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              GETMO Homecare Services is Kenya's trusted partner in home-based clinical excellence. 
              We bridge the gap between hospital and home, ensuring your recovery is safe, 
              familiar, and professionally managed.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000" 
              alt="Medical Professional" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
            <p className="text-4xl font-black text-blue-600 mb-1">98%</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Patient <br/>Satisfaction</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Who We Are</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            We specialize in turning the home into a healing environment. From complex 
            post-hospitalization management to daily companionship for the elderly, 
            our licensed nurses and caregivers are trained to provide clinical support 
            that promotes dignity and independence.
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
               <CheckCircle2 className="text-blue-600 shrink-0" />
               <p className="text-sm font-bold text-slate-800">Licensed Kenyan Healthcare Professionals</p>
            </div>
            <div className="flex gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
               <CheckCircle2 className="text-emerald-600 shrink-0" />
               <p className="text-sm font-bold text-slate-800">24/7 Monitoring & Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 lg:mx-8 mb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Our Core Specializations</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Everything you need for a safe recovery and long-term health management.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div key={i} className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white hover:text-slate-900 transition-all duration-300">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <p className="font-bold text-sm leading-tight">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:sticky md:top-24 w-full md:w-1/3">
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Why Families <br /> 
              <span className="text-blue-600">Choose GETMO.</span>
            </h2>
            <p className="text-slate-500 mb-8 font-medium">
              We understand that bringing a healthcare provider into your home is a matter of profound trust.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all group">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="w-full md:w-2/3 grid sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.id} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                <span className="text-blue-600/20 font-black text-5xl block mb-4">{value.id}</span>
                <h3 className="text-xl font-black text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center px-6">
        <div className="max-w-3xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <Star className="absolute top-10 right-10 text-white/10 w-32 h-32 rotate-12" />
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Ready to start your care journey?</h2>
          <p className="text-blue-100 text-lg mb-10 opacity-90 relative z-10">
            Speak with a care coordinator today to design a personalized plan for your loved one.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a href="/contact" className="px-10 py-4 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-50 transition-all shadow-lg">
              Contact Us Now
            </a>
            <a href="tel:+254700000000" className="px-10 py-4 bg-blue-700 text-white font-black rounded-2xl hover:bg-blue-800 transition-all border border-blue-500">
              Call Direct
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}