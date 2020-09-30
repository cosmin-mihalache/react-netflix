import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

/**
 * useEffect will run once on every hit on the page and checks for auth of a user then cleans up.
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
