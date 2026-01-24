import { Link, useLocation } from "react-router-dom";
import { LayoutGrid, Package, Users } from "lucide-react";

export default function AdminSidebar() {
  const { pathname } = useLocation();

  const linkClasses = (path) =>
    `flex items-center gap-3 px-5 py-3 rounded-lg font-medium transition-all
     ${pathname === path ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-blue-50"}
    `;

  return (
    <aside className="w-64 bg-white shadow-xl border-r border-slate-200 min-h-screen">
      <div className="p-5 font-black text-xl tracking-tight text-blue-700">
        Admin Panel
      </div>

      <nav className="px-4 mt-4 flex flex-col gap-2">
        <Link className={linkClasses("/admin")} to="/admin">
          <LayoutGrid size={20} />
          Dashboard
        </Link>

        <Link className={linkClasses("/admin/equipment")} to="/admin/equipment">
          <Package size={20} />
          Equipment
        </Link>

        <Link className={linkClasses("/admin/users")} to="/admin/users">
          <Users size={20} />
          Users
        </Link>
      </nav>
    </aside>
  );
}
