import { useState } from "react";
import API from "../../api/api";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

export default function EquipmentCreate() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        name === "price"
          ? parseFloat(value)
          : name === "stock"
          ? parseInt(value)
          : value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/equipment", form); // token auto-attached by interceptor
      navigate("/admin/equipment");
    } catch (err) {
      console.error("Create error:", err.response?.data || err);
      alert("Failed to save equipment");
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Add Equipment</h1>

      <form onSubmit={submit} className="space-y-4 max-w-lg">

        {["name", "description", "price", "stock", "image_url"].map((field) => (
          <input
            key={field}
            name={field}
            type={field === "price" || field === "stock" ? "number" : "text"}
            className="w-full border p-3 rounded-lg"
            placeholder={field}
            value={form[field]}
            onChange={handleChange}
          />
        ))}

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Save
        </button>
      </form>
    </AdminLayout>
  );
}
