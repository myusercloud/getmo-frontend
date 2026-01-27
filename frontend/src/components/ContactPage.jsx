import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Integrate backend API here)");
  };

  return (
    <section className="pt-28 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* PAGE HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-slate-900">Contact Us</h1>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            We are here to assist you with personalized homecare support.  
            Reach out to our team anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE — CONTACT DETAILS */}
          <div className="space-y-10">
            
            <div>
              <h2 classsame="text-2xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-slate-500 max-w-md">
                Talk to our support team for inquiries, care requests, or emergency assistance.
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Phone</h3>
                <p className="text-slate-600">0723 015 506</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Email</h3>
                <p className="text-slate-600">info@getmohomecareservices.co.ke</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Location</h3>
                <p className="text-slate-600">
                  Mombasa Road Vision Plaza, 2nd Floor Suite 25  
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — CONTACT FORM */}
          <div>
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 border border-slate-300 rounded-xl bg-white outline-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 border border-slate-300 rounded-xl bg-white outline-blue-500"
                    placeholder="0700 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 border border-slate-300 rounded-xl bg-white outline-blue-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full mt-2 px-4 py-3 border border-slate-300 rounded-xl bg-white outline-blue-500"
                    placeholder="How can we assist you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
