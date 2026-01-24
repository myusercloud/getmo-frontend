import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/admin");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={submit} className="space-y-4">
        <input
          placeholder="Admin Email"
          className="w-full border p-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          className="w-full border p-3"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-3 w-full">Login</button>
      </form>
    </div>
  );
}
