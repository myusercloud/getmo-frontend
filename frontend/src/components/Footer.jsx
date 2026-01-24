import React from "react";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        <div className="col-span-2">
          <h2 className="text-white text-2xl font-black mb-6 tracking-tight">
            GETMO <span className="font-light opacity-50">HOMECARE</span>
          </h2>
          <p className="max-w-sm leading-relaxed mb-8 text-slate-500">
            Professionalizing home-based healthcare through rigorous clinical standards and compassionate service delivery across Kenya.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon="f" />
            <SocialIcon icon="in" />
            <SocialIcon icon="x" />
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Services</h3>
          <ul className="space-y-4 text-sm">
            <li>Nursing Care</li>
            <li>Equipment Hire</li>
            <li>Physiotherapy</li>
            <li>Lab Services</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Get in Touch</h3>
          <p className="text-sm leading-relaxed">Nairobi, Kenya</p>
          <p className="text-blue-400 font-bold mt-2">0723 015 506</p>
          <p className="text-sm mt-4">info@getmohomecareservices.co.ke</p>
        </div>

      </div>
    </footer>
  );
}
