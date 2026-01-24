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

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/equipment", form);
    navigate("/admin/equipment");
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Add Equipment</h1>

      <form onSubmit={submit} className="space-y-4 max-w-lg">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            className="w-full border p-3 rounded-lg"
            placeholder={key}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        ))}

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Save
        </button>
      </form>
    </AdminLayout>
  );
}
