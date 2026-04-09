import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { Dashboard}  from "./pages/Dashboard"
import Product from "./pages/Product"
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element ={<Dashboard/>}/>
        <Route path="/product" element ={<Product/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
