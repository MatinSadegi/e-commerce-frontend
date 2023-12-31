"use client";
import React from "react";
import Image from "next/image";
import { ProductType } from "@/app/types/types";
import Link from "next/link";
import { useGlobalContext } from "@/app/context/store";

const ProductCard: React.FC<
  Pick<ProductType, "title" | "price" | "slug" | "image" | "description"|'quantity'>
> = ({ title, price, image, slug, description,quantity }) => {
  const { setData,setShowQuickView } = useGlobalContext();
  return (
    <div className=" flex flex-col items-start group">
      <div className="relative cursor-pointer">
        <Link href={`/${slug}`}>
          <Image src={image.url} alt="shoes" width={350} height={250} />
        </Link>
        <div className=" absolute top-3 left-3 flex flex-col text-white gap-2">
          <span className=" bg-green-700 px-3 py-1">New</span>
          <span className="bg-orange px-3 py-1">-7%</span>
        </div>
        <div className="w-full absolute items-center bottom-3 hidden group-hover:flex">
          <p
            onClick={() => {
              setData({ title, description, image, price,quantity });
              setShowQuickView(true)
            }}
            className="  bg-white rounded-sm mx-auto text-gray-400 w-[90%] py-3 transition-all hover:text-orange"
          >
            Quick view
          </p>
        </div>
        <div className=" absolute top-3 right-3 bg-white p-3 rounded-sm hidden group-hover:block">
          <img
            width="16"
            height="16"
            src="https://img.icons8.com/material-outlined/18/9ca3af/plus-math--v1.png"
            alt="plus-math--v1"
          />
        </div>
      </div>
      <div className=" text-left  mt-4 ml-1">
        <p className="mb-1  text-gray-400 transition-all hover:text-orange cursor-pointer">
          {title}
        </p>
        <p className=" font-medium">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
