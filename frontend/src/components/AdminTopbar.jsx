import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminTopbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login2");
  };

  return (
    <header className="bg-white shadow-md border-b border-slate-200 p-4 flex justify-between items-center">
      <h2 className="text-xl font-bold text-slate-800">Admin Dashboard</h2>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-sm bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        <LogOut size={18} />
        Logout
      </button>
    </header>
  );
}
