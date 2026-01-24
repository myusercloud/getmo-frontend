import { useEffect, useState } from "react";

export default function useAuth() {
  const token = localStorage.getItem("token");

  // If no token: return null immediately
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return {
      id: payload.id,
      role: payload.role
    };
  } catch (error) {
    console.error("Invalid token:", error);
    localStorage.removeItem("token");
    return null;
  }
}
