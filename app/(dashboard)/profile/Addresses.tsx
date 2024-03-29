"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { addNewAddress } from "@/app/services/authService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import locationIcon from "@/public/icons/location-plus-svgrepo-com.svg";
import multiplyIcon from "@/public/icons/multiply-svgrepo.svg";
import dotsIcon from "@/public/icons/dots-vertical-svgrepo-com.svg";
import cityIcon from "@/public/icons/city-svgrepo-com.svg";
import homeIcon from "@/public/icons/home-2-svgrepo-com.svg";
import phoneIcon from "@/public/icons/phone-alt3-svgrepo-com.svg";
import personIcon from "@/public/icons/person-male-svgrepo-com(1).svg";
import trashIcon from "@/public/icons/trash-alt-svgrepo-com(1).svg";
import editIcon from "@/public/icons/edit-2-svgrepo-com.svg";

export interface AddressTypes {
  name?: string;
  city?: string;
  streetName?: string;
  phoneNumber: any;
  houseNumber?: any;
}

const Addresses = ({ addresses }: { addresses: [AddressTypes] }) => {
  const [newAddress, setNewAddress] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const { mutateAsync } = useMutation({ mutationFn: addNewAddress });
  let formData: AddressTypes;
  const nameRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const houseRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formData = {
      name: nameRef.current?.value,
      city: cityRef.current?.value,
      streetName: streetRef.current?.value,
      houseNumber: houseRef.current?.value,
      phoneNumber: phoneRef.current?.value,
    };
    try {
      const { message } = await mutateAsync(formData);
      toast.success(message);
    } catch (error: any) {
      if (!error?.response) toast.error(error?.response?.data.message);
    }
  };
  return (
    <div>
      <div
        className={` fixed left-0 top-0 z-50 w-screen h-screen bg-[rgba(0,0,0,0.2)] items-center ${
          newAddress ? "flex" : "hidden"
        }`}
      >
        <div className=" w-[550px]  mx-auto bg-white relative px-4 py-10 flex gap-6">
          <Image
            src={multiplyIcon}
            alt="multiply-icon"
            className=" cursor-pointer absolute right-2 top-3  p-2 rounded-full w-9 h-9"
            onClick={() => setNewAddress(false)}
          />
          <form className=" px-10 w-full" onSubmit={submitHandler}>
            <h4 className="mb-6">New Address</h4>
            <div className="w-full">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="w-full h-9 border mt-2 border-gray-300 outline-none px-4"
                ref={nameRef}
              />
            </div>
            <div className="my-6">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                className="w-full h-9 border mt-2 border-gray-300 outline-none px-4"
                ref={cityRef}
              />
            </div>
            <div>
              <label htmlFor="streetName">Street Name</label>
              <input
                type="text"
                name="streetName"
                className="w-full h-9 border mt-2 border-gray-300 outline-none px-4"
                ref={streetRef}
              />
            </div>
            <div className="my-6">
              <label htmlFor="houseNumber">House Number</label>
              <input
                type="text"
                name="houseNumber"
                className="w-full h-9 border mt-2 border-gray-300 outline-none px-4"
                ref={houseRef}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                className="w-full h-9 border mt-2 border-gray-300 outline-none px-4"
                ref={phoneRef}
              />
            </div>
            <div className="w-full flex justify-end">
              <button
                className=" bg-orange text-white p-3 rounded-md mt-6"
                type="submit"
              >
                Add Address
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" flex justify-between items-center mb-8">
        <h4>Billing Address</h4>
        <button
          className="flex items-center border border-orange rounded-md p-3 gap-2"
          onClick={() => setNewAddress(true)}
        >
          <Image src={locationIcon} alt="location-icon" />
          <span className="text-sm font-medium text-orange">
            Add New Address
          </span>
        </button>
      </div>
      {addresses.map((address) => {
        return (
          <div className="w-full mt-2 border rounded-md p-4">
            <div className="flex justify-between items-center">
              <p className=" text-base font-medium text-gray-800">
                {address.streetName}
              </p>
              <div className="relative">
                <Image
                  src={dotsIcon}
                  alt="dots-icon"
                  className=" cursor-pointer"
                  onClick={() => setShowEdit(!showEdit)}
                />
                <div
                  className={`absolute w-[270px] z-30 right-2 top-6 rounded-md shadow-3xl py-2 ${
                    showEdit ? "block" : "hidden"
                  }`}
                >
                  <div className="flex w-full items-center justify-between px-4 py-2 hover:bg-gray-200 cursor-pointer transition-all">
                    <p className=" text-sm font-normal">Edit</p>
                    <Image src={editIcon} alt="edit-icon" />
                  </div>
                  <div className="flex w-full items-center justify-between  px-4 py-2 hover:bg-gray-200 cursor-pointer transition-all">
                    <p className=" text-sm font-normal">Remove</p>
                    <Image src={trashIcon} alt="trash-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-5 gap-2">
              <Image src={cityIcon} alt="city-icon" />
              <p className="text-sm text-gray-400">{address.city}</p>
            </div>
            <div className="flex items-center mt-5 gap-2">
              <Image src={homeIcon} alt="home-icon" />
              <p className="text-sm text-gray-400">{address.houseNumber}</p>
            </div>
            <div className="flex items-center mt-5 gap-2">
              <Image src={phoneIcon} alt="phone-icon" />
              <p className="text-sm text-gray-400">{address.phoneNumber}</p>
            </div>
            <div className="flex items-center mt-5 gap-2">
              <Image src={personIcon} alt="person-icon" />
              <p className="text-sm text-gray-400">{address.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Addresses;
