import React from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "@/app/services/productServices";
import { ProductType } from "@/app/types/types";
export const dynamic = "force-dynamic";

const Trending = async () => {
  const products = await getProducts('');
  const trendingProducts = products?.filter(
    (product: Pick<ProductType, "trending">) => product.trending === true
  );
  return (
    <section className="text-center w-[90%] my-12  ">
      <h2 className=" font-semibold">Trending Products</h2>
      <p className="pt-7  text-gray-500">
        Contemporary, minimal and modern design embody the Lavish Alice
        handwriting
      </p>
      <div className=" grid mx-auto justify-items-center  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1200px] gap-6 mt-7">
        {trendingProducts?.map((product: ProductType) => {
          return (
            <ProductCard
              key={product.slug}
              _id={product._id}
              title={product.title}
              price={product.price}
              image={product.image}
              slug={product.slug}
              quantity={product.quantity}
              description={product.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Trending;
