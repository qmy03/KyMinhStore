import React from "react";
import './shop.css';

import { FaStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

const Shop = ({shop}) => {
    return (
        <>
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
                        <div className="box">
                            <ul>
                                <li># T-Shirts</li>
                                <li># Pants</li>
                                <li># Accessories</li>
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
                    <div className="pro-container">
                        {
                            shop.map((curElm) => {
                                return (
                                    <div className="box" key={curElm.id}>
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
                                                <button className="cart"><IoCartOutline /></button>
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