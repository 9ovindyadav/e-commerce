import { Link } from "react-router-dom"
import "../sass/login.scss"


export const Register = () => {
  return (
    <div className="container">
<form action="">
    <h1>Register</h1>
    <input type="text" placeholder="Full name" />
    <input type="email" placeholder="Email"/>
    <input type="password" placeholder="Password" />
    <button className="btn-register" type="submit">Submit</button>
    <label>Already registered ? <Link to="/login">Login</Link></label>
</form>
</div>
  )
}