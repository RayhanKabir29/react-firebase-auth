import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

import './Login.css'

const Login = () => {
    const {signInGoogle} = useAuth();
    return (
        <div>
            <h2>Please Log in</h2>
            <button onClick={signInGoogle} className="btn-primary">Google Sign In</button>
            <br />
            <Link to ="/register">New User?</Link>
        </div>
    );
};

export default Login;