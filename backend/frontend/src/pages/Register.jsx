import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://loginregister-backend.onrender.com/api/auth/register", form);
      alert("Registered successfully ✅");
      navigate("/");
    } catch (err) {
      alert("Error registering user");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Enter your name"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

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
            placeholder="Create password"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="button">Register Now</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;