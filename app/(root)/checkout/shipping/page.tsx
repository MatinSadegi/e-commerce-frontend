"use client";
import Link from "next/link";
import React, { useState } from "react";
import BillingDetails from "./BillingDetails";
import Order from "./Order";

const Shipping = () => {
  const [showBox, setShowBox] = useState(false);
  return (
    <div className=" max-w-[500px] md:max-w-[950px] mx-auto px-4">
      <div className="text-sm mb-9">
        <Link
          href="/"
          className=" text-gray-400 transition-all hover:text-orange"
        >
          Home
        </Link>
        <span className=""> / Shipping</span>
      </div>
      <div>
        <div className="border-t-2 border-orange relative overflow-hidden">
          <p className="bg-gray-100 p-5 ">
            Returning customer ?
            <span
              className=" text-orange cursor-pointer"
              onClick={() => setShowBox(!showBox)}
            >
              Click here to enter you code
            </span>
          </p>
          <div className={`   transition-all  ${showBox ? 'h-20 mt-5' : 'h-0 m-0'} `}>
            <div className="border border-gray-300 p-5 md:pr-0 ">
              <input
                type="text"
                placeholder="Coupon code"
                className="border w-full p-2.5 border-gray-300 md:w-fit"
              />
              <button className="bg-black text-white ml-0 mt-3 py-2.5 px-4 mr-6 transition-all duration-500 hover:bg-orange md:ml-4 md:mt-0">
                APPLY COUPON
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-6 mt-12 md:flex-row md:items-start text-gray-500">
        <BillingDetails />
        <Order />
      </div>
    </div>
  );
};

export default Shipping;
