import React, { useEffect, useState } from "react";
import './home.css';
import { Link } from "react-router-dom";
import Homeproduct from "./home_product";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

const Home = ({addtocart}) => {
    const [newProduct, setNewProduct] = useState([]);
    const [featureProduct, setFeatureProduct] = useState([]);

    useEffect(() => {
        productcategory();
    }, []);

    const allProduct = () => {
        setFeatureProduct(Homeproduct);
    };

    const productcategory = () => {
        const newcategory = Homeproduct.filter((x) => {
            return x.type === 'new';
        });
        setNewProduct(newcategory);
        const featureProduct = Homeproduct.filter((x) => {
            return x.type === 'featured';
        });
        setFeatureProduct(featureProduct);
    };

    return (
        <>
        <div id="home">
            <div className="top_banner">
                <div id="hero">
                    <h4>Trade-in-offer</h4>
                    <h2>Super value deals</h2>
                    <h1>On all products</h1>
                    <p>Save more with coupons & up to 70% off! </p>
                    <Link to='/shop'><button>Shop Now</button></Link>
                </div>
            </div>
            <div id="feature" className="section-p1">
                <div className="fe-box">
                    <img src="image/feature/free-shipping.png" alt="" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="fe-box">
                    <img src="image/feature/oder-online.png" alt="" />
                    <h6>Online Order</h6>
                </div>
                <div className="fe-box">
                    <img src="image/feature/support.png" alt="" />
                    <h6>F24/7 Support</h6>
                </div>
            </div>
            <div id='product1' className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Morden Design</p>
                <div className="pro-container">
                    {
                        featureProduct.map((curElm) => {
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
                                            <button className="cart" onClick={() => addtocart(curElm)}><IoCartOutline /></button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div id="banner" className="session-m1">
                <h4>Repair Services </h4>
                <h2>Up to <span>70% Off</span> - All T-Shirts & Accessories </h2>
                <button className="normal">Explore More</button>
            </div>
            <div id="newproduct" className="section-p1">
                <h2>New Arrivals</h2>
                <p>Summer Collection New Morden Design</p>
                <div className="pro-container">
                    {
                        newProduct.map((curElm) => {
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
                                            <button className="cart" onClick={() => addtocart(curElm)}><IoCartOutline /></button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div id="sm-banner" className="section-p1">
                <div className="banner-box">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classic dress is on sale at kyminh</span>
                    <button className="white">Learn More</button>
                </div>
                <div className="banner-box banner-box2">
                    <h4>spring/summer</h4>
                    <h2>upcomming season</h2>
                    <span>The best classic dress is on sale at kyminh</span>
                    <button className="white">Collection</button>
                </div>
            </div>
            <div id="banner3" className="section-p1">
                <div className="banner-box">
                    <h2>PANTS</h2>
                </div>
                <div className="banner-box banner-box2" onClick={() => window.location.href = 'shop.html'}>
                    <h2>T-SHIRTS</h2>
                </div>
                <div className="banner-box banner-box3">
                    <h2>ACCESSORIES</h2>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;
