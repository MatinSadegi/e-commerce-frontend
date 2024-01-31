"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "@/app/services/productServices";
import { ProductType } from "@/app/types/types";
import { useQuery } from "@tanstack/react-query";
import QuickView from "./QuickView";
// export const dynamic = "force-dynamic";

const Products = () => {
  const [selectProduct, setSelectProduct] = useState<ProductType>();
  const { data, isError, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  // if (isPending) return <h1>Loading ...</h1>;
  if (isError) {
    console.log(error);
  }

  return (
    <div className=" w-screen relative">
      <section className="text-center w-[90%] mx-auto my-16 ">
        <h2 className=" font-semibold">Our Products</h2>
        <p className="pt-7 pb-8 text-gray-500">
          Contemporary, minimal and modern design embody the Lavish Alice
          handwriting
        </p>
        <ul className="flex justify-center gap-8 text-gray-500">
          <li className=" hover:text-orange transition-all cursor-pointer">
            Women
          </li>
          <li className=" hover:text-orange transition-all cursor-pointer">
            Men
          </li>
          <li className=" hover:text-orange transition-all cursor-pointer">
            Kid
          </li>
          <li className=" hover:text-orange transition-all cursor-pointer">
            Shoes
          </li>
        </ul>
        <div className=" mt-8 grid grid-cols-3 xl:grid-cols-4 justify-between max-w-[1200px] mx-auto  gap-7">
          {data?.map(
            (
              product: Pick<
                ProductType,
                "title" | "price" | "slug" | "image" | "description"|'quantity'
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
      </section>
      <QuickView />
    </div>
  );
};

export default Products;
