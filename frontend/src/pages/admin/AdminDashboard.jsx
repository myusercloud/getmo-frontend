import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import { Package, Users, Settings, Activity } from "lucide-react";

export default function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0]?.toUpperCase())
        .join("")
        .slice(0, 2)
    : "A";

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-8 animate-fadeIn">
        <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow">
          {initials}
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            Welcome back,{" "}
            <span className="text-blue-600">{user?.name || "Admin"}</span> 👋
          </h1>
          <p className="text-slate-600 mt-1">Here's what's happening today.</p>
        </div>
      </div>

      {/* DASHBOARD CARDS */}
      <div className="grid md:grid-cols-3 gap-6 animate-slideUp">

        {/* Equipment Card */}
        <Link
          to="/admin/equipment"
          className="p-6 bg-white border rounded-xl shadow hover:shadow-xl transition cursor-pointer group block"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold group-hover:text-blue-600 transition">
              Equipment
            </h2>
            <Package
              className="text-blue-600 group-hover:scale-110 transition"
              size={26}
            />
          </div>
          <p className="text-slate-500">
            Manage your full medical equipment inventory.
          </p>
        </Link>

        {/* Users Card */}
        <Link
          to="/admin/users"
          className="p-6 bg-white border rounded-xl shadow hover:shadow-xl transition cursor-pointer group block"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold group-hover:text-green-600 transition">
              Users
            </h2>
            <Users
              className="text-green-600 group-hover:scale-110 transition"
              size={26}
            />
          </div>
          <p className="text-slate-500">
            View and manage administrators & users.
          </p>
        </Link>

        {/* Settings Card */}
        <Link
          to="/admin/settings"
          className="p-6 bg-white border rounded-xl shadow hover:shadow-xl transition cursor-pointer group block"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold group-hover:text-slate-700 transition">
              Settings
            </h2>
            <Settings
              className="text-slate-700 group-hover:scale-110 transition"
              size={26}
            />
          </div>
          <p className="text-slate-500">
            System preferences & account settings.
          </p>
        </Link>

      </div>

      {/* SYSTEM STATUS */}
      <div className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-xl shadow-sm flex items-center gap-4">
        <Activity className="text-blue-700" size={32} />
        <div>
          <h3 className="font-semibold text-blue-800 text-lg">
            System status: <span className="font-bold">Operational</span>
          </h3>
          <p className="text-blue-700 text-sm">
            All services are running smoothly.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
}
