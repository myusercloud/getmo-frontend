import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await API.post("/auth/register", form);
      navigate("/login");
    } catch {
      setError("Registration failed");
    }
  };

  return (
    <div className="p-10">
      <h1>Register</h1>

      {error && <p className="text-red-600">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} />
        <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})} />
        <input placeholder="Password" type="password" onChange={(e)=>setForm({...form,password:e.target.value})} />
        <button>Register</button>
      </form>
    </div>
  );
}
