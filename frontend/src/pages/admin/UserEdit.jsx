import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/api";
import AdminLayout from "./AdminLayout";

export default function UserEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("/auth/users")
      .then((res) => {
        const u = res.data.find((x) => x.id === id);
        setUser(u);
      })
      .catch(console.error);
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/auth/users/${id}`, {
        role: user.role
      });
      navigate("/admin/users");
    } catch (err) {
      alert("Update failed (backend route not implemented yet)");
    }
  };

  if (!user) return "Loading...";

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Edit User</h1>

      <form onSubmit={submit} className="space-y-4 max-w-lg">

        <input
          disabled
          className="w-full p-3 border rounded-lg bg-slate-100"
          value={user.name}
        />

        <input
          disabled
          className="w-full p-3 border rounded-lg bg-slate-100"
          value={user.email}
        />

        <select
          className="w-full p-3 border rounded-lg"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Save Changes
        </button>
      </form>
    </AdminLayout>
  );
}
