import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

/**
 * By passing the target, lets the user to decide what he wants
 * between movies and series
 * Use the firebase methods, capture the data and add an ID(docId)
 */
export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [firebase, target]);

  return { [target]: content };
}
