"use client";
import Link from "next/link";
import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Addresses from "./Addresses";
import AccountDetails from "./AccountDetails";
import Logout from "./Logout";

const Profile = () => {
  const profileItems = [
    "Dashboard",
    "Orders",
    "Addresses",
    "Account Details",
    "Logout",
  ];
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  return (
    <div className=" max-w-[1200px] mx-auto mt-10">
      <div className="text-sm mb-9">
        <Link
          href="/"
          className=" text-gray-400 transition-all hover:text-orange"
        >
          Home
        </Link>
        <span className=""> / My Account</span>
      </div>
      <div className="flex">
        <div className="w-1/4 flex flex-col pr-5 gap-2">
          {profileItems.map((item: string) => {
            return (
              <button
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
        <div className="w-3/4 p-2">
          {selectedItem === "Dashboard" ? (
            <Dashboard setSelectedItem={setSelectedItem} />
          ) : selectedItem === "Orders" ? (
            <Orders />
          ) : selectedItem === "Addresses" ? (
            <Addresses />
          ) : selectedItem === "Account Details" ? (
            <AccountDetails />
          ) : (
            <Logout />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
