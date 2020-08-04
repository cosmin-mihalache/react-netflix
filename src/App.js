import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <p>This is the SignIn Page</p>
        </Route>
        <Route path="/singout">
          <p>This is the SignOut Page</p>
        </Route>
        <Route path="/browse">
          <p>This is the Browse Page</p>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
