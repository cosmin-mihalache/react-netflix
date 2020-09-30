import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, SignIn, SignUp, Browse } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

/*
 * Remove the initial Route because they
 * are coming now from ./helpers/routes
 * PLay with const user = null / {}
 */

function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact
        >
          <SignIn />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact
        >
          <SignUp />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect
          user={user}
          loggInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
