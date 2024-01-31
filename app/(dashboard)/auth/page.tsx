import React from 'react'
import Login from './Login'
import Register from './Register'

const Auth = () => {
  return (
    <div className=" max-w-md md:max-w-[1000px] h-screen  mx-auto p-4 flex flex-col justify-center ">
      <div className="  md:flex gap-8  ">
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default Auth