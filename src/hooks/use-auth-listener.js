import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

/**
 * Custom hook listener/subscription to checkout the user state signin or signout(lost credentials)
 * With Json.parse check in localStorage parse that string and bring it back as a regular object
 * and gets the item 'authUser'
 * useEffect will run once on every hit of the page and checks for auth of a user then clean up
 */

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });
    // clean up the listener
    return () => listener();
  }, [firebase]);
  return {user}
}
