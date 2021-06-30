import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
        <Link to = {'/Map'}>
            <button>go to map</button>
        </Link>
        </div>
    )
};

export default Login;