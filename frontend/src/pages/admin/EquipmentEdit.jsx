import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/api";
import AdminLayout from "./AdminLayout";

export default function EquipmentEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [error, setError] = useState("");
  const [files, setFiles] = useState([]);

  // ---------- LOAD EQUIPMENT ----------
  useEffect(() => {
    API.get(`/equipment/${id}`).then((res) => {
      const { slug, specifications, categoryId, images, ...cleanData } = res.data;

      // Remove slug, category, spec, and images
      setItem(cleanData);
    });
  }, [id]);

  // ---------- HANDLE INPUT CHANGES ----------
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

  // ---------- DRAG AND DROP ----------
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileSelect = (e) => {
    const selected = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selected]);
  };

  // ---------- SUBMIT ----------
  const submit = async (e) => {
    e.preventDefault();
    setError("");

    const payload = {
      name: item.name,
      description: item.description,
      price: item.price,
      stock: item.stock,
      type: item.type,
    };

    try {
      await API.put(`/equipment/${id}`, payload);

      // NOTE: Upload images separately here if needed
      // You can use FormData and POST to /equipment/:id/images

      navigate("/admin/equipment");
    } catch (err) {
      console.error("Update error:", err.response?.data || err);
      setError("Failed to update equipment");
    }
  };

  if (!item) return "Loading...";

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Edit Equipment</h1>

      {error && (
        <p className="bg-red-100 text-red-600 p-3 rounded mb-4">{error}</p>
      )}

      <form
        onSubmit={submit}
        className="space-y-5 max-w-xl bg-white p-6 rounded-xl shadow"
      >
        {/* NAME */}
        <div>
          <label className="font-semibold">Name</label>
          <input
            name="name"
            className="w-full mt-1 border p-3 rounded"
            value={item.name}
            onChange={handleChange}
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            className="w-full mt-1 border p-3 rounded"
            value={item.description || ""}
            onChange={handleChange}
            rows={3}
          />
        </div>

        {/* PRICE & STOCK */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Price</label>
            <input
              name="price"
              type="number"
              className="w-full mt-1 border p-3 rounded"
              value={item.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="font-semibold">Stock</label>
            <input
              name="stock"
              type="number"
              className="w-full mt-1 border p-3 rounded"
              value={item.stock}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* TYPE */}
        <div>
          <label className="font-semibold">Type</label>
          <select
            name="type"
            className="w-full mt-1 border p-3 rounded"
            value={item.type}
            onChange={handleChange}
          >
            <option value="SALE">SALE</option>
            <option value="LEASE">LEASE</option>
            <option value="BOTH">BOTH</option>
          </select>
        </div>

        {/* DRAG & DROP UPLOAD */}
        <div>
          <label className="font-semibold">Upload New Images</label>

          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="mt-2 p-6 border-2 border-dashed rounded-lg text-center cursor-pointer"
          >
            <p className="text-gray-500">Drag & drop images here</p>
            <p className="text-gray-400 text-sm">or click to choose</p>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="opacity-0 absolute inset-0 cursor-pointer"
              style={{ position: "relative", top: "-40px", width: "100%", height: "100%" }}
            />
          </div>

          {/* Preview Selected Images */}
          {files.length > 0 && (
            <div className="flex gap-3 flex-wrap mt-3">
              {files.map((file, idx) => (
                <img
                  key={idx}
                  src={URL.createObjectURL(file)}
                  className="w-24 h-24 object-cover rounded border shadow-sm"
                />
              ))}
            </div>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full font-semibold">
          Save Changes
        </button>
      </form>
    </AdminLayout>
  );
}
