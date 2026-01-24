import AdminLayout from "./AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Welcome, Admin</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border rounded-xl shadow">
          <h2 className="text-xl font-bold">Equipment</h2>
          <p className="text-slate-500">Manage medical equipment inventory.</p>
        </div>

        <div className="p-6 bg-white border rounded-xl shadow">
          <h2 className="text-xl font-bold">Users</h2>
          <p className="text-slate-500">Manage system users and admins.</p>
        </div>

        <div className="p-6 bg-white border rounded-xl shadow">
          <h2 className="text-xl font-bold">Settings</h2>
          <p className="text-slate-500">System and account settings.</p>
        </div>
      </div>
    </AdminLayout>
  );
}
