import React from "react";
import { Clock, ShieldCheck, HeartPulse, UserCheck } from "lucide-react";
import heroImage1 from "../assets/hero3.jpg";

export default function Hero() {
  return (
    <section className="relative bg-white pt-16 pb-24 overflow-hidden">

      {/* DESKTOP BACKGROUND MASKED IMAGE */}
      <div 
        className="hidden md:block absolute inset-0 right-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroImage1})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          maskImage: "linear-gradient(to left, black 30%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 100%)",
        }}
      />

      {/* MOBILE FULL BACKGROUND WITH LIGHT OVERLAY */}
      <div 
        className="md:hidden absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroImage1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE TEXT */}
        <div className="z-10">

          {/* Tag */}
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
            Accredited Homecare Provider
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Clinical Excellence <br />
            <span className="text-blue-600 italic font-medium">At Your Doorstep.</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-700 max-w-md mb-10">
            Compassionate and professional home-based medical care — 
            available 24/7 to support recovery, chronic management, 
            and post-hospital transitions.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 mb-12">
            <a
              href={`https://wa.me/254723015506?text=Hello, I would like to book a medical homecare consultation.`}
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all text-center"
            >
              Book a Consultation
            </a>

            {/* 24/7 Support Bubble */}
            <div className="flex items-center gap-3 px-4 py-3 border border-slate-200 bg-white/90 rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <Clock size={20} />
              </div>
              <div className="text-sm leading-tight">
                <p className="font-bold">Available 24/7</p>
                <p className="text-slate-500 text-xs">Always here for you</p>
              </div>
            </div>
          </div>

          {/* TRUST ICONS */}
          <div className="grid grid-cols-3 gap-4 max-w-sm">
            <TrustCard icon={<ShieldCheck size={26} className="text-blue-600 mx-auto" />} label="Certified" />
            <TrustCard icon={<HeartPulse size={26} className="text-red-500 mx-auto" />} label="Compassion" />
            <TrustCard icon={<UserCheck size={26} className="text-green-600 mx-auto" />} label="Expert Care" />
          </div>

        </div>

      </div>
    </section>
  );
}

function TrustCard({ icon, label }) {
  return (
    <div className="p-4 rounded-xl bg-white/90 border border-slate-200 hover:shadow transition text-center">
      {icon}
      <p className="text-xs font-bold text-slate-600 mt-2">{label}</p>
    </div>
  );
}
