import { useEffect, useState } from "react";
import { Search, UserRound, Mail } from "lucide-react";
import API from "../../api/api";
import AdminLayout from "./AdminLayout";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    async function load() {
      try {
        const res = await API.get("/auth/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to load users", err);
      }
    }
    load();
  }, []);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">System Users</h1>
          <p className="text-slate-500 mt-1">
            View all users and administrators in the system.
          </p>
        </div>

        {/* Stats */}
        <div className="bg-blue-600 text-white px-5 py-3 rounded-xl shadow text-center">
          <p className="text-sm opacity-80">Total Users</p>
          <p className="text-xl font-bold">{users.length}</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-3 text-slate-400" size={18} />
        <input
          className="w-full border rounded-lg py-3 pl-10 pr-4 shadow-sm focus:ring-2 focus:ring-blue-500"
          placeholder="Search users by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Users List */}
      <div className="bg-white border rounded-xl shadow overflow-hidden">
        {filtered.length === 0 && (
          <div className="p-10 text-center text-slate-500">
            No users match your search.
          </div>
        )}

        {filtered.map((u) => (
          <div
            key={u.id}
            className={`flex items-center justify-between gap-4 p-5 border-b last:border-0 ${
              u.id === currentUser?.id
                ? "bg-blue-50 border-blue-200"
                : "bg-white"
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Avatar Icon */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow ${
                  u.id === currentUser?.id
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                <UserRound size={20} />
              </div>

              {/* Name + Email */}
              <div>
                <p className="font-semibold text-lg">{u.name}</p>
                <div className="flex items-center text-slate-500 text-sm gap-1">
                  <Mail size={15} />
                  {u.email}
                </div>

                {u.id === currentUser?.id && (
                  <span className="text-xs font-medium text-blue-600 mt-1 inline-block">
                    ✔ This is you (Admin)
                  </span>
                )}
              </div>
            </div>

            {/* Role Tag */}
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold shadow ${
                u.id === currentUser?.id
                  ? "bg-blue-100 text-blue-700"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              Admin
            </span>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
