import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/login", form);
      navigate("/dashboard");
    } catch (err) {
      toast.error("Invalid credentials ❌");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            className="input"
            type="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="button">Login Now</button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Sign up</Link>
        </p>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;