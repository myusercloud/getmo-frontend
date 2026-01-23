import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/api";

export default function EquipmentList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.get("/equipment").then((res) => setItems(res.data));
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Equipment</h1>
        <Link to="/equipment/add" className="btn btn-primary">
          Add New
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {items.map((e) => (
          <div key={e.id} className="card bg-base-100 shadow p-4">
            {e.image_url && (
              <img
                src={e.image_url}
                className="h-40 w-full object-cover rounded"
              />
            )}

            <h2 className="text-lg font-bold mt-2">{e.name}</h2>
            <p>{e.description}</p>
            <p className="font-bold mt-2">Ksh {e.price}</p>

            <Link
              to={`/equipment/edit/${e.id}`}
              className="btn btn-outline mt-2"
            >
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
