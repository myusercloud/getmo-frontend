import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/login", { email, password });
      const token = res.data.token;

      // Extract role from token
      const payload = JSON.parse(atob(token.split(".")[1]));
      const role = payload.role;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      navigate("/"); // Redirect home after login
    } catch (err) {
      setError(err.response?.data?.error || "Login failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-blue-50 px-4">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Login
        </h1>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border p-3 rounded-lg"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full border p-3 rounded-lg"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-medium hover:bg-blue-900 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-700 font-semibold cursor-pointer"
          >
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
}
