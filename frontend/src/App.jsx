import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar displayed across all pages */}
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Extra pages can be added here later */}
      </Routes>
    </div>
  );
}
