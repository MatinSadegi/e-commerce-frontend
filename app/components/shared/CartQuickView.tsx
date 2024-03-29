"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useMutation } from "@tanstack/react-query";
import { removeProductFromCart } from "@/app/services/cartServices";
import multiplyIcon from "@/public/icons/multiply-svgrepo.svg";
import { CartType, CartProductsType } from "@/app/types/types";
import { ToastContainer, toast } from "react-toastify";
import { useGlobalContext } from "@/app/context/store";

const CartQuickView = ({ showCart }: { showCart: boolean }) => {
  const route = useRouter();
  const { cart } = useGlobalContext();
  const { mutateAsync } = useMutation({ mutationFn: removeProductFromCart });

  const removeHandler = async ({
    size,
    productId,
    count,
  }: {
    size: string;
    productId: string;
    count: number;
  }): Promise<void> => {
    try {
      const message = await mutateAsync({ size, productId, count });
      toast.success(message);
    } catch (error: any) {
      console.log(error);
    }
  };

  if (cart?.products?.length)
    return (
      <div
        className={`absolute text-black right-0 z-50 px-5 bg-white shadow-2xl rounded transition-all overflow-hidden hidden sm:block ${
          showCart ? "opacity-100 w-[330px]" : "w-0 opacity-0"
        }`}
      >
        <div className="">
          {cart.products?.map((item: CartProductsType) => {
            const randomId = uuidv4();
            return (
              <div
                key={randomId}
                className="flex border-b border-gray-300 py-5 items-start justify-between"
              >
                <Image
                  src={item.image?.url}
                  alt="product-image"
                  width={65}
                  height={65}
                />
                <div className=" mt-1">
                  <p className=" font-medium text-gray-600">{item.title}</p>
                  <p className="text-gray-500">
                    {item.count} &#215; ${item.price}
                  </p>
                </div>
                <Image
                  src={multiplyIcon}
                  alt="multiply-icon"
                  className=" cursor-pointer"
                  onClick={() =>
                    removeHandler({
                      size: item.size,
                      productId: item.productId,
                      count: item.count,
                    })
                  }
                />
              </div>
            );
          })}
          <div className=" my-6">
            <div className="flex justify-between">
              <p className="text-gray-500">Sub-Total :</p>
              <p className="text-black font-medium text-sm">
                ${cart.cartTotal.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between mt-3">
              <p className="text-gray-500">Total :</p>
              <p className=" text-orange font-semibold text-base">
                ${(cart.cartTotal + 5).toFixed(2)}
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
