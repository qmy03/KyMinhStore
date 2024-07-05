import React from "react";
import "./cart.css";

const Cart = () => {
    return (
        <>
        <div id="page-header" className="cart-header">
            <h2>#cart</h2>
            <p>Add your coupon code & SAVE upto 70%!</p>
        </div>

        <div id="cart" className="section-p1">
            <table width="100%">
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="#"><i className="far fa-times-circle"></i></a></td>
                        <td><img src="image/products/PM_00_White.avif" alt=""/></td>
                        <td>UT POP MART T-Shirt <br/><br/>Color: 00 White</td>
                        <td>290.000 VND</td>
                        <td><input type="number" value="1"/></td>
                        <td>290.000 VND</td>
                    </tr>
                    <tr>
                        <td><a href="#"><i className="far fa-times-circle"></i></a></td>
                        <td><img src="image/products/PN_69_Navy.avif" alt=""/></td>
                        <td>UT PEANUTS T-Shirt <br/><br/>Color: 69 Navy</td>
                        <td>290.000 VND</td>
                        <td><input type="number" value="1"/></td>
                        <td>290.000 VND</td>
                    </tr>
                    <tr>
                        <td><a href="#"><i className="far fa-times-circle"></i></a></td>
                        <td><img src="image/products/PN_47_Yellow.avif" alt=""/></td>
                        <td>UT PEANUTS T-Shirt <br/><br/>Color: 47 Yellow</td>
                        <td>290.000 VND</td>
                        <td><input type="number" value="1"/></td>
                        <td>290.000 VND</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="cart-add" className="section-p1">
            <div id="coupon">
                <h3>Apply Coupon</h3>
                <div>
                    <input type="text" placeholder="Enter Your Coupon"/>
                    <button className="normal">Apply</button>
                </div>
            </div>
            <div id="subtotal">
                <h3>Cart Totals</h3>
                <table>
                    <tr>
                        <td>Cart Subtotal</td>
                        <td>870.000 VND</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>870.000 VND</strong></td>
                    </tr>
                </table>
                <button className="normal">Proceed to checkout</button>
            </div>
        </div>
        </>
    )
}

export default Cart;
