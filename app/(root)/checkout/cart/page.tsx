"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCart } from "@/app/services/cartServices";
import { getProfile } from "@/app/services/authService";
import { applyCoupon } from "@/app/services/couponServices";
import LoadingSpinner from "@/app/utils/LoadingSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { useGlobalContext } from "@/app/context/store";

const Cart = () => {
  const { cart,user } = useGlobalContext();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const couponRef = useRef<HTMLInputElement>(null);
  const { mutateAsync } = useMutation({
    mutationFn: applyCoupon,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const applyCouponHandler = async () => {
    setLoading(true);
    if (!user) {
      router.push("/auth");
      setLoading(false);
    } else {
      try {
        const data = await mutateAsync({
          coupon: couponRef.current?.value,
        });

        if (data) setLoading(false);
      } catch (error: any) {
        toast.error(error?.response?.data.message);
      }
    }
  };
 
if(!cart){
  return(<LoadingSpinner/>)
}
  if (!cart?.products ||cart?.products?.length === 0) {
    return <EmptyCart user={user} />;
  }
  if (cart?.products.length) {
    const { cartTotal, products } = cart;
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
        <CartItems products={products} />
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
                  className="border w-full p-2.5 border-gray-300 outline-none  md:w-fit"
                  ref={couponRef}
                />
                <button
                  onClick={applyCouponHandler}
                  className="bg-black text-white ml-0 mt-3 py-2.5 px-4 mr-6 transition-all duration-500 hover:bg-orange md:ml-4 md:mt-0"
                >
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
              <div
                className={`justify-between text-sm my-4 text-red-500 ${
                  cart.discount ? "flex" : "hidden"
                }`}
              >
                <p>Discount</p>
                <p className="text-base">
                  ${cart.discount && cart.discount.toFixed(2)}
                </p>
              </div>

              <div className="flex justify-between text-sm border-t border-gray-300 pt-5">
                <p>Subtotal</p>
                <p className="text-base">
                  $
                  {cart.discount
                    ? (cartTotal - cart.discount).toFixed(2)
                    : cartTotal.toFixed(2)}
                </p>
              </div>
              <div className=" w-full flex justify-end mt-4">
                <button className="bg-orange text-white text-end py-2.5 px-4 transition-all duration-500 hover:bg-black">
                  PROCEED TO CHECKOUT
                </button>
                <p className="text-3xl">{loading&& "loadingggg"}</p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer theme="dark" position="top-center" autoClose={3000} />
      </div>
    );
  }
};

export default Cart;
