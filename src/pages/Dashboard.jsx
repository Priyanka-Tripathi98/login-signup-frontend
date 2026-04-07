import React,{useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export function Dashboard(){
   const[message, setMessage] = useState("");
   const navigate = useNavigate();

   useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
        navigate("/login");
        return;
    }
    axios.get("https://login-signup-backend-2aw2.onrender.com/dashboard",{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res)=>{
        setMessage(res.data.user.email.name);
    })
    
    .catch(()=>{
        localStorage.removeItem("token")
        navigate('/login')
    })
   },[navigate])

   const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
   }

    return(
   <div className="auth-page">
      <div className="card">
        <h1>Dashboard</h1>
        <h2>Hello {message}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
    )
} 