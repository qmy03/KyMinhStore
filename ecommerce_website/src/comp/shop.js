import React, { useState } from "react";
import './shop.css';

import { FaStar } from "react-icons/fa6";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
    //Toggle Product Detail
    const [showDetail, setShowDetail]=useState(false)
    // Detail Page Data
    const [detail, setDetail]=useState([])
    //Showing Detail Box
    const detailpage = (product) =>
    {
        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        // console.log(productdetail)
        setDetail(productdetail)
        setShowDetail(true)
    }
    const closedetail = () =>
    {
        setShowDetail(false)
    }
    return (
        <>
        {
            showDetail ?
            <>
            <div className="product_detail">
                <button className='close_btn' onClick={closedetail}><IoClose /></button>
                <div className="container">
                    <div className="img_box">
                        <img src={detail.image} alt =""></img>
                    </div>
                    <div class="single-pro-details">
                        <h6>Home / {detail.cat}</h6>
                        <h2>{detail.Name}</h2>
                        <div><h4>{detail.price} VND</h4></div>
                        <hr/>
                        <h5>Color: {detail.color}</h5>
                        <select>
                            <option>Select Size</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                        <input type="number" value="1"/>
                        <button class="normal">Add To Cart</button>
                        <h4>Product Details</h4>
                        <span>POP MART DIMOO WORLD</span>
                        <br/>
                        <span class="justified">Created by artist AYAN, the little boy DIMOO likes to travel through various kinds of mysterious and fantastic worlds. This time he comes to the world of Animal Kingdom and becomes good friends with unicorns, pandas and other kinds of cute animals. This collection is inspired by POP MART's latest DIMOO Animal Kingdom toy collection and other artworks of AYAN. The t-shirts feature exclusive designs with additional animal elements.</span>
                    </div>
                </div>
            </div>   
       
            </>
            : null
        }
        <section id="page-header">
                <h2>#stayhome</h2>
                <p>Save more with coupons & up to 70% off! </p>
            </section>
        <section id='shop' className="section-p1">
            <div className="container">
                <div className="left_box">
                    <div className="category">
                        <div className="header">
                            <h4>All categories</h4>
                        </div>
                        <div className="box" >
                            <ul>
                                <li onClick={() => allcatefilter ()}># All</li>
                                <li onClick={() => Filter ("T-Shirts")}># T-Shirts</li>
                                <li onClick={() => Filter ("Pants")}># Pants</li>
                                <li onClick={() => Filter ("Accessories")}># Accessories</li>
                            </ul>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="img_box">
                            <img src="image/banner/banner10.jpg" alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="right_box">
                    <div id='product1'>
                    <h2>Featured Products</h2>
                    <p>Summer Collection New Morden Design</p>
                    <div className="pro-container" >
                        {
                            shop.map((curElm) => {
                                return (
                                    <div className="box" key={curElm.id} onClick={() => detailpage (curElm)}>
                                        <div className="img_box">
                                            <img src={curElm.image} alt="" />
                                        </div>
                                        <div className="des">
                                            <span>{curElm.brand}</span>
                                            <h5>{curElm.Name}</h5>
                                            <span>Color: {curElm.color}</span>
                                            <div className="star">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <h4>{curElm.price}</h4>
                                            <div className="cart-container">
                                                <button className="cart" onClick={() => addtocart(curElm)}><IoCartOutline /></button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section id="pagination" class="section-p1">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#"><i><FaLongArrowAltRight /></i></a>
        </section>
        </>
    )
}

export default Shop