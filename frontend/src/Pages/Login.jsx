import { Link } from "react-router-dom"
import "../sass/login.scss"

export const Login = () => {
  return (
<div className="container">
<form action="">
    <h1>Login</h1>
    <input type="text" placeholder="Email"/>
    <input type="password" placeholder="Password" />
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