import Logo from "../../src/assets/images/logo.png"
import "../sass/layout.scss";
import {BsChevronDown, BsPersonFill, BsCart3} from "react-icons/bs"
import {BiSearch, BiLogIn} from "react-icons/bi";
import {FiMenu} from "react-icons/fi"
import { Link } from "react-router-dom";
import { useState } from "react";

const user = {
  // id:"4726943865"
};
export const Navbar = () => {

  const [show, setShow] = useState(false);

  const clickHandler = () =>{
    setShow(true);
    if(show){
      setShow(false);
    }
  }

  return (
    <nav>
      <Link to={"/"} className="logo">
        <img src={Logo} alt="red apple as logo of the brand" />
        <span>Shopcart</span>
      </Link>
      <ul>
        <li><Link to="/category">Category</Link> <BsChevronDown/> </li>
        <li><Link to="/cloths">Men's</Link></li>
        <li><Link to="/cloths">Women's</Link></li>
        <li><Link to="/sale">Sale</Link></li>
      </ul>
      <div className="search">
      <input type="text" placeholder="Search product" /> <BiSearch/>
      </div>
      {
        user.id ? <div className="modal">
          <Link onClick={clickHandler}><BsPersonFill/> Account</Link>
               
                {
                  show ? <AccountDetails /> : null 
                }
               
        </div> : <Link to={"/login"}><BiLogIn/> Login</Link>
      }
      <Link to="/cart"><BsCart3/> Cart</Link>
      <FiMenu className="mobile-menu"/>
    </nav>
  )
}


const AccountDetails = () => {
 
  return(
    <div className="modal-body">
    <Link to={"/profile"} onClick={()=>setShow(false)}>Profile</Link>
    <Link to={"/orders"} onClick={()=>setShow(false)}>Orders</Link>
    <Link to={"/settings"} onClick={()=>setShow(false)}>Settings</Link>
    <Link onClick={()=>setShow(false)}>Log out</Link>
</div>
  )
}