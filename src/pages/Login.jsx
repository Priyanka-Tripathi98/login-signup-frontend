import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.css"

function Login(){
    const [Form, setForm] = useState({
     email:"",
        password:"",
    });
  const Navigate = useNavigate()

    const handleChange = (e) =>{
        setForm({...Form,[e.target.name]:e.target.value})
    }
    const handleSubmit = async(e) =>{
      e.preventDefault();
    
    try{
        const res = await fetch("http://localhost:8001/login",{
          method : "POST",
          headers:{
           "Content-Type":"application/json"
          },
          body: JSON.stringify(Form)
        });
        const data = await res.json();
      console.log(data)

      localStorage.setItem("token",data.token);
      Navigate("/dashboard")
      
    }catch(err){
      alert("Error");
    }
}
  return (
  <div className="card">
    <h2>Login</h2>

    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <input type="email" name="email" value={Form.email} onChange={handleChange} required />
        <label>Email</label>
      </div>

      <div className="input-box">
        <input type="password" name="password" value={Form.password}onChange={handleChange} required/>
        <label>Password</label>
      </div>

      <div className="options">
        <input type="checkbox" name="remember" />
        <label>Remember me</label>
        <a href="/">Forgot Password?</a>
      </div>

      <button type="submit">Login</button>

      <p>
        Don't have account?{" "}
        <a href="/">Signup</a>
      </p>
      
    </form>
  </div>
);
}

export default Login
