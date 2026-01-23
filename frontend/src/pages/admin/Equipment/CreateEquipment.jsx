import { useState } from "react";
import API from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function CreateEquipment() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image_url: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/equipment", {
        ...form,
        price: parseFloat(form.price),
        stock: parseInt(form.stock)
      });
      navigate("/equipment");
    } catch (err) {
      alert("Error creating equipment");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Equipment</h1>

      <form onSubmit={submit} className="grid grid-cols-2 gap-4 max-w-2xl">

        <input
          className="input input-bordered"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="input input-bordered"
          placeholder="Price"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          className="input input-bordered"
          placeholder="Stock"
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />

        <input
          className="input input-bordered"
          placeholder="Image URL"
          onChange={(e) => setForm({ ...form, image_url: e.target.value })}
        />

        <textarea
          className="textarea textarea-bordered col-span-2"
          placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button className="btn btn-primary col-span-2">Save</button>
      </form>
    </div>
  );
}
