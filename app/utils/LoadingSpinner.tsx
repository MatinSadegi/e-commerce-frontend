import React from "react";

const LoadingSpinner = () => {
  return (
    <div className=" flex h-screen w-screen bg-white fixed z-10 items-center ">
      <div className="relative z-30  w-fit mx-auto pr-20">
        <div className=" spinner left-2 animate-[one_0.6s_infinite]"></div>
        <div className=" spinner left-2 animate-[two_0.6s_infinite]"></div>
        <div className=" spinner left-8 animate-[two_0.6s_infinite]"></div>
        <div className=" spinner left-14 animate-[three.6s_infinite]"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
