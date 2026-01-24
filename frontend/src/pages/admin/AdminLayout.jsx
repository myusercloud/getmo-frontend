import AdminSidebar from "../../components/AdminSidebar";
import AdminTopbar from "../../components/AdminTopbar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <AdminSidebar />

      <div className="flex-1">
        <AdminTopbar />

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
