import { useEffect, useState } from "react";
import initAuth from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
      }
    });
  }, []);

  return {
      user,
      error,
      signInUsingGoogle,
      logOut
  }
};

export default useFirebase;
