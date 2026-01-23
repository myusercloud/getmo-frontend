import { useEffect, useState } from "react";
import API from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  useEffect(() => {
    API.get(`/auth/users`).then((res) => {
      const user = res.data.find((u) => u.id === id);
      setForm(user);
    });
  }, []);

  const save = async (e) => {
    e.preventDefault();
    await API.put(`/auth/user/${id}`, form);
    navigate("/users");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>

      <form onSubmit={save} className="grid grid-cols-2 gap-4 max-w-xl">
        <input
          className="input input-bordered"
          value={form.name || ""}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="input input-bordered"
          value={form.email || ""}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <select
          className="select select-bordered col-span-2"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button className="btn btn-primary col-span-2">Save Changes</button>
      </form>
    </div>
  );
}
