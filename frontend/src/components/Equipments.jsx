import React, { useEffect, useState } from "react";
import API, { wakeServer } from "../api/api";   // ⬅ USE API HERE
import EquipmentCard from "./EquipmentCard";
import EquipmentModal from "./EquipmentsModal";
import { Search } from "lucide-react";

export default function Equipments() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("sale");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);

      // 🔥 Wake backend first
      await wakeServer();

      try {
        const { data } = await API.get("/equipment");
        setItems(data);
        setFiltered(data);
      } catch (err) {
        setError("please wait for a moment.");
      }

      // Stop loading after fetch attempt
      setLoading(false);
    }

    loadData();
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

        {/* ERROR */}
        {error && (
          <div className="text-center text-red-500 py-6 font-medium">
            {error}
          </div>
        )}

        {/* LOADING */}
        {loading && (
          <div className="text-center text-slate-500 font-medium py-10">
            Warming up server…  
          </div>
        )}

        {/* LIST GRID */}
        {!loading && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeIn">
            {filtered.map((item) => (
              <EquipmentCard
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        )}

        {/* EMPTY */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-20 opacity-75">
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
