import { Link, Navigate, useNavigate } from "react-router-dom"
import "../sass/login.scss"
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export const Login = () => {

  const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
          const url = `${import.meta.env.VITE_BACKEND_URL}/user/login`
        const response = await fetch(url,{
          method:"POST",
          headers:{
           "content-type":"application/json"
          },
          body: JSON.stringify({
            email,password
          })
        })
    
        const data = await response.json();
        if(!response.ok) throw new Error(data.msg);
        toast.success(data.message);
        navigate("/");
        } catch (error) {
          toast.error(error.message);
        }
      
    }
  return (
<div className="container">
<form action="" onSubmit={submitHandler}>
    <h1>Login</h1>
    <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
    <div>
        <Link to={"/forget-password"}>Forget password</Link>
        <Link to={"/reset-password"}>Reset password</Link>
    </div>
    <button type="submit">Login</button>
    <label>New User ? <Link to="/register">Register</Link></label>
</form>
</div>
  )
}