import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EquipmentList from "./pages/Equipment/EquipmentList";
import CreateEquipment from "./pages/Equipment/CreateEquipment";
import EditEquipment from "./pages/Equipment/EditEquipment";
import UserList from "./pages/Users/UserList";
import CreateUser from "./pages/Users/CreateUser";
import EditUser from "./pages/Users/EditUser";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage"; 
import Navbar from "./components/HomeNavbar";
import Footer from "./components/Footer";


export default function App() {
  const Layout = ({ children }) => (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-6">{children}</div>
    </div>
  );

  // Layout for the public website
  const PublicLayout = ({ children }) => (
    <div className="bg-base-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout><Dashboard /></Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/equipment"
          element={
            <ProtectedRoute>
              <Layout><EquipmentList /></Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/equipment/add"
          element={
            <ProtectedRoute>
              <Layout><CreateEquipment /></Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/equipment/edit/:id"
          element={
            <ProtectedRoute>
              <Layout><EditEquipment /></Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Layout><UserList /></Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/users/add"
          element={
            <ProtectedRoute>
              <Layout><CreateUser /></Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/users/edit/:id"
          element={
            <ProtectedRoute>
              <Layout><EditUser /></Layout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
