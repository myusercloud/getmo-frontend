import React from "react";
import { Stethoscope, Activity, Truck, Award, Heart } from "lucide-react";
import ServiceItem from "./ServiceItem";

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900">Clinical Services</h2>
          <div className="h-1.5 w-12 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="space-y-10">
            <ServiceItem icon={<Stethoscope />} title="Nursing Care" items={["ICU Support", "Neonatal Care", "Wound Management"]} />
            <ServiceItem icon={<Activity />} title="Chronic Management" items={["Hypertension", "Diabetes Support", "Dementia Care"]} />
          </div>

          <div className="space-y-10">
            <ServiceItem icon={<Truck />} title="Medical Logistics" items={["Ambulance Services", "Patient Evacuation", "Lab Sample Pickups"]} />
            <ServiceItem icon={<Award />} title="Rehabilitation" items={["Physiotherapy", "Speech Therapy", "Occupational Care"]} />
          </div>

          <div className="relative hidden md:block">
            <div className="h-full w-full bg-blue-900 rounded-[2rem] p-10 text-white flex flex-col justify-end">
              <div className="text-blue-400 mb-4"><Heart size={40} fill="currentColor" /></div>
              <h3 className="text-2xl font-bold mb-4">Need Personalized Care?</h3>
              <p className="text-blue-100 mb-8 opacity-80">
                We create custom care plans tailored to the patient's specific medical history.
              </p>
              <button className="w-full py-4 bg-white text-blue-900 rounded-xl font-bold hover:bg-blue-50 transition-all">
                Get a Care Plan
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
