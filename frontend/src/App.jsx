import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/AdminLogin";
import AdminRoute from "./components/AdminRoute";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import EquipmentList from "./pages/admin/EquipmentList";
import EquipmentCreate from "./pages/admin/EquipmentCreate";
import EquipmentEdit from "./pages/admin/EquipmentEdit";

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="pt-24 lg:pt-28">

        <Routes>

  {/* Public Site */}
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

  {/* Equipment CRUD */}
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

  {/* Catch-all */}
  <Route path="*" element={<Navigate to="/" />} />
</Routes>


      </main>
    </div>
  );
}
