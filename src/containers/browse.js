import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Loading } from '../components';

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log('profile', profile);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [profile.displayName]);
  console.log(user)
  return profile.displayName ? (
    loading ? (
      <Loading src={user.photoURL} />
    ) : (
      <Loading.ReleaseBody />
    )
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
