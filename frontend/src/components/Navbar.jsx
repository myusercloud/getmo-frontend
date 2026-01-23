import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for a more dynamic UI
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
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-slate-200" 
          : "bg-white py-5 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-black text-blue-700 tracking-tight">
            GETMO<span className="text-slate-500 font-light">HOMECARE</span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center space-x-8">
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
          
          {/* Divider */}
          <div className="h-6 w-px bg-slate-200 mx-2"></div>

          {/* Admin Link */}
          <Link 
            to="/login"
            className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-700 transition-colors"
          >
            <User size={18} />
            Admin
          </Link>

          {/* Call CTA */}
          <a
            href="tel:0723015506"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md shadow-blue-100"
          >
            <Phone size={16} /> 0723 015 506
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden text-slate-800 p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col space-y-4 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-700 hover:text-blue-700"
            >
              {link.name}
            </a>
          ))}
          <hr className="border-slate-100" />
          <Link 
            to="/login" 
            className="flex items-center gap-2 text-lg font-medium text-slate-700"
            onClick={() => setIsOpen(false)}
          >
            <User size={20} /> Admin Login
          </Link>
          <a
            href="tel:0723015506"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-xl font-bold"
          >
            <Phone size={20} /> Call Now
          </a>
        </div>
      )}
    </nav>
  );
}