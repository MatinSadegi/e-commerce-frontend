"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Addresses from "./Addresses";
import AccountDetails from "./AccountDetails";
import Logout from "./Logout";
import { getProfile } from "../../services/authService";
import { redirect } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/app/components/shared/Header";
import Bottombar from "@/app/components/shared/Bottombar";
import LoadingSpinner from "@/app/utils/LoadingSpinner";
import editIcon from "@/public/icons/edit-3-svgrepo-com.svg";

const Profile = () => {
  const profileItems = [
    "Dashboard",
    "Orders",
    "Addresses",
    "Account Details",
    "Logout",
  ];
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const { data, isError, error, isSuccess,isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    retry: false,
  });
console.log(data, isError, error, isSuccess, isLoading);
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    redirect("/auth");
  }
  if (isSuccess)
    return ( 
      <>
        <Header />
        <div className=" max-w-[1200px] mx-auto mt-10 px-4">
          <div className="text-sm mb-9">
            <Link
              href="/"
              className=" text-gray-400 transition-all hover:text-orange"
            >
              Home
            </Link>
            <span className=""> / My Account</span>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-3/4 md:w-1/4 flex flex-col pr-5 gap-2 min-w-[250px]">
              <div className="p-3 bg-gray-100  rounded flex items-center justify-between mb-4">
                <div className="">
                  <h4> {data?.name}</h4>
                  <p className="  mt-1">{data?.email}</p>
                </div>
                <Image
                  src={editIcon}
                  alt="edit-icon"
                  className=" cursor-pointer"
                />
              </div>
              {profileItems.map((item: string) => {
                return (
                  <button
                    key={item}
                    onClick={() => setSelectedItem(item)}
                    className={`w-full text-left p-3 rounded  text-white transition-all duration-500 hover:bg-orange ${
                      selectedItem === item ? "bg-orange" : "bg-black"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <div className="w-3/4 p-2 mt-8 md:mt-0">
              {selectedItem === "Dashboard" ? (
                <Dashboard setSelectedItem={setSelectedItem} />
              ) : selectedItem === "Orders" ? (
                <Orders />
              ) : selectedItem === "Addresses" ? (
                <Addresses addresses={data?.addresses} />
              ) : selectedItem === "Account Details" ? (
                <AccountDetails name={data?.name} email={data?.email}/>
              ) : (
                <Logout />
              )}
            </div>
          </div>
          <ToastContainer theme="dark" position="top-center" autoClose={3000} />
        </div>
        <Bottombar />
      </>
    );
};

export default Profile;
