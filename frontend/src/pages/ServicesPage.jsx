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

/* -------------------------------
   SERVICE ITEM COMPONENT
-------------------------------- */
function ServiceItem({ icon, title, items, colorClass, message }) {
  const phoneNumber = "254723015506";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full cursor-pointer"
    >
      <div className="flex items-start gap-5 mb-6">
        <div
          className={`p-4 rounded-2xl ${colorClass} transition-all duration-300 group-hover:scale-110 shadow-sm`}
        >
          {React.cloneElement(icon, { size: 28 })}
        </div>

        <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </div>

      <ul className="space-y-3 flex-grow mb-8">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-slate-500 text-sm font-medium"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></div>
            {item}
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-slate-50 flex items-center justify-between text-blue-600 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
        Inquire Now <ChevronRight size={16} />
      </div>
    </a>
  );
}

/* -------------------------------
   FULL SERVICES PAGE
-------------------------------- */
export default function ServicesPage() {

  const serviceGroups = [
    {
      icon: <Stethoscope />,
      title: "24/7 Professional Nursing",
      color: "bg-blue-50 text-blue-600",
      message: "Hello, I would like to enquire about your 24/7 Professional Nursing services.",
      items: [
        "Critical nursing care",
        "General nursing care",
        "Pediatric & neonatal intensive care"
      ]
    },
    {
      icon: <ClipboardList />,
      title: "Equipment Sale & Lease",
      color: "bg-emerald-50 text-emerald-600",
      message: "Hello, I would like more information about your Equipment Sale & Lease services.",
      items: [
        "Portable oxygen concentrators",
        "Electric oxygen concentrators",
        "Wheelchairs",
        "Ventilator machines"
      ]
    },
    {
      icon: <Heart />,
      title: "Professional Wound Care",
      color: "bg-rose-50 text-rose-600",
      message: "Hello, I would like to enquire about your Professional Wound Care services.",
      items: [
        "Acute & chronic wound care",
        "Dressing & follow-up care",
        "Professional wound assessment"
      ]
    },
    {
      icon: <Award />,
      title: "Rehabilitation Services",
      color: "bg-indigo-50 text-indigo-600",
      message: "Hello, I am interested in your Rehabilitation Services.",
      items: [
        "Physiotherapy",
        "Speech & language therapy",
        "Occupational therapy"
      ]
    },
    {
      icon: <Activity />,
      title: "Chronic Disease Management",
      color: "bg-amber-50 text-amber-600",
      message: "Hello, I would like assistance with Chronic Disease Management services.",
      items: [
        "Diabetes & hypertension care",
        "Dementia & Alzheimer's support",
        "Parkinsonism care"
      ]
    },
    {
      icon: <Microscope />,
      title: "Home Laboratory",
      color: "bg-purple-50 text-purple-600",
      message: "Hello, I would like to book a Home Laboratory service.",
      items: [
        "Home blood sample collection",
        "Partnership with certified labs",
        "Digital result delivery"
      ]
    },
    {
      icon: <Users />,
      title: "Aging & Elderly Support",
      color: "bg-teal-50 text-teal-600",
      message: "Hello, I would like to enquire about Aging & Elderly Support services.",
      items: [
        "Personal care assistance",
        "Daily living support",
        "Home management"
      ]
    },
    {
      icon: <Truck />,
      title: "Evacuation & Escort",
      color: "bg-slate-50 text-slate-600",
      message: "Hello, I would like details about Evacuation & Escort services.",
      items: [
        "Local medical escort",
        "International medical escort",
        "Patient accompaniment"
      ]
    },
    {
      icon: <Ambulance />,
      title: "Ambulance Services",
      color: "bg-red-50 text-red-600",
      message: "Hello, I urgently need Ambulance Services assistance.",
      items: [
        "Fully equipped ambulances",
        "Emergency evacuations",
        "Home-to-hospital transfers"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HEADER */}
      <section className="bg-white pt-28 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="text-blue-600 w-5 h-5" />
                <span className="text-blue-700 font-black text-xs uppercase tracking-[0.2em]">
                  Accredited Provider
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Our Homecare <br />
                <span className="text-blue-600">Clinical Services</span>
              </h1>
            </div>

            <p className="text-slate-500 font-medium text-lg max-w-sm">
              Comprehensive medical and non-medical support tailored for Kenyan homes.
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
                message={group.message}
              />
            ))}
          </div>
        </div>
      </section>

      {/* REST OF PAGE REMAINS UNCHANGED */}

    </div>
  );
}
