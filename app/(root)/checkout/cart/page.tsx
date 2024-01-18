"use client";
import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/app/services/cartServices";
import LoadingSpinner from "@/app/utils/LoadingSpinner";
import { CartType } from "@/app/types/types";
import Image from "next/image";

const Cart = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
  if (isSuccess) {
    const { cartTotal, products } = data;
    return (
      <div className=" max-w-[500px] md:max-w-[950px] mx-auto px-4">
        <div className="text-sm mb-9">
          <Link
            href="/"
            className=" text-gray-400 transition-all hover:text-orange"
          >
            Home
          </Link>
          <span className=""> / Cart</span>
        </div>
        <div className="flex w-full overflow-x-scroll lg:overflow-visible border border-gray-300">
          <div className=" flex flex-col ">
            <div className="flex bg-gray-100 h-10 items-center justify-center  border-b-2 border-b-orange text-gray-500 font-medium text-sm">
              <span className="w-24 text-center">DELETE</span>
              <span className="w-32 text-center">IMAGE</span>
              <span className=" w-48 text-center">PRODUCT</span>
              <span className="w-32 text-center">PRICE</span>
              <span className="w-24 text-center">SIZE</span>
              <span className="w-32 text-center">QUANTITY</span>
              <span className="w-36 text-center">TOTAL</span>
            </div>
            <div>
              {products.map((item: CartType) => {
                return (
                  <div
                    key={item._id}
                    className="text-black flex justify-center items-center border-b border-gray-300 h-32"
                  >
                    <span className="w-24 text-center">delete icon</span>
                    <Image
                      className="w-32 text-center py-4 px-6 border-l border-gray-300"
                      src={item.product.image.url}
                      width={150}
                      height={150}
                      alt="product-image"
                    />
                    <span className=" w-48 justify-center border-l border-gray-300 h-full flex items-center font-medium">
                      {item.product.title}
                    </span>
                    <span className="w-32 justify-center border-l border-gray-300 h-full flex items-center text-base font-semibold text-orange">
                      ${item.product.price.toFixed(2)}
                    </span>
                    <span className="w-24 justify-center border-l border-gray-300 h-full flex items-center font-medium">
                      {item.size}
                    </span>
                    <span className="w-32 justify-center border-l border-gray-300 h-full flex items-center font-medium">
                      {item.count}
                    </span>
                    <span className="w-36 justify-center border-l border-gray-300 h-full flex items-center text-sm font-medium">
                      ${(item.count * item.product.price).toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex h-16 items-center justify-end">
              <button className="bg-black text-white py-2.5 px-4 mr-4 transition-all duration-500 hover:bg-orange">
                UPDATE CART
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-4 mt-12 md:flex-row md:items-start">
          <div className="w-full md:w-1/2 ">
            <p className=" bg-neutral-900 p-2 text-white font-medium text-base">
              COUPON
            </p>
            <div className="border border-gray-300">
              <p className=" text-gray-500 my-5 pl-5">
                Enter your coupon code if you have one.
              </p>
              <div className=" px-5 md:pr-0 mb-5">
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
          <div className=" w-full mt-8 md:w-1/2 md:mt-0">
            <p className=" bg-neutral-900 p-2 text-white font-medium text-base">
              CART TOTALS
            </p>
            <div className=" font-medium p-4 border border-gray-300">
              <div className="flex justify-between text-sm">
                <p>Subtotal</p>
                <p className="text-base">${cartTotal}.00</p>
              </div>
              <div className="flex justify-between text-sm my-4">
                <p>Shipping</p>
                <p className="text-base">
                  <span className=" mr-5">Flat Rate:</span> ${cartTotal}.00
                </p>
              </div>
              <p className=" text-orange font-medium text-right mb-3">
                Calculate Shipping
              </p>
              <div className="flex justify-between text-sm border-t border-gray-300 pt-5">
                <p>Total</p>
                <p className="text-base">${cartTotal}.00</p>
              </div>
              <div className=" w-full flex justify-end mt-4">
                <button className="bg-orange text-white text-end py-2.5 px-4 transition-all duration-500 hover:bg-black">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
