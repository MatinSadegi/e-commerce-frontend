"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import emptyBasket from "@/public/icons/icons8-shopping-basket-96.png";
import loginIcon from "@/public/icons/login-svgrepo-com.svg";

const EmptyCart = ({ user }: { user: boolean }) => {
  const router = useRouter();
  return (
    <div className="max-w-[500px] md:max-w-[950px] mx-auto px-4 mt-8">
      {!user && (
        <div
          className="border border-gray-300 rounded-lg p-6 mb-6 flex items-center cursor-pointer"
          onClick={() => router.push("/auth")}
        >
          <Image src={loginIcon} alt="login-icon" />
          <p className="text-sm font-medium mx-2"> Click Here To Login</p>
        </div>
      )}
      <div className="border border-gray-300 rounded-lg flex flex-col items-center p-6">
        <Image src={emptyBasket} alt="basket" />
        <p className=" text-xl font-medium my-2">Your Cart Is Empty!</p>
      </div>
    </div>
  );
};

export default EmptyCart;
