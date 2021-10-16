import React from "react";
import bikeImg from "../../../images/Image/Group 1151.png";
import bikeImg2 from "../../../images/Image/Group 1152.png";

const Delivery = () => {
  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4);" }}
          ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <div className="flex justify-center">
              <img width="80px" src={bikeImg} alt="" />
            </div>
            <p className="text-sm font-bold mt-4">Your Location</p>
            <p className="text-sm">107 Rd no. 8</p>
            <p className="text-sm font-bold mt-4">Shop Adress</p>
            <p className="text-sm">Gulshan Plaza Restaura GPR</p>
            <p className="text-2xl font-bold mt-4">09:30</p>
            <p className="text-sm">Estimated delivery time</p>
            <div className="flex justify-center gap-4 mt-4">
              <img className="mt-3" width="50px" src={bikeImg2} alt="" />
              <div className="text-left">
                <p className="text-sm font-bold mt-4">Shop Adress</p>
                <p className="text-sm">Gulshan Plaza Restaura GPR</p>
              </div>
            </div>
            
            <button class="mt-4 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;
