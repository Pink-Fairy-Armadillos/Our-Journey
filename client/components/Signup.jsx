import React, { useState } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

const Signup = ({ appEntry, setFetchedData, history }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const user = await appEntry('/signup', { name, username, password });
    setFetchedData(user)
    history.push('/map')
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          <p>Name</p>
        </label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>
          <p>User Name</p>
        </label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label>
          <p>Password</p>
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/login">Already have an account?</Link>
    </div>
  );
};

export default withRouter(Signup);
