import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faBell } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import review1 from "../../../images/Image/review-1.png";
import review2 from "../../../images/Image/review-2.png";
import review3 from "../../../images/Image/review-3.png";

const Review = () => {
  return (
    <div>
      <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container p-4 mx-auto space-y-16 sm:p-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold leading-none sm:text-3xl">
              Why you choose us
            </h3>
            <div className="flex justify-center">
              <p className="max-w-2xl dark:text-coolGray-400">
                At a assumenda quas cum earum ut itaque commodi saepe rem
                aspernatur quam natus quis nihil quod, hic explicabo doloribus
                magnam neque, exercitationem eius sunt!
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <img
                alt=""
                className="rounded-lg object-cover w-96 h-64 mx-auto mb-4 bg-center rounded-sm dark:bg-coolGray-500"
                src={review1}
              />
              <div className="flex flex-col items-start text-left px-4">
                <FontAwesomeIcon className="text-3xl" icon={faTruck}></FontAwesomeIcon>
                <h4 className="text-xl font-semibold">Fast Delevery</h4>
                <p className="text-sm dark:text-coolGray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis molestiae laborum aliquid, neque sint eius ea
                  praesentium sequi dolores fugit?
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <img
                alt=""
                className="rounded-lg object-cover w-72 h-72 mx-auto mb-4 bg-center rounded-sm dark:bg-coolGray-500"
                src={review2}
              />
              <div className="flex flex-col items-start text-left pl-16">
                <FontAwesomeIcon className="text-3xl" icon={faBell}></FontAwesomeIcon>
                <h4 className="text-xl font-semibold">A Good Auto Responder</h4>
                <p className="text-sm dark:text-coolGray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias quos, debitis id incidunt obcaecati tenetur autem!
                  Culpa perspiciatis odit rerum.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <img
                alt=""
                className="rounded-lg object-cover w-96 h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-coolGray-500"
                src={review3}
              />
              <div className="flex flex-col items-start text-left px-4">
                <FontAwesomeIcon className="text-3xl" icon={faTruck}></FontAwesomeIcon>
                <h4 className="text-xl font-semibold">Home Delivery</h4>
                <p className="text-sm dark:text-coolGray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates magnam fugiat explicabo corrupti aperiam. Repellat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
