import Logo from "../../src/assets/images/logo.png"
import "../sass/layout.scss";
import {BsChevronDown, BsPersonFill, BsCart3} from "react-icons/bs"
import {BiSearch} from "react-icons/bi";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav>
      <Link to={"/"} className="logo">
        <img src={Logo} alt="red apple as logo of the brand" />
        <span>Shopcart</span>
      </Link>
      <ul>
        <li><Link to="/category">Category</Link> <BsChevronDown/> </li>
        <li><Link to="/">Men's</Link></li>
        <li><Link to="/">Women's</Link></li>
        <li><Link to="/sale">Sale</Link></li>
      </ul>
      <div className="search">
      <input type="text" placeholder="Search product" /> <BiSearch/>
      </div>
      <Link to="/account"><BsPersonFill/> Account</Link>
      <Link to="/cart"><BsCart3/> Cart</Link>
    </nav>
  )
}