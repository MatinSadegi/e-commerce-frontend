'use client'
import { useMutation } from "@tanstack/react-query";
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AccountFormTypes {
  name?:string;
  email?:string;
  password?:string;
  birthday?:string;
}

const AccountDetails = ({name,email}:{name:string, email:string}) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const birthdayRef = useRef<HTMLInputElement>(null);
    // const { mutateAsync } = useMutation({ mutationFn: addNewAddress });
    let formData: AccountFormTypes;

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      formData = {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        birthday: birthdayRef.current?.value,
      };
      try {
        // const { message } = await mutateAsync(formData);
        // toast.success(message);
      } catch (error: any) {
        if (!error?.response) toast.error(error?.response?.data.message);
      }
    };
  return (
    <div>
      <h4>Account Details</h4>
      <form onSubmit={submitHandler}>
        <div className="w-full mt-7">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="w-full h-9 border mt-2 border-gray-300 outline-none px-4"
            defaultValue={name}
            ref={nameRef}
          />
        </div>
        <div className="w-full mt-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="w-full h-9 border mt-2 border-gray-300 outline-none px-4"
            ref={emailRef}
            defaultValue={email}
          />
        </div>
        <div className="w-full mt-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="w-full h-9 border mt-2 border-gray-300 outline-none px-4"
            ref={passwordRef}
            defaultValue={123456}
          />
        </div>
        <div className="w-full mt-4">
          <label htmlFor="birthday">Birthday</label>
          <input
            type="text"
            name="birthday"
            placeholder="MM/DD/YYYY"
            className="w-full h-9 border mt-2 border-gray-300 outline-none px-4"
            ref={birthdayRef}
          />
        </div>
        <div className="w-full flex justify-end">
          <button
            className=" bg-orange text-white p-3 rounded-md mt-6"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AccountDetails