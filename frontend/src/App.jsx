import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./Pages/Home"
import { Navbar } from "./Layout/Navbar"
import { Footer } from "./Layout/Footer"
import { Cloths } from "./Pages/Products/Cloths"
import { Product } from "./Pages/Products/Product-details"
import { Login } from "./Pages/User/Login"
import { Register } from "./Pages/User/Register"
import { Toaster, toast } from "react-hot-toast"
import { Profile } from "./Pages/User/Profile"
import { ForgotPassword } from "./Pages/User/ForgotPassword"
import { ResetPassword } from "./Pages/User/ResetPassword"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {ProtectedRoute} from "protected-route-react"

function App() {

  window.addEventListener("contextmenu",(e)=>(
    e.preventDefault()
  ))

  const {isAuthenticated,user,message,error,loading} = useSelector(State=>State.user);

  const dispatch = useDispatch();
  useEffect(()=>{
  
    if(error){
      toast.error(error);
      dispatch({type:"clearError"});
    }
  
    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"});
    }
  },[dispatch,error,message]);
  

  return (
   <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} user={user}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cloths" element={<Cloths/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/login" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                                           <Login/>
                                        </ProtectedRoute>}/>
          <Route path="/register" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                                            <Register/>
                                          </ProtectedRoute>}/>
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
