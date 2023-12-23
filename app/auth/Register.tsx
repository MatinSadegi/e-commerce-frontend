"use client";
import React, { useRef } from "react";
import { FormDataTypes } from "../types/types";
import { useMutation } from "@tanstack/react-query";
import { register } from "../services/authService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const {mutateAsync} = useMutation({mutationFn:register})
  let formData: FormDataTypes;
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    try {
        const {message} = await mutateAsync(formData)
        toast.success(message)
    } catch (error:any) {
        toast.error(error?.response?.data.message);
    }
  };
  
  return (
    <div className="mt-10 md:m-0 md:w-1/2">
      <h2 className="">Register</h2>
      <form
        onSubmit={submitHandler}
        className="border border-gray-300 rounded p-5 mt-6"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="w-full h-9 border mt-3 border-gray-300 outline-none px-4"
            ref={nameRef}
          />
        </div>
        <div className=" mt-7">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="w-full h-9 border mt-3 border-gray-300 outline-none px-4"
            ref={emailRef}
          />
        </div>
        <div className="my-7">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            className="w-full h-9 border mt-3 border-gray-300 outline-none px-4"
            ref={passwordRef}
          />
        </div>
        <div className="w-full text-right">
          <button
            type="submit"
            className=" bg-orange py-2 px-4 text-white rounded-3xl transition-all duration-500 hover:bg-black"
          >
            REGISTER
          </button>
        </div>
      </form>
      <ToastContainer theme="dark" position="top-center" autoClose={3000}/>
    </div>
  );
};

export default Register;
