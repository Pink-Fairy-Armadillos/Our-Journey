import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Map from './Map';
import Login from './Login';
import Signup from './Signup';

const App = ({ history }) => {
  const [fetchedData, setFetchedData] = useState(null);

  const appEntry = async (endpoint, userInput = {}, method = 'POST') => {
    const fetchedData = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInput),
    });
    return fetchedData.json();
  };

  useEffect(() => {
    !fetchedData && console.error('fetch error: display something to the user')
  }, [fetchedData])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Signup appEntry={appEntry} setFetchedData={setFetchedData} />
        </Route>
        <Route exact path="/login">
          <Login appEntry={appEntry} setFetchedData={setFetchedData} />
        </Route>
        <Route path="/map">
          <Map userData={fetchedData} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
