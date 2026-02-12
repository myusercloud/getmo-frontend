import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import logo from "../assets/getmo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Custom Brand Colors
  const brandPurple = "#522A7A";
  const brandTeal = "#50CED3";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Medical Equipment", path: "/equipment" },
    { name: "Clinical Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md py-2 shadow-sm border-b border-slate-200/50"
          : "bg-white py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <img
              src={logo}
              alt="Getmo Logo"
              className="h-14 w-auto object-contain mix-blend-multiply" 
              /* mix-blend-multiply removes the white background on light surfaces */
            />
          </div>
          <div className="flex flex-col">
            <span 
              className="text-2xl font-black tracking-tighter leading-none"
              style={{ color: brandPurple }}
            >
              GETMO
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
              Homecare Services
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-full border border-slate-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-white shadow-sm text-[#522A7A]"
                    : "text-slate-500 hover:text-[#50CED3]"
                }`}
                style={isActive(link.path) ? { color: brandPurple } : {}}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Button: Teal to Purple Gradient */}
          <a
            href="tel:0723015506"
            className="relative flex items-center gap-3 px-6 py-3 rounded-2xl text-white font-black text-sm transition-all hover:scale-105 active:scale-95 overflow-hidden group shadow-lg shadow-teal-500/20"
            style={{ 
              background: `linear-gradient(135deg, ${brandTeal} 0%, ${brandPurple} 100%)` 
            }}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Phone size={18} className="relative z-10 fill-white/20" />
            <span className="relative z-10 whitespace-nowrap">0723 015 506</span>
            
            {/* Status Pulse */}
            <div className="absolute top-2 right-2 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </div>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-3 rounded-2xl bg-slate-50 text-slate-900 border border-slate-100 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col space-y-4 lg:hidden shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex justify-between items-center p-4 rounded-2xl font-bold transition-colors ${
                  isActive(link.path)
                    ? "bg-teal-50 text-[#50CED3]"
                    : "bg-slate-50 text-slate-600"
                }`}
              >
                {link.name}
                <ArrowRight size={18} className={isActive(link.path) ? "text-[#50CED3]" : "text-slate-300"} />
              </Link>
            ))}
          </div>

          <a
            href="tel:0723015506"
            className="flex items-center justify-center gap-4 py-5 rounded-2xl text-white font-black text-lg shadow-xl"
            style={{ backgroundColor: brandPurple }}
          >
            <ShieldCheck size={24} /> 
            Call Emergency Care
          </a>
        </div>
      )}
    </nav>
  );
}