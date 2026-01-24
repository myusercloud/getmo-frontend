import React, { useEffect, useState } from "react";
import EquipmentCard from "./EquipmentCard";

export default function Equipments() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://getmo-homehealth.onrender.com/equipment") // UPDATE to your backend URL
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-24 bg-slate-50" id="equipment">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Medical Equipment
            </h2>
            <p className="text-slate-500 max-w-md">
              Certified medical grade equipment available for immediate sale or monthly lease with home installation.
            </p>
          </div>

          <div className="flex gap-2">
            <span className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-200">Sale</span>
            <span className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-bold">Lease</span>
          </div>
        </div>

        {/* LOADING STATE */}
        {loading && (
          <div className="text-center text-slate-500 py-10">Loading equipment...</div>
        )}

        {/* LIST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {!loading && items.length > 0 && items.map((item) => (
            <EquipmentCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              stock={item.stock}
              image_url={item.image_url}
            />
          ))}
        </div>

        {/* EMPTY STATE */}
        {!loading && items.length === 0 && (
          <div className="text-center text-slate-400 py-10">No equipment found.</div>
        )}

      </div>
    </section>
  );
}
