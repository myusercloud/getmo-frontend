import { useEffect, useState } from "react";
import API from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";

export default function EditEquipment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image_url: ""
  });

  useEffect(() => {
    API.get(`/equipment/${id}`).then((res) => setForm(res.data));
  }, []);

  const save = async (e) => {
    e.preventDefault();
    await API.put(`/equipment/${id}`, form);
    navigate("/equipment");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Equipment</h1>

      <form onSubmit={save} className="grid grid-cols-2 gap-4 max-w-2xl">
        <input
          className="input input-bordered"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="input input-bordered"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          className="input input-bordered"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />

        <input
          className="input input-bordered"
          value={form.image_url}
          onChange={(e) => setForm({ ...form, image_url: e.target.value })}
        />

        <textarea
          className="textarea textarea-bordered col-span-2"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button className="btn btn-primary col-span-2">Save Changes</button>
      </form>
    </div>
  );
}
