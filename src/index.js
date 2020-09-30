import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

/**
 * Wrap the application with FirebaseContext
 * Renders x2 because of StrictMode
 */

ReactDOM.render(
  <React.StrictMode>
    <>
      <FirebaseContext.Provider value={{ firebase }}>
        <GlobalStyles />
        <App />
      </FirebaseContext.Provider>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
