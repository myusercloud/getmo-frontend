import React from "react";
import { Phone, Clock } from "lucide-react";

import heroImage1 from "../assets/hero3.jpg";

export default function Hero() {
  return (
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
  );
}
