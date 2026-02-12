import React from "react";
import { 
  Stethoscope, 
  Activity, 
  Truck, 
  Heart, 
  Users, 
  ClipboardList, 
  Ambulance,
  ArrowRight,
  ShieldCheck,
  Microscope,
  PhoneCall,
  CalendarCheck,
  CheckCircle2,
  Award,
  MessageCircle
} from "lucide-react";

export default function Services() {

  const phoneNumber = "254723015506";

  const serviceGroups = [
    {
      icon: <Stethoscope />,
      title: "24/7 Professional Nursing",
      tagline: "High-acuity clinical care delivered by registered nursing specialists.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      message: "Hello, I would like to enquire about your 24/7 Professional Nursing services.",
      items: [
        "Critical & General nursing care",
        "Pediatric / Neonatal ICU",
        "Medication management",
        "Post-operative recovery"
      ]
    },
    {
      icon: <ClipboardList />,
      title: "Medical Equipment Sale and Lease",
      tagline: "Leasing and sales of hospital-grade technology for home use.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      message: "Hello, I would like more information about your Medical Equipment Sale and Lease services.",
      items: [
        "Oxygen Concentrators & Cylinders",
        "Patient Monitors",
        "Hospital Beds & Monitors",
        "Ventilators & Suction Machines",
        "Wheelchairs & Mobility Aids"
      ]
    },
    {
      icon: <Heart />,
      title: "Clinical Wound Care",
      tagline: "Specialized tissue management and infection prevention protocols.",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      message: "Hello, I would like to enquire about your Clinical Wound Care services.",
      items: [
        "Acute & Chronic management",
        "Specialized dressing & follow-up",
        "Professional wound assessment"
      ]
    },
    {
      icon: <Award />,
      title: "Specialized Rehabilitation",
      tagline: "Restorative therapies to regain mobility and cognitive function.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      message: "Hello, I would like to enquire about your Specialized Rehabilitation programs.",
      items: [
        "Physiotherapy sessions",
        "Speech & Language therapy",
        "Occupational rehabilitation"
      ]
    },
    {
      icon: <Activity />,
      title: "Chronic Condition Care",
      tagline: "Long-term management for lifestyle and neurological conditions.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      message: "Hello, I would like to enquire about your Chronic Condition Care services.",
      items: [
        "Diabetes & Hypertension care",
        "Dementia & Alzheimer’s support",
        "Parkinsonism specialty care"
      ]
    },
    {
      icon: <Microscope />,
      title: "Laboratory @ Home",
      tagline: "Diagnostic precision with certified sample collection at your door.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      message: "Hello, I would like to schedule a Laboratory @ Home service.",
      items: [
        "Home blood sample collection",
        "Certified partner lab processing",
        "Digital result delivery"
      ]
    },
    {
      icon: <Users />,
      title: "Elderly & Geriatric Support",
      tagline: "Compassionate assistance for senior citizens' daily living needs.",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      message: "Hello, I would like to enquire about Elderly & Geriatric Support services.",
      items: [
        "Personal care & Daily living",
        "Home management support",
        "Certified Nurse Aid assistance"
      ]
    },
    {
      icon: <Truck />,
      title: "Medical Escort Services",
      tagline: "Professional clinical accompaniment for local or global travel.",
      color: "text-slate-700",
      bgColor: "bg-slate-100",
      message: "Hello, I would like details about your Medical Escort Services.",
      items: [
        "Local clinical escort",
        "International medical repatriation",
        "Specialized treatment accompaniment"
      ]
    },
    {
      icon: <Ambulance />,
      title: "Emergency Evacuation",
      tagline: "Rapid-response critical care transport and hospital transfers.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      message: "Hello, I urgently need assistance with Emergency Evacuation services.",
      items: [
        "Fully equipped ICU Ambulances",
        "Rapid emergency evacuation",
        "Facility-to-facility transfers"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">

      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="divide-y divide-slate-100">
            {serviceGroups.map((group, idx) => {

              const encodedMessage = encodeURIComponent(group.message);
              const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

              return (
                <div key={idx} className="py-12 first:pt-0 last:pb-0 group">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">

                    {/* Category Info */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-5 mb-5">
                        <div className={`p-4 rounded-2xl ${group.bgColor} ${group.color}`}>
                          {React.cloneElement(group.icon, { size: 28 })}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                          {group.title}
                        </h3>
                      </div>
                      <p className="text-slate-500 text-lg">
                        {group.tagline}
                      </p>
                    </div>

                    {/* Services List */}
                    <div className="lg:col-span-4 flex flex-col justify-center">
                      <div className="grid gap-y-3">
                        {group.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 text-slate-700 font-semibold">
                            <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-1" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* WhatsApp Button */}
                    <div className="lg:col-span-3 flex items-center lg:justify-end">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-3 bg-slate-900 hover:bg-green-600 text-white transition-all duration-300 px-6 py-4 rounded-2xl font-bold w-full lg:w-auto justify-center shadow-lg"
                      >
                        <span className="transition-all duration-300">
                          Enquire Now
                        </span>

                        {/* Arrow always visible */}
                        <ArrowRight
                          size={18}
                          className="transition-all duration-300 group-hover/btn:translate-x-1"
                        />

                        {/* WhatsApp icon only on hover */}
                        <MessageCircle
                          size={18}
                          className="opacity-0 scale-75 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:scale-100"
                        />
                      </a>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
