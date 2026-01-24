import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Login2 from "./pages/Login2";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRoute from "./components/AdminRoute";

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="pt-24 lg:pt-28">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          <Route path="/unauthorized" element={<div>Not allowed</div>} />

          {/* CATCH ALL */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}
