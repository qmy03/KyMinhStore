import React from "react";
import { Routes, Route } from "react-router";
import Home from "./home";
import Shop from "./shop";
import Blog from "./blog";
import About from "./about";
import Contact from "./contact";
import Cart from "./cart";
const Rout = ({shop, Filter}) => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop' element={<Shop shop={shop} Filter={Filter}/>}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
        </>
    )
}

export default Rout