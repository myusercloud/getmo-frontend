import React, { useEffect, useState } from "react";
import { Plus, Trash, Edit } from "lucide-react";

export default function EquipmentManager() {
  const [items, setItems] = useState([]);

  const fetchItems = () => {
    fetch("https://getmo-backend.onrender.com/equipment")
      .then(res => res.json())
      .then(setItems);
  };

  useEffect(fetchItems, []);

  return (
    <div className="p-10">
      <div className="flex justify-between mb-10">
        <h1 className="text-3xl font-bold">Equipment Manager</h1>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
          <Plus size={20} /> Add Equipment
        </button>
      </div>

      <table className="w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-slate-100 text-left">
          <tr>
            <th className="p-4">Image</th>
            <th className="p-4">Name</th>
            <th className="p-4">Price</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-4">
                <img src={item.image_url} className="w-16 h-16 rounded-lg object-cover" />
              </td>
              <td className="p-4">{item.name}</td>
              <td className="p-4">KSH {item.price}</td>
              <td className="p-4">{item.stock}</td>

              <td className="p-4 flex gap-3">
                <button className="text-blue-600"><Edit /></button>
                <button className="text-red-600"><Trash /></button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
