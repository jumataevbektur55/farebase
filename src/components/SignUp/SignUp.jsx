import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [copyPass, setCopyPass] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate()
  function register(e) {
    e.preventDefault();
    if (pass !== copyPass) {
      setError("Не совподает");
      return;
    }
    createUserWithEmailAndPassword(auth, email, pass)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setCopyPass("");
        setPass("");
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="container">
      <div className="w-[400px]">
          <h1>Create acount</h1>
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
          <input
          placeholder="copyPass"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={(e) => setCopyPass(e.target.value)}
            value={copyPass}
            type="password"
          />
          <h1>{error}</h1>
          <button onClick={register} className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Create</button>
          <button onClick={() => nav("/signIn")} className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">SignIn</button>
      </div>
    </div>
  );
};

export default SignUp;
