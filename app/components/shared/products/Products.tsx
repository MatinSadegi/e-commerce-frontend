
import React from "react";
import ProductCard from "./ProductCard";
import { ProductType } from "@/app/types/types";
import { getProducts, useGetProducts } from "@/app/services/productServices";
import QuickView from "../QuickView";
export const dynamic = "force-dynamic";

const Products = async() => {
  // const { data, isError, isPending, error}: any =
  //   useGetProducts("");
 const data = await getProducts('')
  return (
    <div className=" grid grid-cols-3 xl:grid-cols-4 justify-between max-w-[1200px] mx-auto  gap-7">
      {data?.map((product: ProductType) => {
        return (
          <ProductCard
            key={product._id}
            _id={product._id}
            title={product.title}
            price={product.price}
            image={product.image}
            slug={product.slug}
            description={product.description}
            quantity={product.quantity}
          />
        );
      })}
      <QuickView />
    </div>
  );
};

export default Products;
