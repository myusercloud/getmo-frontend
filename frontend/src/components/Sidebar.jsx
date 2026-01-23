import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-base-200 p-4 fixed">
      <h1 className="text-2xl font-bold mb-6">GetMo Admin</h1>

      <ul className="menu">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/equipment">Equipment</Link></li>
        <li><Link to="/equipment/add">Add Equipment</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/users/add">Add User</Link></li>
        <li><button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="text-red-500"
        >
          Logout
        </button></li>
      </ul>
    </div>
  );
}
