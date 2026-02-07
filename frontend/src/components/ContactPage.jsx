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

    const subject = encodeURIComponent("New Homecare Inquiry");
    const body = encodeURIComponent(
      `Hello Getmo Homecare Team,\n\n` +
        `You have received a new inquiry:\n\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Email: ${form.email}\n\n` +
        `Message:\n${form.message}\n\n` +
        `Sent from the website contact form.`
    );

    window.location.href = `mailto:info@getmohomecareservices.co.ke?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* MAIN CONTACT CONTENT */}
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-slate-500 max-w-md">
                  Talk to our support team for inquiries, care requests, or
                  emergency assistance.
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
                  <p className="text-slate-600">
                    info@getmohomecareservices.co.ke
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Location</h3>
                  <p className="text-slate-600">Vision Plaza, Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — CONTACT FORM */}
            <div>
              <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Send us a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Full Name
                    </label>
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

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Phone Number
                    </label>
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

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Email Address
                    </label>
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

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Message
                    </label>
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

                  {/* SUBMIT */}
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


                <div className="text-center mb-16">
            <h1 className="text-4xl font-black text-slate-900">OUR LOCATION</h1>
          </div>

      {/* FULL WIDTH MAP */}
      <div className="w-full mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.748456820202!2d36.85011947589646!3d-1.3268901356737708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11ec971bb6b7%3A0xa56f30236f8c34f!2sVision%20Plaza%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1770316249106!5m2!1sen!2ske"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 rounded-none"
        ></iframe>
      </div>
    </>
  );
}
