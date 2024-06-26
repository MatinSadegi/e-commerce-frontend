"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { logout } from "@/app/services/authService";
import { useMutation } from "@tanstack/react-query";
import arrowIcon from "@/public/icons/arrow-next-small-svgrepo-com.svg";
import basketIcon from "@/public/icons/basket-loaded-svgrepo-com.svg";
import logoutIcon from "@/public/icons/logout-svgrepo-com(1).svg";
import { ToastContainer, toast } from "react-toastify";

interface UserProps {
  name: string;
  showProfile: boolean;
}
const ProfileQuickView = ({ name, showProfile }: UserProps) => {
  const router = useRouter();
  const { mutateAsync } = useMutation({ mutationFn: logout });
  const logoutHandler = async() =>{
      const { message } = await mutateAsync();
      toast.success(message);
      router.push("/");
  }
  return (
    <div
      className={`absolute text-black right-0 top-12 z-50  bg-white shadow-2xl rounded transition-all overflow-hidden sm:right-12 ${
        showProfile ? "opacity-100 w-[250px] h-[195px]" : "w-0 opacity-0 h-0"
      }`}
    >
      <div
        className="flex   justify-between items-center p-5 transition-all hover:bg-gray-100"
        onClick={() => router.push("/profile")}
      >
        <p className=" text-sm font-bold">{name}</p>
        <Image src={arrowIcon} alt="next-arrow-icon" />
      </div>
      <div className="flex items-center border-t border-gray-200  p-5 transition-all hover:bg-gray-100">
        <Image src={basketIcon} alt="basket-icon" />
        <p className=" text-sm font-semibold ml-4">Orders</p>
      </div>
      <div
        onClick={logoutHandler}
        className="flex items-center border-t border-gray-200 p-5 transition-all hover:bg-gray-100"
      >
        <Image src={logoutIcon} alt="logout-icon" />
        <p className=" text-sm font-semibold ml-4">Logout</p>
      </div>
      <ToastContainer theme="dark" position="top-center" autoClose={3000} />
    </div>
  );
};

export default ProfileQuickView;
