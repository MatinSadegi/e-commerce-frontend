"use client";
import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getCart, removeProductFromCart } from "@/app/services/cartServices";
import multiplyIcon from "@/public/icons/multiply-svgrepo.svg";
import { CartType } from "@/app/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

interface TotalCountProps {
  setTotalCount: React.Dispatch<React.SetStateAction<number>>;
  showCart: boolean;
}

const CartQuickView = ({ setTotalCount, showCart }: TotalCountProps) => {
  const route = useRouter();
  const { mutateAsync } = useMutation({ mutationFn: removeProductFromCart });
  const { data,isSuccess } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
  let total = 0;
  useEffect(() => {
    setTotalCount(total);
  }, [total, isSuccess]);

  const removeHandler = async (product: any): Promise<void> => {
    console.log(product);
    try {
      const { message } = await mutateAsync(product);
      toast.success(message);
    } catch (error: any) {
      console.log(error);
    }
  };
  if (isSuccess)
    return (
      <div
        className={`absolute text-black right-0 bg-white shadow-2xl rounded transition-all overflow-hidden ${
          showCart ? "opacity-100 w-[330px]" : "w-0 opacity-0"
        }`}
      >
        <div className="px-5">
          {data.products.map((item: CartType) => {
            total += item.count;
            return (
              <div
                key={item._id}
                className="flex border-b border-gray-300 py-5 items-start justify-between"
              >
                <Image
                  src={item.product.image.url}
                  alt="product-image"
                  width={70}
                  height={70}

                />
                <div className=" mt-1">
                  <p className=" font-medium text-gray-600">
                    {item.product.title}
                  </p>
                  <p className="text-gray-500">
                    {item.count} &#215; ${item.product.price}
                  </p>
                </div>
                <Image
                  src={multiplyIcon}
                  alt="multiply-icon"
                  className=" cursor-pointer"
                  onClick={(e: any) => removeHandler(item._id)}
                />
              </div>
            );
          })}
          <div className=" my-6">
            <div className="flex justify-between">
              <p className="text-gray-500">Sub-Total :</p>
              <p className="text-black font-medium text-sm">
                ${data.cartTotal.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between mt-3">
              <p className="text-gray-500">Total :</p>
              <p className=" text-orange font-semibold text-base">
                ${(data.cartTotal + 5).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="mb-5">
            <button
              className=" text-center w-full p-3 bg-gray-100 border border-gray-300 rounded transition-all duration-500 hover:bg-neutral-900 hover:text-white"
              onClick={() => route.push("/checkout/cart")}
            >
              View Cart
            </button>
            <button
              className=" text-center mt-5 w-full p-3 bg-gray-100 border border-gray-300 rounded transition-all duration-500 hover:bg-neutral-900 hover:text-white"
              onClick={() => route.push("/checkout/shipping")}
            >
              Checkout
            </button>
          </div>
        </div>
        <ToastContainer theme="dark" position="top-center" autoClose={3000} />
      </div>
    );
};

export default CartQuickView;
