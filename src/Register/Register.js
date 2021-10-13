import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
           <form>
                <input type="text" name="" id="" placeholder="Your mail"/>
                <br />
                <input type="password" name="" id="" placeholder="Password" />
                <br />
                <input type="button" value="Register" />
           </form>
           <Link to="/login">Already Register?</Link>
        </div>
    );
};

export default Register;