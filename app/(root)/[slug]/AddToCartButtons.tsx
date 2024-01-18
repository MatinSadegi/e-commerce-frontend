"use client";
import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addToCart } from "@/app/services/cartServices";
import useDropdown from "@/app/hooks/useDropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddToCartProps {
  inStock: any;
  productId: string;
}

const AddToCartButtons = ({ inStock, productId }: AddToCartProps) => {
  const dropDownItems = Object.keys(inStock).map((key) => ({
    [key]: inStock[key],
  }));
  const { mutateAsync } = useMutation({ mutationFn: addToCart });
  const [state, ListDropdown] = useDropdown("sm", dropDownItems);
  const [addToCartItems, setAddToCartItems] = useState({
    id: productId,
    count: 1,
    size: state,
  });

  useEffect(() => {
    setAddToCartItems({ ...addToCartItems, size: state });
  }, [state]);

  const addToCartHandler = async () => {
    if (addToCartItems.count > inStock[addToCartItems.size + ""]) {
      toast.error("out of stock");
    } else {
      try {
        const data = await mutateAsync(addToCartItems);
        toast.success(data);
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
      <div className="flex gap-4 items-center w-full mt-4">
        <p className=" text-sm font-bold">Quantity</p>
        <input
          type="number"
          className=" border p-3 w-16 border-gray-300 rounded outline-gray-500 outline-offset-1"
          defaultValue={1}
          min={0}
          max={inStock[state + ""]}
          onChange={(e) => {
            setAddToCartItems({ ...addToCartItems, count: +e.target.value });
          }}
        />
        <button
          className=" bg-black text-white p-3.5 text-center w-[190px] rounded transition-all duration-500 hover:bg-orange"
          onClick={addToCartHandler}
        >
          ADD TO CART
        </button>
      </div>
      <ToastContainer theme="dark" position="top-center" autoClose={3000} />
    </div>
  );
};

export default AddToCartButtons;
