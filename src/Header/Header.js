import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <NavLink to ="/home">Home</NavLink>
            <NavLink to ="/login">Log in</NavLink>
            <NavLink to="/register">Register</NavLink>
        </div>
    );
};

export default Header;