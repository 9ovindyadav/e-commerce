import Logo from "../../src/assets/images/logo.png"
import "../sass/layout.scss";
import {BsChevronDown, BsPersonFill, BsCart3} from "react-icons/bs"
import {BiSearch, BiLogIn} from "react-icons/bi";
import {FiMenu} from "react-icons/fi"
import {AiOutlineClose} from "react-icons/ai"
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../Redux/Actions/userActions";


export const Navbar = ({isAuthenticated = false, user}) => {

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

const dispatch = useDispatch();
const logOutHandler = () => {
  dispatch(logOut());
  closeMenu();
  setShow(false);
}

  return (
    <nav>
      <Link to={"/"} className="logo">
        <img src={Logo} alt="red apple as logo of the brand" />
        <span>Shopcart</span>
      </Link>
      <ul>
        <li><Link to="/category" onClick={()=>setUser(userData)}>Category</Link> <BsChevronDown/> </li>
        <li><Link to="/cloths">Men's</Link></li>
        <li><Link to="/cloths">Women's</Link></li>
        <li><Link to="/sale">Sale</Link></li>
      </ul>
      <div className="search">
      <input type="text" placeholder="Search product" /> <BiSearch/>
      </div>
      {
        isAuthenticated ? <div className="modal">
          <Link onClick={clickHandler}><BsPersonFill/> Account</Link>
               
                {
                  show ? <div className="modal-body">
                  <Link to={"/profile"} onClick={()=>setShow(false)}>Profile</Link>
                  <Link to={"/orders"} onClick={()=>setShow(false)}>Orders</Link>
                  <Link to={"/settings"} onClick={()=>setShow(false)}>Settings</Link>
                  <Link onClick={logOutHandler}>Log out</Link>
              </div> : null 
                }
               
        </div> : <Link to={"/login"}><BiLogIn/> Login</Link>
      }
      <Link to="/cart"><BsCart3/> Cart</Link>

      <FiMenu className="mobile-menu" onClick={openMenu}/>
      <div ref={mySidenav} class="sidenav">
            <span href="javascript:void(0)" class="closebtn" onClick={closeMenu}><AiOutlineClose/></span>
            <div className="nav1">
            <Link to={"/"} onClick={closeMenu}>Home</Link>
            <a href="#" onClick={pannelDisplayHandler1}>Category<BsChevronDown/></a>
            <div ref={pannelDisplay1} className="panel">
                <a href="#">Todo List</a>
                <a href="#">Calender</a>
                <a href="#">Reminder</a>
                <a href="#">Planning</a>
            </div>
           
            <Link to={"/cloths"} onClick={closeMenu}>Men's</Link>
            <Link to={"/cloths"} onClick={closeMenu}>Women's</Link>
            <Link to={"/sale"} onClick={closeMenu}>Sale</Link>
            </div>
            {
              isAuthenticated ? <>
               <a href="#" onClick={pannelDisplayHandler2}>Account<BsChevronDown/></a>
            <div ref={pannelDisplay2} className="panel">
                <Link to={"/profile"}>Profile</Link>
                <Link to={"/profile"}>Orders</Link>
                <Link to={"/profile"}>Settings</Link>
            </div>
            <Link onClick={closeMenu}>Cart <BsCart3/></Link>
            <Link onClick={logOutHandler}>Log out</Link>
               </> : <div className="nav2">
              <Link to={"/login"} onClick={closeMenu}>Login</Link>
              <Link to={"/register"} onClick={closeMenu}>Register</Link>
               </div>
            }
       </div>
    </nav>
  )
}

