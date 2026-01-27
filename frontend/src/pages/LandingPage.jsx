import React from "react";
import Hero from "../components/Hero";
import StatsStrip from "../components/StatsStrip";
import Equipments from "../components/Equipments";
import Services from "../components/Services";
import Footer from "../components/Footer";
import About from "../components/About";
import { Contact } from "lucide-react";
import ContactPage from "../components/ContactPage";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Hero />
      <StatsStrip />
      <Equipments />
      <Services />
      <About />
      <ContactPage />
    </div>
  );
}
