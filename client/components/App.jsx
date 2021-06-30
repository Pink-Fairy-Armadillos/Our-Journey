//import router
import React from 'react';
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

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Map" component={Map} />
      </Switch>
    </Router>
  );
};

export default App;
