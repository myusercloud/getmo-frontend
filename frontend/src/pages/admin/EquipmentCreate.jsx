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
    type: "SALE",
  });

  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreview(files.map((f) => URL.createObjectURL(f)));
  };

const submit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();

    // Append all text fields
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("price", form.price);
    formData.append("stock", form.stock);
    formData.append("type", form.type);

    // Append images
    images.forEach((img) => formData.append("images", img));

    await API.post("/equipment", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

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

        {/* Name */}
        <input
          name="name"
          placeholder="Equipment Name"
          className="w-full border p-3 rounded-lg"
          value={form.name}
          onChange={handleChange}
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-3 rounded-lg"
          value={form.description}
          onChange={handleChange}
          required
        />

        {/* Price */}
        <input
          name="price"
          type="number"
          placeholder="Price"
          className="w-full border p-3 rounded-lg"
          value={form.price}
          onChange={handleChange}
          required
        />

        {/* Stock */}
        <input
          name="stock"
          type="number"
          placeholder="Stock"
          className="w-full border p-3 rounded-lg"
          value={form.stock}
          onChange={handleChange}
          required
        />

        {/* Type */}
        <select
          name="type"
          className="w-full border p-3 rounded-lg"
          value={form.type}
          onChange={handleChange}
        >
          <option value="SALE">SALE</option>
          <option value="LEASE">LEASE</option>
          <option value="BOTH">BOTH</option>
        </select>



        {/* Images */}
        <div>
          <label className="font-semibold mb-2 block">Equipment Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {/* Image Preview */}
        {preview.length > 0 && (
          <div className="flex gap-2 mt-2 flex-wrap">
            {preview.map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-20 h-20 object-cover rounded border"
              />
            ))}
          </div>
        )}

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Save
        </button>
      </form>
    </AdminLayout>
  );
}
