import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import AuthDetails from "../Auth/AuthDetails";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  function logIn() {
    signInWithEmailAndPassword(auth, email, pass)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPass("");
      })
      .catch((error) => {
        console.log(error)
        setError("Токой акаунт нету")
      });
  }
  return (
    <div className="container">
      <div className="w-[400px]">
        <h1>Войти</h1>
        <input
          placeholder="email"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <input
          placeholder="pass"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          type="password"
        />
        <h1>{error}</h1>
       <button
          onClick={logIn}
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Войти
        </button>
        <Link to={"/signUp"}>
        <button 
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
          signUp
        </button>
            </Link>
      </div>
      <AuthDetails/>
    </div>
  );
};

export default SignIn;
