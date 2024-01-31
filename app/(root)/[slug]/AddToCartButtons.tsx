"use client";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToCart, getCart } from "@/app/services/cartServices";
import useDropdown from "@/app/hooks/useDropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import minusIcon from "@/public/icons/minus-svgrepo-com.svg";
import plusIcon from "@/public/icons/plus-svgrepo-com.svg";
import grayMinusIcon from "@/public/icons/minus-gray.svg";
import { useGlobalContext } from "@/app/context/store";

interface AddToCartProps {
  inStock: any;
  productId: string;
}

const AddToCartButtons = ({ inStock, productId }: AddToCartProps) => {
  const dropDownItems = Object.keys(inStock).map((key) => ({
    [key]: inStock[key],
  }));
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });

    },
  });

  const [state, ListDropdown] = useDropdown("sm", dropDownItems);
  const [quantity, setQuantity] = useState(1);
  const [addToCartItems, setAddToCartItems] = useState({
    id: productId,
    count: quantity,
    size: state,
  });
  useEffect(() => {
    setAddToCartItems({ ...addToCartItems, size: state, count: 1 });
    setQuantity(1);
  }, [state]);
  useEffect(() => {
    setAddToCartItems({ ...addToCartItems, count: quantity });
  }, [quantity]);

  const addToCartHandler = async () => {
    if (addToCartItems.count > inStock[addToCartItems.size + ""]) {
      toast.error("out of stock");
    } else {
      try {
        await mutateAsync(addToCartItems);
      } catch (error: any) {
        toast.error(error?.response?.data.message);
      }
    }
  };

  return (
    <div>
      <div className="flex w-1/2 justify-between items-center my-2">
        <p className=" text-sm font-bold">Size</p>
        <ListDropdown />
      </div>
      <div className="w-full mt-4 h-12 ">
        <div className="flex gap-4 items-center h-full">
          <p className=" text-sm font-bold">Quantity</p>
          <div className=" shadow shadow-gray-300 flex items-center h-full px-3  border-gray-300 rounded outline-gray-500 outline-offset-1">
            <Image
              src={quantity === 1 ? grayMinusIcon : minusIcon}
              alt="minus-icon"
              className=" cursor-pointer"
              onClick={() => {
                if (quantity === 1) {
                  setQuantity(1);
                } else {
                  setQuantity(quantity - 1);
                }
              }}
            />
            <span className=" px-4 font-semibold text-base text-orange">
              {quantity}
            </span>
            <Image
              src={plusIcon}
              alt="plus-icon"
              className=" cursor-pointer"
              onClick={() => {
                if (quantity === inStock[state + ""]) {
                  setQuantity(inStock[state + ""]);
                } else {
                  setQuantity(quantity + 1);
                }
              }}
            />
          </div>
          <button
            className=" bg-black h-full text-white w-40 text-center  rounded transition-all duration-500 hover:bg-orange"
            onClick={addToCartHandler}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <ToastContainer theme="dark" position="top-center" autoClose={3000} />
    </div>
  );
};

export default AddToCartButtons;
