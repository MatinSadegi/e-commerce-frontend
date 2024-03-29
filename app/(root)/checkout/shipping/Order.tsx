"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/app/services/cartServices";
import { CartProductsType, CartType } from "@/app/types/types";

const Order = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
  console.log(data);
  if (isSuccess) {
    return (
      <div className=" w-full mt-8 md:w-1/2 md:mt-0">
        <p className=" bg-neutral-900 p-2 text-white font-medium text-base">
          YOUR ORDER
        </p>
        <div className="flex w-full bg-gray-200 text-gray-500 font-medium py-5 mt-2">
          <p className="w-1/2 text-center">Product</p>
          <p className="w-1/2 text-center">Total</p>
        </div>
        <div className="border border-b-0 border-gray-300">
          {data.products.map((item: CartProductsType) => {
            return (
              <div
                className="text-black flex border-b border-gray-300"
                key={item._id}
              >
                <p className="w-1/2 text-center font-medium py-4 border-r">
                  {item.title}
                  <span className=" font-semibold">&#215;{item.count}</span>
                </p>
                <p className="w-1/2 font-medium text-center py-4">
                  ${(item.count * item.price).toFixed(2)}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex w-full  text-gray-500  py-5 border-b border-gray-300 ">
          <p className="w-1/2 text-center font-bold ">Cart Subtotal</p>
          <p className="w-1/2 text-center font-bold">
            ${data.cartTotal.toFixed(2)}
          </p>
        </div>
        <div className="flex w-full  text-gray-500 font-medium py-5 border-b border-gray-300">
          <p className="w-1/2 text-center font-bold">Shipping</p>
          <p className="w-1/2 text-center font-bold">$5.00</p>
        </div>
        {data?.discount && (
          <div className="flex w-full  text-red-400 font-medium py-5 border-b border-gray-300">
            <p className="w-1/2 text-center font-bold">Discount</p>
            <p className="w-1/2 text-center font-bold">${data?.discount}</p>
          </div>
        )}
        <div className="flex w-full  text-gray-500 font-medium py-5 border-b border-gray-300">
          <p className="w-1/2 text-center font-bold">Order Total</p>
          <p className="w-1/2 text-center font-bold">
            ${data.discount ?  (data.cartTotal + 5 - data.discount ).toFixed(2) :  (data.cartTotal + 5 ).toFixed(2)}
           
          </p>
        </div>
        <div className=" flex justify-end">
          <button className="bg-orange mt-4 text-white text-sm font-medium py-2.5 px-4 transition-all duration-500 hover:bg-black">
            PROCEED TO PAYPAL
          </button>
        </div>
      </div>
    );
  }
};

export default Order;
