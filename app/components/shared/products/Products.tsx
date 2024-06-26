
import React from "react";
import ProductCard from "./ProductCard";
import { ProductType } from "@/app/types/types";
import { getProducts, useGetProducts } from "@/app/services/productServices";
import QuickView from "../QuickView";
export const dynamic = "force-dynamic";

const Products = async() => {
  const data = await getProducts("");
  return (
    <div className=" w-full mx-auto  "> 
      <div className=" grid mx-auto  justify-items-center max-w-[1200px] gap-6  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    </div>
  ); 
};

export default Products;
