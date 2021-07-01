import React, { useState } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

const Login = ({ appEntry, setFetchedData, history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const user = await appEntry('/login', { username, password })
    setFetchedData(user)
    history.push('/map')
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          <p>User Name</p>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <Link to='/' >
        Don't have an account?
      </Link>
    </div>
  );
};

export default withRouter(Login);
