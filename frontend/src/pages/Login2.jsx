import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function Login2() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    console.log("Sending request to:", API.defaults.baseURL + "/auth/login");

    try {
      const res = await API.post("/auth/login", { email, password });
      console.log("SERVER RESPONSE:", res.data);

      const token = res.data.token;
      const payload = JSON.parse(atob(token.split(".")[1]));
      const role = payload.role;

      localStorage.setItem("token", token);

      if (role === "admin") navigate("/admin");
      else navigate("/");
    } catch (err) {
      console.log("AXIOS ERROR:", err);
      setError("Login failed");
    }
  };

  return (
    <div className="p-10">
      <h1>Login</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
