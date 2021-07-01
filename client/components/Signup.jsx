import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    return (
        <div>
            <form>
                <label>
                    <p>Create User Name</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Create Password</p>
                    <input type="password" />
                </label>
            </form>
            <Link to={'/Map'} >
            <button type='submit'>Sign Up</button>
            </Link>
            <Link to={'/'} >
            <button type='submit'>Login</button>
            </Link>
        </div>
    );
};


export default Signup;