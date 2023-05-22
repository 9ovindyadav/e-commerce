import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export const ResetPassword = () => {
    
const params = useParams();
const navigate = useNavigate();
const [password,setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/user/password/reset/${params.token}`;

        const response = await fetch(url,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({password})
        })
        const data = await response.json();
        if(!response.ok) throw new Error(data.msg)
        toast.success(data.message)
        navigate("/login")
      } catch (error) {
        toast.error(error.message);
      }
    }
  return (
    <div className="container">
    <form action="post" onSubmit={submitHandler}>
        <h1>Reset Password</h1>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="New Password"/>
        <button className="btn-register" type="submit">Submit</button>
    </form>
    </div>
  )
}