import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
      return () => {
        listen()
      }
    });
  }, []);
  function userSignUp() {
      signOut(auth)
      .then(() => console.log("succes"))
      .catch((error) => console.log(error));
  }
  return <div>
    {
        authUser ? (<div><p>{`sign in as ${authUser.email}`}</p><button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={userSignUp}>signOut</button></div>) : <p>signed Out </p>
    }
  </div>;
};

export default AuthDetails;
