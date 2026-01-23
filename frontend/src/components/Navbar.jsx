import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Phone } from "lucide-react";
import logo from "../assets/getmo_extracted_logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#services" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md py-2 shadow-sm border-slate-200" 
          : "bg-white py-4 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center gap-4 group">
          {/* Enlarge height to h-14 or h-16 for high visibility */}
          <img 
            src={logo} 
            alt="Getmo HomeCare Logo" 
            className="h-16 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
          
          {/* Brand Name on One Line */}
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl md:text-3xl font-black text-blue-700 tracking-tighter">
              GETMO
            </span>
            <span className="text-lg md:text-xl font-light text-slate-700 tracking-tight">
              HOMECARE
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="h-6 w-px bg-slate-200 mx-2"></div>

          <Link 
            to="/login"
            className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-700 transition-colors"
          >
            <User size={18} />
            Admin
          </Link>

          <a
            href="tel:0723015506"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-100"
          >
            <Phone size={18} /> 0723 015 506
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="lg:hidden text-slate-800 p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-8 flex flex-col space-y-6 lg:hidden shadow-2xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-slate-700"
            >
              {link.name}
            </a>
          ))}
          <hr className="border-slate-100" />
          <Link 
            to="/login" 
            className="flex items-center gap-3 text-xl font-semibold text-slate-700"
            onClick={() => setIsOpen(false)}
          >
            <User size={24} /> Admin Login
          </Link>
          <a
            href="tel:0723015506"
            className="flex items-center justify-center gap-3 bg-blue-600 text-white py-5 rounded-2xl text-lg font-bold shadow-xl shadow-blue-100"
          >
            <Phone size={24} /> Call 0723 015 506
          </a>
        </div>
      )}
    </nav>
  );
}