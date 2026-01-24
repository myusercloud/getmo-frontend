import { useEffect, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUser({
        id: payload.id,
        role: payload.role,
      });
    } catch (err) {
      console.error("Invalid token:", err);
      localStorage.removeItem("token");
    }
  }, []);

  return user;
}
