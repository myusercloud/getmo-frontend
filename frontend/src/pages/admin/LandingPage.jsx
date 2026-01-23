import React from 'react';

const LandingPage = () => {
  const services = [
    { title: "24hr Nursing Care", desc: "Critical, general, and pediatric care at home.", icon: "🩺" },
    { title: "Rehabilitation", desc: "Physiotherapy, speech, and occupational therapy.", icon: "💪" },
    { title: "Aging Support", desc: "Helping seniors remain independent at home.", icon: "👵" },
    { title: "Chronic Management", desc: "Care for Diabetes, Hypertension, and Alzheimer's.", icon: "📋" },
    { title: "Wound Care", desc: "Trained nurses for diverse wound management.", icon: "🩹" },
    { title: "Lab Services", desc: "Blood samples collected at your doorstep.", icon: "🧪" },
    { title: "Equipment Lease", desc: "Oxygen concentrators, hospital beds, and more.", icon: "🦽" },
    { title: "Ambulance Services", desc: "Well-equipped emergency support and evacuation.", icon: "🚑" },
  ];

  return (
    <div className="text-gray-800">
      {/* HERO SECTION */}
      <section className="hero min-h-[70vh] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800" className="max-w-sm rounded-lg shadow-2xl hidden md:block" alt="Homecare" />
          <div>
            <h1 className="text-5xl font-bold leading-tight">Professional Healthcare <br /> <span className="text-blue-300">In Your Home</span></h1>
            <p className="py-6 text-lg max-w-xl">
              GETMO Homecare Services is a committed healthcare partner providing 
              extended medical treatment that requires expertise at home.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary btn-lg">Book Care Now</button>
              <button className="btn btn-outline btn-secondary text-white border-white">Explore Services</button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Getmo?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-white shadow-xl p-8 text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="font-bold text-xl mb-2">Promote Independence</h3>
              <p className="text-sm text-gray-600">With prolonged treatment, stay close to family while receiving expert care.</p>
            </div>
            <div className="card bg-white shadow-xl p-8 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-xl mb-2">Reduce Costs</h3>
              <p className="text-sm text-gray-600">Avoid expensive hospital readmissions with our specialized recovery plans.</p>
            </div>
            <div className="card bg-white shadow-xl p-8 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-bold text-xl mb-2">Expert Staff</h3>
              <p className="text-sm text-gray-600">Licensed and vetted professionals committed to compassionate care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 container mx-auto px-6" id="services">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Expertise</span>
          <h2 className="text-4xl font-bold mt-2">Services We Offer At Home</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group p-6 border rounded-2xl hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPMENT CALLOUT */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Need Medical Equipment?</h2>
            <p className="max-w-md">We offer rental and sales for wheelchairs, oxygen concentrators, hospital beds, and ventilators.</p>
          </div>
          <button className="btn btn-secondary px-10">View Equipment Catalog</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;