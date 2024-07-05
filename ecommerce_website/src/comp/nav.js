import React, { useState } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { AiOutlineSearch, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { FaUserAlt, FaBars } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import './nav.css';

const Nav = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <>
            <section id='header'>
                <div className='top_header'>
                    <div className='mobile' onClick={toggleNav}>
                        <FaBars />
                    </div>
                    <div className={`nav ${showNav ? 'show' : ''}`}>
                        <a href="#" className="close" onClick={toggleNav}><IoClose /></a>
                        <ul>
                            <li><Link to='/' className='link'>Home</Link></li>
                            <li><Link to='/shop' className='link'>Shop</Link></li>
                            <li><Link to='/blog' className='link'>Blog</Link></li>
                            <li><Link to='/about' className='link'>About</Link></li>
                            <li><Link to='/contact' className='link'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='logo'>
                        <Link to="/"><img src='image/Logo_Brand.png' alt='logo' /></Link>
                    </div>
                    <div className='nav2'>
                        <div className='search_box'>
                            <input type='text' value='' placeholder='search'></input>
                            <button><AiOutlineSearch /></button>
                        </div>
                        <ul>
                            <li><Link to='/cart' className='link'><FaCartPlus /></Link></li>
                        </ul>
                        {
                            isAuthenticated ?
                                <div className='user'>
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><AiOutlineLogout /></button>
                                </div>
                                :
                                <div className='user'>
                                    <button onClick={() => loginWithRedirect()}><AiOutlineLogin /></button>
                                </div>
                        }
                    </div>
                </div>
                <div className='last_header'>
                    <div className='user_profile'>
                        {
                            isAuthenticated ?
                                <>
                                    <div className='icon'>
                                        <FaUserAlt />
                                    </div>
                                    <div className='info'>
                                        <h2>{user.name}</h2>
                                        <p>{user.email}</p>
                                    </div>
                                </>
                                :
                                <>
                                    <div className='icon'>
                                        <FaUserAlt />
                                    </div>
                                    <div className='info'>
                                        <h6>Please Login</h6>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nav;
