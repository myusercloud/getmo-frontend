import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/api";
import AdminLayout from "./AdminLayout";

export default function EquipmentEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);

  useEffect(() => {
    API.get(`/equipment/${id}`).then((res) => setItem(res.data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setItem((prev) => ({
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

    const { name, description, price, stock, image_url } = item;

    try {
      await API.put(`/equipment/${id}`, {
        name,
        description,
        price,
        stock,
        image_url,
      });

      navigate("/admin/equipment");
    } catch (err) {
      console.error("Update error:", err.response?.data || err);
      alert("Failed to update equipment");
    }
  };

  if (!item) return "Loading...";

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Edit Equipment</h1>

      <form onSubmit={submit} className="space-y-4 max-w-lg">
        {["name", "description", "price", "stock", "image_url"].map((field) => (
          <input
            key={field}
            name={field}
            type={field === "price" || field === "stock" ? "number" : "text"}
            className="w-full border p-3 rounded-lg"
            value={item[field] || ""}
            onChange={handleChange}
          />
        ))}

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Save Changes
        </button>
      </form>
    </AdminLayout>
  );
}
