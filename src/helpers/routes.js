import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/*
 * If there is a user return the loggingInPath,
 * if is not a user return children(like SignIn, SignUp Page)
 */

export function IsUserRedirect({ user, loggInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

/**
 * If I have a ProtectedRoute on the Browse Page
 *  and the user is logged in return children(Browse Page)
 */

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}
