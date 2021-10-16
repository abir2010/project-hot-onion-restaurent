import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router";

const CheckOut = () => {
  const [orderItem, setOredrItem] = useState(1);
  const history = useHistory();
  const plusBTN = () => {
    setOredrItem(orderItem + 1);
  };
  const minusBTN = () => {
    if (orderItem <= 1) {
      return;
    }
    setOredrItem(orderItem - 1);
  };
  const handlePlaceOrder = () => {
      history.push("/delivery");
  }
  return (
    <div>
      <section className="my-8">
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
          <div className=" flex flex-col items-center mx-12 lg:mx-0">
            <form
              novalidate=""
              action=""
              className="w-96 space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div>
                <p className="mb-2 text-xl font-bold">Edit Delivery Details</p>
                <hr />
              </div>
              <div className="space-y-1 text-sm">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Delivery option"
                  className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
                />
              </div>
              <div className="space-y-1 text-sm">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Flat no."
                  className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
                />
              </div>
              <div className="space-y-1 text-sm">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Street or Road"
                  className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
                />
              </div>
              <div className="space-y-1 text-sm">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Business name"
                  className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
                />
              </div>
              <div className="space-y-1 text-sm">
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Add delivery instructor"
                  className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
                />
              </div>
              <button className="bg-red-500 text-white rounded-md block w-full p-3 text-center rounded-sm dark:text-coolGray-900 dark:bg-violet-400">
                Save & Continue
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
            <p className="text-sm">
              From <span className="font-bold">Gulshan Plaza Restaura GPR</span>
            </p>
            <p className="text-sm">Arriving in 20-30 min</p>
            <p className="text-sm">107 Rd no. 8</p>
            <div className="flex gap-4 mt-4">
              <img
                width="100px"
                src="https://i.ibb.co/KN23DZK/breakfast1.png"
                alt=""
              />
              <div className="mt-4">
                <p className="text-sm">Butter Naan</p>
                <p className="font-bold text-red-500">$ 40</p>
                <p className="text-sm text-gray-600">Delivery free</p>
              </div>
              <div className="flex gap-4 text-sm border-b-2 px-4">
                <button onClick={minusBTN}>
                  <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </button>
                <span className="mt-9">{orderItem}</span>
                <button onClick={plusBTN}>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </button>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <img
                width="100px"
                src="https://i.ibb.co/Bc8tdrX/breakfast3.png"
                alt=""
              />
              <div className="mt-4">
                <p className="text-sm">Butter Naan</p>
                <p className="font-bold text-red-500">$ 40</p>
                <p className="text-sm text-gray-600">Delivery free</p>
              </div>
              <div className="flex gap-4 text-sm border-b-2 px-4">
                <button onClick={minusBTN}>
                  <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </button>
                <span className="mt-9">{orderItem}</span>
                <button onClick={plusBTN}>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </button>
              </div>
            </div>
            <p>
              Subtotal : <span></span>
            </p>
            <button onClick={handlePlaceOrder} className="mt-8 bg-red-500 text-white rounded-md block w-72 p-3 text-center rounded-sm dark:text-coolGray-900 dark:bg-violet-400">
              Place Order
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
