//import router
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
//import map
import Map from './Map';
//import login
import Login from './Login';
import Signup from './Signup';
// import React, { useState } from 'react';

const App = () => {
  const [username, setUserName] = useState();
  const [fetchData, setFetchData] = useState(null);

  // const [token, setToken] = useState();

  // if(!token) return <Login setToken={setToken} />

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login setFetchData={setFetchData} />
        </Route>
        <Route path="/Map" component={Map} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </Router>
  );
};

export default App;
