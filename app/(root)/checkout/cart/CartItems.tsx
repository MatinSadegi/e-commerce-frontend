"use client";
import React from "react";
import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart, removeProductFromCart } from "@/app/services/cartServices";
import { CartProductsType, CartType } from "@/app/types/types";
import { v4 as uuidv4 } from "uuid";

import "react-toastify/dist/ReactToastify.css";
import trashIcon from "@/public/icons/trash-alt-svgrepo-com(1).svg";
import minusIcon from "@/public/icons/minus-svgrepo-com.svg";
import plusIcon from "@/public/icons/plus-svgrepo-com.svg";

const CartItems = ({ products }: { products: CartProductsType[] }) => {
  const queryClient = useQueryClient();
  const removeMutation = useMutation({
    mutationFn: removeProductFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  const incrementMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
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
      const message = await removeMutation.mutateAsync({
        size,
        productId,
        count,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  const incrementHandler = async ({
    size,
    id,
    count,
  }: {
    size: string;
    id: string;
    count: number;
  }) => {
    try {
      const message = await incrementMutation.mutateAsync({
        size,
        id,
        count,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
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
          {products.map((item: CartProductsType) => {
            const randomId = uuidv4();
            return (
              <div
                key={randomId}
                className="text-black flex justify-center items-center border-b border-gray-300 h-32"
              >
                <span className=" w-24">
                  <Image
                    src={trashIcon}
                    alt="trash-icon"
                    className="mx-auto"
                    onClick={() =>
                      removeHandler({
                        size: item.size,
                        productId: item.productId,
                        count: item.count,
                      })
                    }
                  />
                </span>
                <Image
                  className="w-32 text-center py-4 px-6 border-l border-gray-300"
                  src={item.image.url}
                  width={150}
                  height={150}
                  alt="product-image"
                />
                <span className=" w-48 justify-center border-l border-gray-300 h-full flex items-center font-medium">
                  {item.title}
                </span>
                <span className="w-32 justify-center border-l border-gray-300 h-full flex items-center text-base font-semibold text-orange">
                  ${item.price.toFixed(2)}
                </span>
                <span className="w-24 justify-center border-l border-gray-300 h-full flex items-center font-medium">
                  {item.size}
                </span>
                <span className="w-32 justify-center border-l border-gray-300 h-full flex items-center font-medium">
                  <div className="flex">
                    <Image
                      src={minusIcon}
                      alt="minus-icon"
                      className=" cursor-pointer"
                      width={18}
                      height={18}
                      onClick={() =>
                        removeHandler({
                          size: item.size,
                          productId: item.productId,
                          count: 1,
                        })
                      }
                    />
                    <span className=" px-2 font-semibold text-sm text-orange">
                      {item.count}
                    </span>
                    <Image
                      src={plusIcon}
                      alt="plus-icon"
                      className=" cursor-pointer"
                      width={18}
                      height={18}
                      onClick={() =>
                        incrementHandler({
                          size: item.size,
                          id: item.productId,
                          count: 1,
                        })
                      }
                    />
                  </div>
                </span>
                <span className="w-36 justify-center border-l border-gray-300 h-full flex items-center text-sm font-medium">
                  ${(item.count * item.price).toFixed(2)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
