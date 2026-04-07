import { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const [Form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Form)
      });

      const data = await res.json();
      alert(data.message);

    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div className="auth-page">
      <div className="card">
        <h2>Sign Up</h2>
         <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" name="name" value={Form.name} onChange={handleChange} required/>
            <label>Name</label>
          </div>

          <div className="input-box">
            <input
              type="email"
              name="email"
              value={Form.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              value={Form.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>

          <div className="input-box">
            <input
              type="password"
              name="confirmPassword"
              value={Form.confirmPassword}
              onChange={handleChange}
              required
            />
            <label>Confirm Password</label>
          </div>

          <button type="submit">Signup</button>

          <p>
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Signup;