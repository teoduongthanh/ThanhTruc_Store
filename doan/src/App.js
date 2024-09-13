import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Component/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Detailproduct from "./Component/DetailProduct";
import Cart from "./Component/CartComponent/Cart";
import Login from "./Component/LoginComponent/login"
import AdminPlant from "../src/Admin/Component/AdminPlant"
import AddProductForm from "../src/Admin/Component/InsertPlant";
import AdminOrderPlant from "../src/Admin/Component/AdminOrder";
function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/admin/plants" element={ <AdminPlant/>}/>
          <Route path="/admin/AddPlant" element={ <AddProductForm/>}/>
          <Route path="/admin/OrderPlant" element={ <AdminOrderPlant/>}/>
            <Route path="/" element={ <Layout/> }> 
              <Route path="home" element={<Home/>}/>
              <Route path="shop/plant/:_id" element={<Detailproduct />} />
              <Route path="home/plant/:_id" element={<Detailproduct />} />
              <Route path="about" element={ <About/>} />
              <Route path="login" element={ <Login/>} />
              <Route path="contact" element={ <Contact/>}/>
              <Route path="shop" element={ <Shop/>}/>
              <Route path="/cart" element={<Cart />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
