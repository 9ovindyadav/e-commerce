import Logo from "../../src/assets/images/logo.png"
import "../sass/layout.scss";
import {BsChevronDown, BsPersonFill, BsCart3} from "react-icons/bs"
import {BiSearch, BiLogIn} from "react-icons/bi";
import {FiMenu} from "react-icons/fi"
import {AiOutlineClose} from "react-icons/ai"
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

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

  const mySidenav = useRef();
const pannelDisplay1 = useRef();
const pannelDisplay2 = useRef();

  const openMenu = ()=>{
    mySidenav.current.style.width = "70%" ;
  }
  const closeMenu = ()=>{
    mySidenav.current.style.width = "0" ;
  }
   
  const pannelDisplayHandler1 = ()=>{
   
  if(pannelDisplay1.current.style.display === "block"){
    pannelDisplay1.current.style.display = "none" ;
  }else{
    pannelDisplay1.current.style.display = "block" ;
  }

  }
  
const pannelDisplayHandler2 = ()=>{

    if(pannelDisplay2.current.style.display === "block"){
        pannelDisplay2.current.style.display = "none" ;
      }else{
        pannelDisplay2.current.style.display = "block" ;
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

      <FiMenu className="mobile-menu" onClick={openMenu}/>
      <div ref={mySidenav} class="sidenav">
            <span href="javascript:void(0)" class="closebtn" onClick={closeMenu}><AiOutlineClose/></span>
            <div className="nav1">
            <a href="#" onClick={pannelDisplayHandler1}>Features <BsChevronDown/></a>
            <div ref={pannelDisplay1} className="panel">
                <a href="#">Todo List</a>
                <a href="#">Calender</a>
                <a href="#">Reminder</a>
                <a href="#">Planning</a>
            </div>
            <a href="#" onClick={pannelDisplayHandler2}>Company </a>
            <div ref={pannelDisplay2} className="panel">
                <a href="#">History</a>
                <a href="#">Our team</a>
                <a href="#">Blog</a>
            </div>
            <a href="#">Carears</a>
            <a href="#">About</a>
            </div>
            <div className="nav2">
            <a href="#">Login</a>
            <a href="#">Register</a>
             </div>
       </div>
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
