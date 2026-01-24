import React from "react";
import StatBox from "./StatBox";

export default function StatsStrip() {
  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <StatBox number="10+" label="Years Experience" />
        <StatBox number="24/7" label="Professional Care" />
        <StatBox number="500+" label="Patients Served" />
        <StatBox number="100%" label="Certified Staff" />
      </div>
    </section>
  );
}
