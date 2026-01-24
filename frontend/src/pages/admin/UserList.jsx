import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/api";
import AdminLayout from "./AdminLayout";
import ConfirmModal from "../../components/ConfirmModal";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/auth/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const openDeleteModal = (id) => {
    setDeleteId(id);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
    // NOTE: backend does not have delete route yet
    alert("User delete not implemented in backend.");
    setModalOpen(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AdminLayout>
      <ConfirmModal
        open={modalOpen}
        title="Delete User"
        message="Are you sure you want to delete this user?"
        onClose={() => setModalOpen(false)}
        onConfirm={confirmDelete}
      />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <Link
          to="/admin/users/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add User
        </Link>
      </div>

      <table className="w-full bg-white rounded-lg shadow border">
        <thead>
          <tr className="bg-slate-100 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Created</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.role}</td>
              <td className="p-3">{new Date(u.created_at).toLocaleDateString()}</td>
              <td className="p-3 flex gap-4">
                <Link
                  to={`/admin/users/${u.id}`}
                  className="text-blue-600 font-medium"
                >
                  Edit
                </Link>

                <button
                  className="text-red-600 font-medium"
                  onClick={() => openDeleteModal(u.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
