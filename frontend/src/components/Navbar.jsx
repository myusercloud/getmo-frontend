import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import logo from "../assets/getmo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Equipment", path: "#equipment" },
    { name: "Services", path: "/services", anchor: true },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (link) => {
    if (link.anchor) return false;
    return location.pathname === link.path;
  };

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg py-3 shadow-lg border-b border-slate-200/50"
          : "bg-white py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO + COMPANY NAME */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Getmo Homecare Logo"
            className="h-12 w-auto object-contain"
          />

          <div className="leading-relaxed">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
              GETMO <span className="text-black font-normal tracking-wide">HOMECARE</span>
            </h1>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`relative text-sm font-bold transition-colors group
                  ${
                    isActive(link)
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }
                `}
              >
                {link.name}

                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 
                    ${isActive(link) ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </a>
            ))}
          </div>

          {/* Phone Button */}
          <a
            href="tel:0723015506"
            className="group relative flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-full text-sm font-black transition-all hover:bg-blue-700 hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] active:scale-95"
          >
            <Phone size={18} className="group-hover:animate-bounce" />
            0723 015 506

            <div className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </div>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="lg:hidden p-2 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 transition-all active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-8 flex flex-col space-y-6 lg:hidden shadow-2xl animate-in fade-in slide-in-from-top-5">
          
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`flex justify-between items-center text-xl font-bold border-b border-slate-50 pb-2
                ${
                  isActive(link)
                    ? "text-blue-600"
                    : "text-slate-800"
                }
              `}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {link.name}
              <ArrowRight size={20} className="text-blue-600" />
            </a>
          ))}

          <a
            href="tel:0723015506"
            className="flex items-center justify-center gap-3 bg-blue-600 text-white py-5 rounded-2xl text-lg font-black shadow-xl shadow-blue-200"
          >
            <Phone size={24} /> Call Emergency
          </a>
        </div>
      )}
    </nav>
  );
}
