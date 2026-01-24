import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Login2 from "./pages/Login2";
import Register from "./pages/Register";

import AdminRoute from "./components/AdminRoute";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import EquipmentList from "./pages/admin/EquipmentList";
import EquipmentCreate from "./pages/admin/EquipmentCreate";
import EquipmentEdit from "./pages/admin/EquipmentEdit";
import UserList from "./pages/admin/UserList";

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="pt-24 lg:pt-28">

        <Routes>

          {/* Public */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Protected */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/equipment"
            element={
              <AdminRoute>
                <EquipmentList />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/equipment/create"
            element={
              <AdminRoute>
                <EquipmentCreate />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/equipment/:id"
            element={
              <AdminRoute>
                <EquipmentEdit />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <UserList />
              </AdminRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>

      </main>
    </div>
  );
}
