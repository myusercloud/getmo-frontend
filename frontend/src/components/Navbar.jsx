import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// Optional: Install lucide-react for icons
import { Menu, X, User, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About", path: "/#about" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-3 transition-transform">
            <div className="w-6 h-6 border-2 border-white rounded-sm flex items-center justify-center text-white font-bold text-xs">G</div>
          </div>
          <h1 className="text-xl font-black tracking-tight text-slate-800">
            GETMO<span className="text-blue-600 font-light">HOMECARE</span>
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-blue-100 flex items-center gap-2"
          >
            <Phone size={16} />
            Call
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col space-y-4 md:hidden animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-700"
            >
              {link.name}
            </a>
          ))}
          <Link 
            to="/login" 
            className="text-lg font-medium text-blue-600 flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            Admin Login
          </Link>
        </div>
      )}
    </nav>
  );
}