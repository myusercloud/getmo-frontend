import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/api";
import AdminLayout from "./AdminLayout";
import ConfirmModal from "../../components/ConfirmModal";

export default function EquipmentList() {
  const [items, setItems] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchItems = async () => {
    const res = await API.get("/equipment");
    setItems(res.data);
  };

  const openDeleteModal = (id) => {
    setDeleteId(id);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
    await API.delete(`/equipment/${deleteId}`);
    setModalOpen(false);
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <AdminLayout>
      <ConfirmModal
        open={modalOpen}
        title="Delete Equipment"
        message="Are you sure you want to delete this equipment item?"
        onClose={() => setModalOpen(false)}
        onConfirm={confirmDelete}
      />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Equipment</h1>
        <Link
          to="/admin/equipment/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add New
        </Link>
      </div>

      <table className="w-full bg-white rounded-lg shadow border">
        <thead>
          <tr className="bg-slate-100 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Stock</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-3">{item.name}</td>
              <td className="p-3">KSH {item.price}</td>
              <td className="p-3">{item.stock}</td>
              <td className="p-3 flex gap-4">
                <Link
                  to={`/admin/equipment/${item.id}`}
                  className="text-blue-600 font-medium"
                >
                  Edit
                </Link>

                <button
                  onClick={() => openDeleteModal(item.id)}
                  className="text-red-600 font-medium"
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
