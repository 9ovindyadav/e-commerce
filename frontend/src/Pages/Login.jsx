import { Link } from "react-router-dom"
import "../sass/login.scss"
import { useState } from "react";

export const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email,password);
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