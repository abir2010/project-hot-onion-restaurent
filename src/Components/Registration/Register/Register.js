import React from 'react';
import { NavLink } from "react-router-dom";
import loginImg from "../../../images/logo2.png";

const Register = () => {
    return (
        <div className="flex justify-center">
      <div className="m-8 w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-coolGray-900 dark:text-coolGray-100">
        <div className="flex justify-center mb-16">
          <img width="200px" src={loginImg} alt="" />
        </div>
        <form
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
            />
          </div>
          <button className="bg-red-500 text-white rounded-md block w-full p-3 text-center rounded-sm dark:text-coolGray-900 dark:bg-violet-400">
            Sign up
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 dark:text-coolGray-400">
          Already have an account?
          <NavLink to="/login" className="underline dark:text-coolGray-100">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
    );
};

export default Register;