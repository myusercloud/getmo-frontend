import { useEffect, useState } from "react";
import API from "../../api/api";
import AdminLayout from "./AdminLayout";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await API.get("/auth/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      <table className="w-full bg-white rounded-lg shadow border">
        <thead>
          <tr className="bg-slate-100 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Created</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.role}</td>
              <td className="p-3">{new Date(u.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
