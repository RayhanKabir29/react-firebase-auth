import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

import './Header.css';

const Header = () => {
    const {user, handleLogOut} = useAuth();

    return (
        <div className="header-container">
            <NavLink to ="/home">Home</NavLink>
            <NavLink to ="/shipping">Shipping</NavLink>
            <NavLink to ="/login">Log in</NavLink>
            <NavLink to="/register">Register</NavLink>
            {user?.email &&<button onClick={handleLogOut} className="btn-danger">Log out</button>}
        </div>
    );
};

export default Header;