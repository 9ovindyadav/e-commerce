import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./Pages/Home"
import { Navbar } from "./Layout/Navbar"
import { Footer } from "./Layout/Footer"
import { Cloths } from "./Pages/Products/Cloths"
import { Product } from "./Pages/Products/Product-details"
import { Login } from "./Pages/User/Login"
import { Register } from "./Pages/User/Register"
import { Toaster } from "react-hot-toast"
import { Profile } from "./Pages/User/Profile"
import { ForgotPassword } from "./Pages/User/ForgotPassword"
import { ResetPassword } from "./Pages/User/ResetPassword"

function App() {

  return (
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cloths" element={<Cloths/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forget-password" element={<ForgotPassword/>}/>
          <Route path="/reset-password/:token" element={<ResetPassword/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        <Footer/>
        <Toaster/>
   </BrowserRouter>
  )
}

export default App
