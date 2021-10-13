import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <h2>Please Log in</h2>
            <button className="btn-primary">Google Sign In</button>
            <br />
            <Link to ="/register">New User?</Link>
        </div>
    );
};

export default Login;