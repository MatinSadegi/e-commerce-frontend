"use client";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "@/app/context/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "@/app/services/cartServices";
import Image from "next/image";
import multiplyIcon from "@/public/icons/multiply-svgrepo.svg";
import useDropdown from "@/app/hooks/useDropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import pinterestIcon from "@/public/icons/pinterest-v2-svgrepo-com.svg";
import facebookIcon from "@/public/icons/facebook-svgrepo-com(1).svg";
import twitterIcon from "@/public/icons/twitter-svgrepo-com.svg";
import linkedinIcon from "@/public/icons/linkedin-round-svgrepo-com.svg";

const QuickView: React.FC = () => {
  const { data, showQuickView, setShowQuickView } = useGlobalContext();
  const { title, price, image, description, quantity, _id } = data;
  let dropDownItems: any = [{ sm: 0 }, { md: 0 }, { lg: 0 }, { xl: 0 }];
  if (quantity) {
    dropDownItems = Object?.keys(quantity).map((key) => ({
      [key]: quantity[key],
    }));
  }
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  const [state, ListDropdown] = useDropdown("sm", dropDownItems);
  const [count, setCount] = useState(1);
  const [addToCartItems, setAddToCartItems] = useState({
    id: _id,
    count,
    size: state,
  });
  useEffect(() => {
    setAddToCartItems({ ...addToCartItems, size: state, count });
    setCount(1);
  }, [state]);
  useEffect(() => {
    setAddToCartItems({ ...addToCartItems, count , id:_id });
  }, [count, _id]);

  const addToCartHandler = async () => {
    if (quantity && addToCartItems.count > quantity[addToCartItems.size + ""]) {
      toast.error("out of stock");
    } else {
      try {
        await mutateAsync(addToCartItems);
      } catch (error: any) {
        toast.error(error?.response?.data.message);
      }
    }
    console.log(addToCartItems);
  };

  const imageUrl: string = image?.url!;
  return (
    <div
      className={` fixed left-0 top-0 z-50 w-screen h-screen bg-[rgba(0,0,0,0.2)] items-center ${
        showQuickView ? "flex" : "hidden"
      }`}
    >
      <div className=" w-[950px] h-[550px] mx-auto bg-white relative px-4 py-10 flex gap-6">
        <Image
          src={multiplyIcon}
          alt="multiply-icon"
          className=" cursor-pointer absolute right-2 top-3 bg-gray-300 p-2 rounded-full w-7 h-7"
          onClick={() => setShowQuickView(false)}
        />
        <div className="w-2/5 border p-3 h-fit">
          {data && image && (
            <Image
              src={imageUrl}
              alt="shoes"
              width={350}
              height={250}
              className="w-full "
            />
          )}
        </div>
        <div className="w-3/5 py-2">
          <h4>{title}</h4>
          <p className=" my-5 text-base text-orange ">${price?.toFixed(2)}</p>
          <p className=" leading-5  text-gray-500">{description}</p>
          <div className="mt-4">
            <p className=" text-base font-medium mb-1">Size</p>
            <ListDropdown />
          </div>
          <div className="flex my-8 items-center space-x-3">
            <input
              type="number"
              defaultValue={1}
              max={quantity && quantity[addToCartItems.size + ""]}
              min={1}
              className="border w-16 h-10 p-2 outline-none "
              onChange={(e) => setCount(+e.target.value)}
            />
            <button
              onClick={addToCartHandler}
              className=" w-44 h-10 p-2 bg-black text-white transition-all duration-500 hover:bg-orange"
            >
              ADD TO CART
            </button>
          </div>
          <div>
            <p className="text-base font-medium">SHARE THIS PRODUCT</p>
            <ul className="flex items-center gap-2 mt-1">
              <li>
                <Image
                  src={facebookIcon}
                  alt="facebook-icon"
                  className=" cursor-pointer"
                />
              </li>
              <li>
                <Image
                  src={twitterIcon}
                  alt="twitter-Icon"
                  className=" cursor-pointer"
                />
              </li>
              <li>
                <Image
                  src={pinterestIcon}
                  alt="pinterest-Icon"
                  className=" cursor-pointer"
                />
              </li>
              <li>
                <Image
                  src={linkedinIcon}
                  alt="linkedin-Icon"
                  className=" cursor-pointer"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" position="top-center" autoClose={3000} />
    </div>
  );
};

export default QuickView;
