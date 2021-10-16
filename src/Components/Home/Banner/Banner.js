import React from "react";
import { NavLink } from "react-router-dom";
import bannerImg from "../../../images/bannerbackground.png";

const Banner = () => {
  return (
    <div>
      <div
        className="w-full dark:bg-gray-600"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundPosition: "center center",
          backgroundBlendMode: "multiply",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:py-28">
          <h1 className="text-4xl antialiased font-bold leading-none text-center md:text-5xl dark:text-coolGray-100">
            Best <span className="text-red-500">food</span> waiting for your
            belly
          </h1>
          <p className="pt-2 pb-8 text-xl text-red-500 antialiased text-center dark:text-coolGray-100">
            Find out your favourite food here
          </p>
          <div className="flex flex-row justify-center">
            <input
              type="text"
              placeholder="search food items"
              className="w-3/5 p-3 rounded-full sm:w-2/3"
            />
            <button
              type="button"
              className="bg-red-500 w-2/5 p-3 font-semibold rounded-full sm:w-1/4 dark:bg-violet-400 dark:text-coolGray-900"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* body part */}
      <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 ">
        <div className="container flex justify-center h-16 mx-auto">
          <ul className="items-stretch space-x-3 flex">
            <li className="flex">
              <NavLink
                to="/breakfast"
                className="flex items-center px-4 -mb-1 font-bold hover:text-red-600"
              >
                Breakfast
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/lunch"
                className="flex items-center px-4 -mb-1 font-bold hover:text-red-600"
              >
                Lunch
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/dinner"
                className="flex items-center px-4 -mb-1 font-bold hover:text-red-600"
              >
                Dinner
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Banner;
