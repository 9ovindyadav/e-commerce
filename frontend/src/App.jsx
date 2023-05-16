import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./Pages/Home"
import { Navbar } from "./Layout/Navbar"
import { Footer } from "./Layout/Footer"

function App() {

  return (
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
   </BrowserRouter>
  )
}

export default App
