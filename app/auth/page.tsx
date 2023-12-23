import React from 'react'
import Link from 'next/link'
import Login from './Login'
import Register from './Register'

const Auth = () => {
  return (
    <div className=" max-w-md md:max-w-[1000px]  mx-auto p-4 ">
      <div className="text-sm mb-9">
        <Link
          href="/"
          className=" text-gray-400 transition-all hover:text-orange"
        >
          Home
        </Link>
        <span className=""> / Auth </span>
      </div>
      <div className="  md:flex gap-8  ">
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default Auth