export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT COLUMN — TEXT */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-blue-600"></span>
            <span className="text-blue-700 font-bold text-sm uppercase tracking-[0.2em]">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Delivering Medical Excellence  
            <span className="text-blue-600 italic font-medium"> At Home.</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            GETMO Homecare is a clinically accredited home-based healthcare service 
            provider offering professional nursing, chronic care management, 
            rehabilitation services, and medical equipment support across Kenya.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Our mission is to bring hospital-grade care closer to families—ensuring 
            safety, comfort, and faster recovery through personalized medical 
            attention delivered by certified experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition-all"
            >
              Get in Touch
            </a>
            <a 
              href="#services"
              className="px-8 py-4 border border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-all"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN — IMAGE + BADGE */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)]">
            <img 
              src="https://images.unsplash.com/photo-1584467735871-f96a3b6d1b81?auto=format&fit=crop&w=900&q=80"
              alt="Homecare nurse"
              className="object-cover w-full h-[400px]"
            />
          </div>

          {/* Badge */}
          <div className="absolute -bottom-6 left-6 bg-white shadow-xl border border-slate-100 p-4 rounded-xl flex items-center gap-4">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl">
              10+
            </div>
            <p className="font-bold text-slate-700 leading-tight">
              Years of  
              <br />
              Trusted Care
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
