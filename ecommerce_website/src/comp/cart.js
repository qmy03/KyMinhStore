import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Cart = ({ cart, setCart }) => {
    //Increase Quantity of cart product
    const incqty = (product) =>
    {
        const exist = cart.find((x) =>
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => 
        {
            return curElm.id === product.id ? {...exist, qty: exist.qty + 1} : curElm
        }))
    }
    const decqty = (product) =>
        {
            const exist = cart.find((x) =>
            {
                return x.id === product.id
            })
            setCart(cart.map((curElm) => 
            {
                return curElm.id === product.id ? {...exist, qty: exist.qty - 1} : curElm
            }))
        }
    // Removing cart product
    const removeproduct = (product) =>
    {
        const exist = cart.find((x) =>
        {
            return x.id === product.id
        })
        if(exist.qty > 0)
        {
            setCart(cart.filter((curElm) => 
            {
                return curElm.id !== product.id
            }))
        }
    }
    return (
        <>
            <div id="page-header" className="cart-header">
                <h2>#cart</h2>
                <p>Add your coupon code & SAVE up to 70%!</p>
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
                        {
                            cart.map((curElm) => {
                                return (
                                    <tr key={curElm.id}>
                                        <td><li onClick={() => removeproduct(curElm)}><IoClose/></li></td>
                                        <td><img src={curElm.image} alt={curElm.Name} /></td>
                                        <td>{curElm.cat} <br/> <br/>{curElm.Name} <br /><br />Color: {curElm.color}</td>
                                        <td>{curElm.price} VND</td>
                                        <td>
                                            <button onClick={() => incqty (curElm)}>+</button>
                                            <input type="number" value={curElm.qty} readOnly='' />
                                            <button onClick={() => decqty (curElm)}>-</button>
                                        </td>
                                        <td>{curElm.price * curElm.qty} VND</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div id="cart-add" className="section-p1">
                <div id="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter Your Coupon" />
                        <button className="normal">Apply</button>
                    </div>
                </div>
                <div id="subtotal">
                    <h3>Cart Totals</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>{cart.reduce((acc, curElm) => acc + (curElm.price * curElm.qty), 0)} VND</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>{cart.reduce((acc, curElm) => acc + (curElm.price * curElm.qty), 0)} VND</strong></td>
                        </tr>
                    </table>
                    <button className="normal">Proceed to checkout</button>
                </div>
            </div>
        </>
    )
}

export default Cart;
