import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/api";
import AdminLayout from "./AdminLayout";

export default function EquipmentEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);

  useEffect(() => {
    API.get(`/equipment/${id}`).then((res) => setItem(res.data));
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    await API.put(`/equipment/${id}`, item);
    navigate("/admin/equipment");
  };

  if (!item) return "Loading...";

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Edit Equipment</h1>

      <form onSubmit={submit} className="space-y-4 max-w-lg">
        {Object.keys(item).map(
          (key) =>
            key !== "id" &&
            key !== "created_at" && (
              <input
                key={key}
                className="w-full border p-3 rounded-lg"
                value={item[key] ?? ""}
                onChange={(e) =>
                  setItem({ ...item, [key]: e.target.value })
                }
              />
            )
        )}

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Save Changes
        </button>
      </form>
    </AdminLayout>
  );
}
