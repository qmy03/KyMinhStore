import React, { useState } from "react";
import Nav from "./comp/nav";
import {BrowserRouter} from 'react-router-dom'
import Rout from "./comp/rout";
import Footer from "./comp/footer";
import Homeproduct from "./comp/home_product";
import Home from "./comp/home";

const App = () => {
  //Shop Page product
  const[shop, setShop]=useState(Homeproduct)
  //Shop category filter
  const Filter = (x) =>
    {
      const catefilter=Homeproduct.filter((product) =>
      {
        return product.cat === x
      })
      setShop(catefilter)
    }
  return (
    <>
    <BrowserRouter>
    <Nav/> 
    <Rout shop={shop} Filter={Filter}/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App