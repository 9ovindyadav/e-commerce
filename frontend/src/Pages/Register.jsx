import { Link } from "react-router-dom"
import "../sass/login.scss"
import { useState } from "react"


export const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name,email,password);
    }
  return (
    <div className="container">
<form action="post" onSubmit={submitHandler}>
    <h1>Register</h1>
    <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Full name" />
    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
    <button className="btn-register" type="submit">Submit</button>
    <label>Already registered ? <Link to="/login">Login</Link></label>
</form>
</div>
  )
}