import { useState } from "react";
import API from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    navigate("/users");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add User</h1>

      <form onSubmit={submit} className="grid grid-cols-2 gap-4 max-w-xl">
        
        <input
          className="input input-bordered"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="input input-bordered"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="input input-bordered"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <select
          className="select select-bordered col-span-2"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button className="btn btn-primary col-span-2">Create</button>

      </form>
    </div>
  );
}
