import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AdminRoute({ children }) {
  const user = useAuth();

  if (!user) return <Navigate to="/login2" replace />;
  if (user.role !== "admin") return <Navigate to="/unauthorized" replace />;

  return children;
}
