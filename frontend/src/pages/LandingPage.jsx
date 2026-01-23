import React from "react";
// Import icons from a library like lucide-react (highly recommended for healthcare UIs)
import { Phone, CheckCircle, Clock, Heart, Activity, ShieldCheck } from "lucide-react";
import heroImage1 from "../assets/hero1.jpg";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      


      {/* HERO SECTION */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-8 lg:p-16">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              Compassionate Care at Home
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Expert Healthcare <br /> 
              <span className="text-blue-600">In Your Own Home.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              A healthcare partner committed to caring for you or your loved ones 
              with professional expertise and heartfelt compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0723015506" className="bg-blue-600 text-white text-center px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                Book a Consultation
              </a>
              <div className="flex items-center gap-3 px-4 py-2 border border-slate-200 rounded-xl bg-slate-50">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div className="text-sm">
                  <p className="font-bold">24/7 Support</p>
                  <p className="text-slate-500 text-xs">Always here for you</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[400px] md:h-[600px] w-full">
            <img src={heroImage1} className="w-full h-full object-cover" alt="Home care nurse providing assistance" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden md:block" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Trust Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard 
            icon={<Heart className="text-red-500" />}
            title="Shorter Recovery"
            desc="Recover faster and more comfortably surrounded by family and familiar settings."
          />
          <FeatureCard 
            icon={<ShieldCheck className="text-blue-500" />}
            title="Expert Nursing"
            desc="Highly trained professionals specializing in critical, pediatric, and geriatric care."
          />
          <FeatureCard 
            icon={<Activity className="text-green-500" />}
            title="Cost Effective"
            desc="Significantly reduce overall medical costs compared to long-term hospital stays."
          />
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Home Services</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Nursing Care"
              items={["Critical & General Care", "Pediatric / Neonatal", "24-Hour Monitoring"]}
            />
            <ServiceCard 
              title="Rehabilitation"
              items={["Physiotherapy", "Speech Therapy", "Occupational Therapy"]}
            />
            <ServiceCard 
              title="Senior Support"
              items={["Daily Living Assistance", "Home Management", "Companionship"]}
            />
            <ServiceCard 
              title="Medical Equipment"
              items={["Hospital Beds", "Oxygen Concentrators", "Ventilators"]}
            />
            <ServiceCard 
              title="Chronic Management"
              items={["Diabetes & Hypertension", "Alzheimer’s & Dementia", "Parkinsonism"]}
            />
            <ServiceCard 
              title="Laboratory & More"
              items={["Home Sample Collection", "Wound Management", "Ambulance Support"]}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 border-b border-slate-800 pb-12">
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">GETMO HOMECARE</h2>
            <p className="max-w-sm">Dedicated to bridging the gap between hospital treatment and home recovery.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact Information</h3>
            <p className="flex items-center gap-3"><Phone size={18} className="text-blue-400"/> 0723 015 506</p>
            <p className="flex items-center gap-3">📧 info@getmohomecareservices.co.ke</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 text-sm">
          © {new Date().getFullYear()} Getmo HomeCare Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="mb-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 italic">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ServiceCard({ title, items }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200">
      <h3 className="text-xl font-bold text-blue-700 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
            <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}