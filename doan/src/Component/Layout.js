import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ()=>{
    return(
            <>
            <Header/>
            {
                
            }
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout;