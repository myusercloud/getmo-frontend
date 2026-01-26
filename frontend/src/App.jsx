import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/AdminLogin";
import AdminRoute from "./components/AdminRoute";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import EquipmentList from "./pages/admin/EquipmentList";
import EquipmentCreate from "./pages/admin/EquipmentCreate";
import EquipmentEdit from "./pages/admin/EquipmentEdit";
import AdminUsers from "./pages/admin/AdminUsers"; // new

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Auto logout if navigating OUTSIDE the admin section
    if (token && !location.pathname.startsWith("/admin")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, [location]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="pt-24 lg:pt-28">
        <Routes>

          {/* Public Website */}
          <Route path="/" element={<LandingPage />} />

          {/* Admin Login */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Dashboard */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          {/* Users */}
          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <AdminUsers />
              </AdminRoute>
            }
          />

          {/* Equipment Routes */}
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

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </main>
    </div>
  );
}
