import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import headerImg from "../../../images/logo2.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <header className="px-4 py-2 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            href="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img width="160px" src={headerImg} alt="" />
          </a>
          <div className="items-center gap-4 flex-shrink-0 hidden lg:flex">
            <FontAwesomeIcon icon={faShoppingCart} />
            {user.email ? (
              <div>
                <button
                  onClick={logOut}
                  className=" bg-red-500 text-white self-center px-8 py-3 font-semibold rounded-full dark:bg-violet-400 dark:text-coolGray-900"
                >
                  <NavLink to="/signup">Log Out</NavLink>
                </button>
              </div>
            ) : (
              <div>
                <button className="self-center px-8 py-3 rounded">
                  <NavLink to="/login">Log in</NavLink>
                </button>
                <button className=" bg-red-500 text-white self-center px-8 py-3 font-semibold rounded-full dark:bg-violet-400 dark:text-coolGray-900">
                  <NavLink to="/signup">Sign up</NavLink>
                </button>
              </div>
            )}
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-coolGray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
