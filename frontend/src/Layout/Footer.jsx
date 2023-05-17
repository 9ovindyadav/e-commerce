import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.png"
import "../sass/layout.scss"
import {RiVisaLine} from "react-icons/ri"
import {FaAmazonPay, FaCcMastercard} from "react-icons/fa"

export const Footer = () => {
  return (
    <footer>
      <div className="brand">
      <Link to={"/"} className="logo">
        <img src={Logo} alt="red apple as logo of the brand" />
        <span>Shopcart</span>
      </Link>
      <p>Shopping is a bit of relaxing hobby for me, which is somethimes troubling for the bank balance.</p>
      <h3>Accepted payments</h3>
      <div className="payments">
        <RiVisaLine/>
        <FaCcMastercard />
        <FaAmazonPay/>
      </div>
      </div>
    </footer>
  )
}