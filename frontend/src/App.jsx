import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./Pages/Home"
import { Navbar } from "./Layout/Navbar"
import { Footer } from "./Layout/Footer"
import { Cloths } from "./Pages/Cloths"
import { Product } from "./Pages/Product-details"
import { Login } from "./Pages/Login"

function App() {

  return (
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cloths" element={<Cloths/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
   </BrowserRouter>
  )
}

export default App
