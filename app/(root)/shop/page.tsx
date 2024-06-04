import React from "react";
import Link from "next/link";
import FilterSideBar from "./FilterSideBar";
import SortTopBar from "./SortTopBar";
import Products from "@/app/components/shared/products/Products";
export const dynamic = "force-dynamic";

const Shop = async () => {

  return (
    <div className="max-w-[1300px] mx-auto mt-5 px-5 ">
      <div className="text-sm mb-9">
        <Link
          href="/"
          className=" text-gray-400 transition-all hover:text-orange"
        >
          Home
        </Link>
        <span className=""> / Shop</span>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row">
        <FilterSideBar />
        <div className=" flex flex-col">
          <h2>Shop</h2>
          <SortTopBar />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Shop;
