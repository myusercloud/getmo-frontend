import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      setSuccess("Account created successfully! You can now log in.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-blue-50 px-4">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create Account
        </h1>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && <p className="text-green-600 text-center mb-4">{success}</p>}

        <form onSubmit={handleSignup} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border p-3 rounded-lg"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border p-3 rounded-lg"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full border p-3 rounded-lg"
              placeholder="At least 6 characters"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-medium hover:bg-blue-900 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-700 font-semibold cursor-pointer"
          >
            Log In
          </span>
        </p>

      </div>
    </div>
  );
}
