import { useState } from "react";
import { toast } from "react-hot-toast";

export const ForgotPassword = () => {

    const [email,setEmail] = useState("");

    const submitHandler = async (e) => {
          e.preventDefault();
          try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/user/password/forgot` ;
          const response = await fetch(url,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({email})
          })

          const data = await response.json();
          if(!response.ok) throw new Error(data.msg);
          toast.success(data.message);
          } catch (error) {
            toast.error(error.message);
          }
    }
  return (
    <div className="container">
<form action="post" onSubmit={submitHandler}>
    <h1>Forgot Password</h1>
    <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
    <button className="btn-register" type="submit">Submit</button>
</form>
</div>
  )
}