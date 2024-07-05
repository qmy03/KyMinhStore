import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <>
        <div id="page-header" className="about-header">
            <h2>#let's_talk</h2>
            <p>LEAVE A MESSAGE. We love to hear from you!</p>
        </div>

        <div id="contact-details" className="section-p1">
            <div className="details">
                <span>GET IN TOUCH</span>
                <h2>Visit one of our agency locations or contact us today</h2>
                <h3>Head Office</h3>
                <div>
                    <li>
                        <i className="fal fa-map"></i>
                        <p>12/2 Street 5, Linh Chieu, Thu Duc</p>
                    </li>
                    <li>
                        <i className="fal fa-envelope"></i>
                        <p>nguyenquynhmy.qng03@gmail.com</p>
                    </li>
                    <li>
                        <i className="fal fa-phone-alt"></i>
                        <p>0912992947</p>
                    </li>
                    <li>
                        <i className="fal fa-clock"></i>
                        <p>Monday to Saturday: 10.00am to 18.00pm</p>
                    </li>
                </div>
            </div>
            <div className="map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1528.240845630876!2d106.76601970939909!3d10.854473489069724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175279eec3907a9%3A0xe6fc79f029c7d405!2zMTIsIDEyIFPhu5EgNSwgTGluaCBDaGnhu4N1LCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1718375592318!5m2!1svi!2s" 
                    width="600" 
                    height="450" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

        </div>

        <div id="form-details">
            <form action="">
                <span>LEAVE A MESSAGE</span>
                <h2>We love to hear from you</h2>
                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Subject"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <button className="normal">Submit</button>
            </form>
            <div className="people">
                <div>
                    <img src="image/people/1.png" alt=""/>
                    <p><span>Quynh My</span><br/>Senior Marketing Manager <br/> Phone: +84 912 992 947 <br/> Email: nguyenquynhmy.qng03@gmail.com</p>
                </div>
                <div>
                    <img src="image/people/2.png" alt=""/>
                    <p><span>Phuong Anh</span><br/>Senior Marketing Manager <br/> Phone: +84 123 789 456 <br/> Email: phuonganh.qng03@gmail.com</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;
