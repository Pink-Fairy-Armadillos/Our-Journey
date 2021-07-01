import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// async function loginUser(info) {

//   return fetch('/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(info)
//   }).then( data => data.json())

// }

const Login = (props) => {
  async function loginUser(info) {
    return fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    })
      .then((data) => data.json())
      .then((data) => setFetchData(data));
  }

  const setFetchData = props.setFetchData;
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handlePassword = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div>
      <form onSubmit={handlePassword}>
        <label>
          <p>User Name</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <Link to={'/Map'}>
        <button>go to map</button>
      </Link>
      <Link to={'/Signup'}>
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }

export default Login;
