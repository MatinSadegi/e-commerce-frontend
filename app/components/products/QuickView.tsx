'use client'
import React from "react";
import { useGlobalContext } from "@/app/context/store";
import Image from "next/image";
import multiplyIcon from '@/public/icons/multiply-svgrepo.svg'


const QuickView: React.FC = () => {
  const { data,showQuickView , setShowQuickView } = useGlobalContext();
  const {title,price,image,description} = data
  const imageUrl:string = image?.url!
  console.log(image?.url)
  return (
    <div
      className={` fixed left-0 top-0 z-50 w-screen h-screen bg-[rgba(0,0,0,0.2)] items-center ${
        showQuickView ? "flex" : "hidden"
      }`}
    >
      <div className=" w-[950px] h-[550px] mx-auto bg-white relative px-4 py-10 flex gap-6">
        <Image
          src={multiplyIcon}
          alt="multiply-icon"
          className=" cursor-pointer absolute right-3 top-3 bg-gray-300 p-2 rounded-full w-8 h-8"
          onClick={() => setShowQuickView(false)}
        />
        <div className="w-2/5 border p-3 h-fit">
          {data && (
            <Image src={imageUrl} alt="shoes" width={350} height={250} className="w-full " />
          )}
        </div>
        <div className="w-3/5 py-2">
          <h4>{title}</h4>
          <p className=" my-6 text-base text-orange ">${price?.toFixed(2)}</p>
          <p className=" leading-5  text-gray-500">{description}</p>
          <div>
            <p className=" text-base font-medium">Size</p>
            
          </div>
          <div className="flex my-8 items-center space-x-3">
            <input type="number" defaultValue={1} className="border w-16 h-10 p-2 outline-none " />
            <button className=" w-44 h-10 p-2 bg-black text-white transition-all duration-500 hover:bg-orange">ADD TO CART</button>
          </div>
          <div>
            <p className="text-base font-medium">SHARE THIS PRODUCT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
