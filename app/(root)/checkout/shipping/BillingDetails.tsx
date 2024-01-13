"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/app/services/authService";
import { redirect } from "next/navigation";

const BillingDetails = () => {
      const {data,isSuccess, isError} = useQuery({
        queryKey: ["profile"],
        queryFn: getProfile,
        retry:false
      });

      if(isError){
        redirect("/auth");
      }

      if(isSuccess){
        return (
          <div className="w-full md:w-1/2 ">
            <p className=" bg-neutral-900 p-2 text-white font-medium text-base">
              BILLING DETAILS
            </p>
            <div className="flex w-full gap-4 mt-4">
              <div className="w-1/2">
                <label htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  className=" p-2.5 border border-gray-300 w-full mt-2"
                  defaultValue={data.name}
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  className=" p-2.5 border border-gray-300 w-full mt-2"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="streetAddress" className="block">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="streetAddress"
                className=" p-2.5 border border-gray-300 w-full mt-2"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="city">
                Town / City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                className=" p-2.5 border border-gray-300 w-full mt-2"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="county">
                State / County <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="county"
                className=" p-2.5 border border-gray-300 w-full mt-2"
                required
              />
            </div>
            <div className="flex mt-4 gap-4">
              <div className="w-1/2">
                <label htmlFor="phone">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  className=" p-2.5 border border-gray-300 w-full mt-2"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="emailAddress">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="emailAddress"
                  className=" p-2.5 border border-gray-300 w-full mt-2"
                  defaultValue={data.email}
                  required
                />
              </div>
            </div>
          </div>
        );
      }
};

export default BillingDetails;
