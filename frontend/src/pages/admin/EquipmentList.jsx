import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/api";
import AdminLayout from "./AdminLayout";

export default function EquipmentList() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await API.get("/equipment");
    setItems(res.data);
  };

  const deleteItem = async (id) => {
    if (!confirm("Delete item?")) return;
    await API.delete(`/equipment/${id}`);
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Equipment</h1>
        <Link
          to="/admin/equipment/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add New
        </Link>
      </div>

      <table className="w-full bg-white rounded-lg shadow border">
        <thead>
          <tr className="bg-slate-100 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Stock</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-3">{item.name}</td>
              <td className="p-3">KSH {item.price}</td>
              <td className="p-3">{item.stock}</td>
              <td className="p-3 flex gap-2">
                <Link
                  to={`/admin/equipment/${item.id}`}
                  className="text-blue-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
