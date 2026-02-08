import React from "react";
import { 
  Stethoscope, 
  Activity, 
  Truck, 
  Award, 
  Heart, 
  Users, 
  ClipboardList, 
  Ambulance,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Microscope,
  PackageCheck
} from "lucide-react";

/**
 * ServiceItem Component
 * Refined with a clearer visual hierarchy and improved hover interactions.
 */
function ServiceItem({ icon, title, items, colorClass }) {
  return (
    <div className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full">
      <div className="flex items-start gap-5 mb-6">
        <div className={`p-4 rounded-2xl ${colorClass} transition-all duration-300 group-hover:scale-110 shadow-sm`}>
          {React.cloneElement(icon, { size: 28 })}
        </div>
        <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </div>

      <ul className="space-y-3 flex-grow mb-8">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-500 text-sm font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></div>
            {item}
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-slate-50 flex items-center justify-between text-blue-600 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
        Inquire Now
        <ChevronRight size={16} />
      </div>
    </div>
  );
}

/**
 * Main Services Page Component
 * Organized into a 3-column grid with a dedicated CTA section.
 */
export default function Services() {
  const serviceGroups = [
    {
      icon: <Stethoscope />,
      title: "24/7 Professional Nursing",
      color: "bg-blue-50 text-blue-600",
      items: ["Critical nursing care", "General nursing care", "Pediatric / Neonatal intensive care",  "Medication management", "Post-operative care"]
    },
    {
      icon: <ClipboardList />,
      title: "Equipment Sale & Lease",
      color: "bg-emerald-50 text-emerald-600",
      items: ["Portable oxygen concentrators", "Hospital beds", "Suction machine", "Oxygen cylinders", "Patient monitors", "Electric oxygen concentrators", "Wheelchairs", "Ventilator machines"]
    },
    {
      icon: <Heart />,
      title: "Professional Wound Care",
      color: "bg-rose-50 text-rose-600",
      items: ["Acute & chronic wound management", "Dressing and follow-up care", "Professional wound assessment"]
    },
    {
      icon: <Award />,
      title: "Rehabilitation Services",
      color: "bg-indigo-50 text-indigo-600",
      items: ["Physiotherapy", "Speech & language therapy", "Occupational therapy"]
    },
    {
      icon: <Activity />,
      title: "Chronic Management",
      color: "bg-amber-50 text-amber-600",
      items: ["Diabetes & Hypertension care", "Dementia & Alzheimer’s support", "Parkinsonism support"]
    },
    {
      icon: <Microscope />,
      title: "Home Laboratory",
      color: "bg-purple-50 text-purple-600",
      items: ["Home blood sample collection", "Partnered certified labs", "Digital results sharing"]
    },
    {
      icon: <Users />,
      title: "Aging & Elderly Support",
      color: "bg-teal-50 text-teal-600",
      items: ["Personal care assistance", "Daily living support", "Home management support", "Caregiver/Nurse aid support"]
    },
    {
      icon: <Truck />,
      title: "Evacuation & Escort",
      color: "bg-slate-50 text-slate-600",
      items: ["Local medical escort", "International medical escort", "Treatment accompaniment"]
    },
    {
      icon: <Ambulance />,
      title: "Ambulance Services",
      color: "bg-red-50 text-red-600",
      items: ["Fully equipped ambulance support", "Emergency patient evacuation", "Home-to-hospital transfers"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HEADER */}
      <section className="bg-white pt-24 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="text-blue-600 w-5 h-5" />
                <span className="text-blue-700 font-black text-xs uppercase tracking-[0.2em]">Accredited Provider</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Our Homecare <br />
                <span className="text-blue-600">Clinical Services</span>
              </h1>
            </div>
            <p className="text-slate-500 font-medium text-lg max-w-sm pb-2">
              Comprehensive medical and non-medical support tailored for the Kenyan home environment.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceGroups.map((group, idx) => (
              <ServiceItem 
                key={idx}
                icon={group.icon}
                title={group.title}
                items={group.items}
                colorClass={group.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / EMERGENCY BANNER */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Can't find a specific service?</h2>
            <p className="text-slate-400 text-lg">
              We offer bespoke care packages for unique medical needs. 
              Contact our clinical coordinators to discuss a custom care plan.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full lg:w-auto">
            <a href="/contact" className="px-8 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-900/20">
              Request Custom Plan
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+254723015506" className="px-8 py-5 bg-white/10 backdrop-blur-md text-white font-black rounded-2xl hover:bg-white/20 transition-all border border-white/10 text-center">
              Call Support
            </a>
          </div>

          {/* Decorative SVG background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="pb-24 border-t border-slate-100 mt-12 bg-white pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="flex flex-col items-center gap-3">
               <PackageCheck className="w-10 h-10 text-slate-400" />
               <span className="text-[10px] font-black uppercase tracking-widest">Lease Certified</span>
             </div>
             <div className="flex flex-col items-center gap-3">
               <Award className="w-10 h-10 text-slate-400" />
               <span className="text-[10px] font-black uppercase tracking-widest">Licensed Nurses</span>
             </div>
             <div className="flex flex-col items-center gap-3">
               <Activity className="w-10 h-10 text-slate-400" />
               <span className="text-[10px] font-black uppercase tracking-widest">WHO Standards</span>
             </div>
             <div className="flex flex-col items-center gap-3">
               <Users className="w-10 h-10 text-slate-400" />
               <span className="text-[10px] font-black uppercase tracking-widest">Family Oriented</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}