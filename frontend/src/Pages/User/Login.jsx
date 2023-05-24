import { Link, Navigate, useNavigate } from "react-router-dom"
import "../../sass/login.scss"
import { useState } from "react";
import {useDispatch} from "react-redux";
import {login} from "../../Redux/Actions/userActions";


export const Login = () => {

  const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
      dispatch(login(email,password));
    }
  return (
<div className="container">
<form action="post" onSubmit={submitHandler}>
    <h1>Login</h1>
    <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
    
    <button type="submit">Login</button>
    <div>
        <Link to={"/forget-password"}>Forget password</Link>
    </div>
    <label>New User ? <Link to="/register">Register</Link></label>
</form>
</div>
  )
}