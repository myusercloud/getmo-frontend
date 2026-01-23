import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Add padding-top here to prevent content from 
          hiding behind the fixed navbar. 
          pt-24 accounts for the enlarged logo/navbar height.
      */}
      <main className="pt-24 lg:pt-28">
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}