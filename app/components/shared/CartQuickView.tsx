"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid"; 
import { useMutation } from "@tanstack/react-query";
import { removeProductFromCart } from "@/app/services/cartServices";
import multiplyIcon from "@/public/icons/multiply-svgrepo.svg";
import { CartType } from "@/app/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { useGlobalContext } from "@/app/context/store";

const CartQuickView = ({ showCart }: { showCart: boolean }) => {
  const route = useRouter();
  const { cart } = useGlobalContext();
  const { mutateAsync } = useMutation({ mutationFn: removeProductFromCart });

  const removeHandler = async (product: any): Promise<void> => {
    try {
      const { message } = await mutateAsync(product);
      toast.success(message);
    } catch (error: any) {
      console.log(error);
    }
  };
  if (cart.cartTotal > 0)
    return (
      <div
        className={`absolute text-black right-0 bg-white shadow-2xl rounded transition-all overflow-hidden ${
          showCart ? "opacity-100 w-[330px]" : "w-0 opacity-0"
        }`}
      >
        {cart.cartTotal > 0 ? (
          <div className="px-5">
            {cart.products?.map((item: Partial<CartType>) => {
              const randomId = uuidv4()
              return (
                <div
                  key={randomId}
                  className="flex border-b border-gray-300 py-5 items-start justify-between"
                >
                  <Image
                    src={item.image?.url}
                    alt="product-image"
                    width={70}
                    height={70}
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
                    onClick={(e: any) => removeHandler(item._id)}
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
        ) : (
          <div>no products</div>
        )}

        <ToastContainer theme="dark" position="top-center" autoClose={3000} />
      </div>
    );
};

export default CartQuickView;
