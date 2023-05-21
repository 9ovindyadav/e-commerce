import { Link, useNavigate } from "react-router-dom"
import "../sass/login.scss"
import { useState } from "react"
import { toast } from "react-hot-toast";


export const Register = () => {
  const navigate = useNavigate();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        
        try {
          const url = `${import.meta.env.VITE_BACKEND_URL}/user/register`;
        const response = await fetch(url,{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify({
            name,email,password
          })
        });

        const data = await response.json();
       if(!response.ok) throw new Error(data.msg);
        toast.success(data.message)
        navigate("/");
        } catch (error) {
          toast.error(error.message);
        }
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