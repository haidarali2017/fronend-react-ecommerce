import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import Home from './pages/home.jsx';
// import viteLogo from '/vite.svg'
// import './App.css'
// import {Badge} from 'react-bootstrap';
import Header from './pages/Header.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AddProduct from './pages/AddProduct.jsx';
import UpdateProduct from './pages/UpdateProduct.jsx';
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <BrowserRouter> 
      <Header/> 
      <Routes> 
          <Route path="Login"  element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="update" element={<UpdateProduct />} />
         
      </Routes>
     
      </BrowserRouter>
    </div>
  )
}

export default App
