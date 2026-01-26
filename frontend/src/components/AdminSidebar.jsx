import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutGrid, Package, Users, LogOut } from "lucide-react";

export default function AdminSidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // Generate initials avatar
  const getInitials = () => {
    if (!user?.name) return "A";
    return user.name
      .split(" ")
      .map((n) => n[0]?.toUpperCase())
      .join("")
      .slice(0, 2);
  };

  const linkClasses = (path) =>
    `flex items-center gap-3 px-5 py-3 rounded-lg font-medium transition-all
    ${
      pathname === path
        ? "bg-blue-600 text-white shadow"
        : "text-slate-700 hover:bg-blue-50"
    }
  `;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/admin/login");
  };

  return (
    <aside className="w-64 bg-white shadow-xl border-r border-slate-200 min-h-screen flex flex-col justify-between">

      {/* TOP AREA */}
      <div>
        {/* Admin Profile Box */}
        <div className="p-5 border-b border-slate-200">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold shadow">
              {getInitials()}
            </div>

            {/* User Info */}
            <div>
              <p className="font-semibold text-slate-800 text-lg">
                {user?.name || "Admin"}
              </p>
              <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
                System Admin
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="px-4 mt-4 flex flex-col gap-2">
          <Link className={linkClasses("/admin")} to="/admin">
            <LayoutGrid size={20} />
            Dashboard
          </Link>

          <Link
            className={linkClasses("/admin/equipment")}
            to="/admin/equipment"
          >
            <Package size={20} />
            Equipment
          </Link>

          <Link className={linkClasses("/admin/users")} to="/admin/users">
            <Users size={20} />
            Users
          </Link>
        </nav>
      </div>

      {/* LOGOUT BUTTON */}
      <div className="p-4">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
