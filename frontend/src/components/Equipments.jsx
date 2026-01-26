import React, { useEffect, useState } from "react";
import EquipmentCard from "./EquipmentCard";
import EquipmentModal from "./EquipmentsModal"; // NEW IMPORT
import { Search } from "lucide-react";

export default function Equipments() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("sale");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [selectedItem, setSelectedItem] = useState(null); // NEW

  useEffect(() => {
    fetch("http://localhost:5000/api/equipment")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load equipment.");
        setLoading(false);
      });
  }, []);

  // SEARCH FILTER
  useEffect(() => {
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [search, items]);

  return (
    <section className="py-24 bg-white" id="equipment">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">

          <div>
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest">
              Homecare Equipment
            </span>
            <h2 className="text-4xl font-black text-slate-900 mt-2 mb-3">
              Medical Equipment
            </h2>
            <p className="text-slate-500 max-w-md">
              Certified clinical equipment available for purchase or lease, with optional home installation and support.
            </p>
          </div>

          {/* SEARCH BAR */}
          <div className="flex items-center w-full md:w-auto bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 shadow-sm">
            <Search size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search equipment..."
              className="bg-transparent ml-2 w-full outline-none text-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-4 mb-10">
          <button
            onClick={() => setActiveTab("sale")}
            className={`px-5 py-2 rounded-lg text-sm font-bold transition ${
              activeTab === "sale"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            For Sale
          </button>

          <button
            onClick={() => setActiveTab("lease")}
            className={`px-5 py-2 rounded-lg text-sm font-bold transition ${
              activeTab === "lease"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            For Lease
          </button>
        </div>

        {/* ERROR STATE */}
        {error && (
          <div className="text-center text-red-500 py-6 font-medium">{error}</div>
        )}

        {/* LOADING SKELETON */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="animate-pulse bg-slate-100 rounded-2xl h-80"
              ></div>
            ))}
          </div>
        )}

        {/* LIST GRID */}
        {!loading && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeIn">
            {filtered.map((item) => (
              <EquipmentCard
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)} // OPEN MODAL
              />
            ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-20 opacity-75">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076505.png"
              alt="Empty"
              className="w-32 mx-auto mb-6 opacity-70"
            />
            <p className="text-slate-500 text-lg font-medium">
              No equipment matches your search.
            </p>
          </div>
        )}

      </div>

      {/* MODAL */}
      {selectedItem && (
        <EquipmentModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}
