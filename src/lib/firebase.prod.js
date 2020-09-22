import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// // Initialize Firebase
const config = {
  apiKey: process.env.REACT_APP_NETFLIX_API_KEY,
  authDomain: process.env.REACT_APP_NETFLIX_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_NETFLIX_DATABASE_URL,
  projectId: process.env.REACT_APP_NETFLIX_PROJECT_ID,
  storageBucket: process.env.REACT_APP_NETFLIX_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_NETFLIX_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_NETFLIX_APP_ID
};


const firebase = Firebase.initializeApp(config);

export { firebase };

