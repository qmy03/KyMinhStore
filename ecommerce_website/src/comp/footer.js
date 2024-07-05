import React from "react";
import './footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <footer class="section-p1">
        <div class="col">
            <img class="logo" src="image/Logo_Brand.png" alt=""/>
            <h4>Contact</h4>
            <p><strong>Adress: </strong>12/2 Street 5, Linh Chieu, Thu Duc</p>
            <p><strong>Phone: </strong>0912992947</p>
            <p><strong>Hours: </strong>10:00 - 18:00, Mon - Sat</p>
            <div class="follow">
                <h4>Follow Us</h4>
                <div class="icon">
                    <i><FaFacebookF /></i>
                    <i><FaTwitter /></i>
                    <i><FaInstagram /></i>
                    <i><FaPinterestP /></i>
                    <i><FaYoutube /></i>
                </div>
            </div>
        </div>
        <div class="col">
            <h4>About</h4>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>
        <div class="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>
        <div class="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div class="row">
                <img src="image/pay/app-store.png" alt=""/>
                <img src="image/pay/google-play.png" alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <div class="row1">
                <img src="image/pay/payment.png" alt=""/>
            </div>
        </div>
        <div class="copyright">
            <p>© 2024 Ky Minh, All rights reserved</p>
        </div>
    </footer> 
        </>
    )
}

export default Footer