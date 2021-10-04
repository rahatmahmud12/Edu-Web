import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/eduweb.png'
import './Header.css';

const Header = () => {


    return (
        <div className="flex header">

            <img src={img}></img>
            <div className="link-all">
                <NavLink className="link font-semibold text-2xl" to="/home">Home</NavLink>
                <NavLink className="link font-semibold text-2xl" to="/about">About</NavLink>
                <NavLink className="link font-semibold text-2xl" to="/services">Service</NavLink>
                <NavLink className="link font-semibold text-2xl" to="/events">Events</NavLink>
            </div>
        </div>
    );
};

export default Header;