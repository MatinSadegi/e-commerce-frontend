"use client";
import React from "react";
import { ReadonlyURLSearchParams } from "next/navigation";
import queryString from "query-string";
import { getProducts } from "@/app/services/productServices";
import { getAttributes } from "@/app/services/attributeServices";
import ProductCard from "@/app/components/shared/products/ProductCard";
import { ProductType } from "@/app/types/types";
import Link from "next/link";
import FilterSideBar from "./FilterSideBar";
import SortTopBar from "./SortTopBar";

const Shop = async ({
  searchParams,
}: {
  searchParams: ReadonlyURLSearchParams;
}) => {
  const products = await getProducts(queryString.stringify(searchParams));
  const attributes = await getAttributes();
  return (
    <div className="max-w-md md:max-w-[1200px] mx-auto mt-5 px-3">
      <div className="text-sm mb-9">
        <Link
          href="/"
          className=" text-gray-400 transition-all hover:text-orange"
        >
          Home
        </Link>
        <span className=""> / Shop</span>
      </div>
      <div className="flex gap-10">
        <FilterSideBar attributes={attributes} />
        <div>
          <h2>Shop</h2>
          <SortTopBar />
          <div className=" mt-8 grid grid-cols-3 xl:grid-cols-4 justify-between max-w-[950px] mx-auto  gap-7">
            {products?.map(
              (
                product: Pick<
                  ProductType,
                  | "title"
                  | "price"
                  | "slug"
                  | "image"
                  | "description"
                  | "quantity"
                >
              ) => {
                return (
                  <ProductCard
                    key={product.slug}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    slug={product.slug}
                    description={product.description}
                    quantity={product.quantity}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
