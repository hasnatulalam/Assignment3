import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import Swal from "sweetalert2";

initializeAuthentication();

const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  let [response, setResponse] = useState("");

  //handle email signup and login
  //handle Email
  const handleEmail = (event) => {
    setUserEmail(event.target.value);
  };
  //handle Name
  const handleName = (event) => {
    setName(event.target.value);
  };
  //handle Password
  const handlePassword = (event) => {
    setUserPassword(event.target.value);
  };
  //update user info
  const updateUser = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  //create new user
  const register = (email, password) => {
    if (userPassword.length < 6) {
      setResponse("Password is Less than 6 character, update it!");
      return createUserWithEmailAndPassword(auth, email, password);
    } else {
      setResponse("account created successfully !");
      return createUserWithEmailAndPassword(auth, email, password);
    }
  };

  const googleProvider = new GoogleAuthProvider();

  //sign in with popup provided by google
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //logsout the user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        Swal.fire("loggedOut, See You Soon !");
      })
      .finally(() => setIsLoading(false));
  };

  //firebase observer if user is logged in or not, checking user state
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unSubscribed;
  }, []);

  // check admin role
  useEffect(() => {
    fetch(`https://serene-refuge-00088.herokuapp.com/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
}, [user?.email])

  return {
    auth,
    user,
    admin,
    signInUsingGoogle,
    signInWithEmailAndPassword,
    logOut,
    isLoading,
    setIsLoading,
    handleEmail,
    handleName,
    handlePassword,
    register,
    userEmail,
    userPassword,
    response,
    setUser,
    setResponse,
    updateUser,
  };
};

export default useFirebase;
