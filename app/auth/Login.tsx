'use client'
import React, { useRef,useContext } from "react";
import { AuthContextType, FormDataTypes } from "../types/types";
import { useMutation } from "@tanstack/react-query";
import { login} from "../services/authService";
import AuthContext from "../context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { mutateAsync } = useMutation({ mutationFn: login });
  const {auth,setAuth} = useContext(AuthContext) as AuthContextType
   let formData: Partial<FormDataTypes>;
   const emailRef = useRef<HTMLInputElement>(null);
   const passwordRef = useRef<HTMLInputElement>(null);
   const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     formData = {
       email: emailRef.current?.value,
       password: passwordRef.current?.value,
     };
     try {
       const { message,data } = await mutateAsync(formData);
       setAuth({name:data.name,email:data.email, token:data.token})
       toast.success(message);
       
     } catch (error: any) {
      if(!error?.response)
       toast.error(error?.response?.data.message);
     }
   };
  return (
    <div className="md:w-1/2">
      <h2 className="">Login</h2>
      <form
        className="border border-gray-300 rounded p-5 mt-6"
        onSubmit={submitHandler}
      >
        <div>
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
        <div className=" flex justify-between">
          <span className=" text-xs text-orange">Lost your password?</span>
          <button className=" bg-orange py-2 px-4 text-white rounded-3xl transition-all duration-500 hover:bg-black">
            LOGIN
          </button>
        </div>
      </form>
      <ToastContainer theme="dark" position="top-center" autoClose={3000} />
    </div>
  );
};

export default Login;
