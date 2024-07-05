import React from "react";
import "./about.css";

const About = () => {
    return (
        <>
        <section id="page-header" class="about-header">
            <h2>#KnowUs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
        </section>
        <div id="about-head" class="section-p1">
            <img src="image/about/about2.png" alt=""/>
            <div>
                <h2>Who We Are?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incidiunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <abbr title="">Create stunning images with as much or as little
                    control as you like thanks to a choice of Basic and Creative modes.
                </abbr>
                <br/><br/>
                <marquee bgcolor="#CCC" loop="-1" scrollamount="5" width="100%">Create stunning images with as much or as little
                    control as you like thanks to a choice of Basic and Creative modes.</marquee>
            </div>
        </div>

        <section id="about-app" class="section-p1">
            <h1>Download Our <a href="#">App</a></h1>
            <div class="video">
                <video autoplay muted loop src="image/about/about3.mp4"></video>
            </div>
        </section>

        <section id="feature" class="section-p1">
            <div class="fe-box">
                <img src="image/feature/free-shipping.png" alt=""/>
                <h6>Free Shipping</h6>
            </div>
            <div class="fe-box">
                <img src="image/feature/oder-online.png" alt=""/>
                <h6>Online Order</h6>
            </div>
            <div class="fe-box">
                <img src="image/feature/support.png" alt=""/>
                <h6>F24/7 Support</h6>
            </div>
        </section>
        </>
    )
}

export default About