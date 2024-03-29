import React from "react";
import { ReadonlyURLSearchParams } from "next/navigation";
import queryString from "query-string";
import { getProducts } from "@/app/services/productServices";
import Link from "next/link";
import FilterSideBar from "./FilterSideBar";
import SortTopBar from "./SortTopBar";
import getQueryClient from "@/app/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getAttributes } from "@/app/services/attributeServices";
import QuickView from "@/app/components/shared/QuickView";
import { ProductType } from "@/app/types/types";
import ProductCard from "@/app/components/shared/products/ProductCard";
export const dynamic = "force-dynamic";

const Shop = async ({
  searchParams,
}: {
  searchParams: ReadonlyURLSearchParams;
}) => {
  const queryClient = getQueryClient();
  const data = await queryClient.fetchQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(queryString.stringify(searchParams)),
  });
  await queryClient.prefetchQuery({
    queryKey: ["attribute"],
    queryFn: () => getAttributes(),
  });

  const dehydrateState = dehydrate(queryClient);
  return (
    <div className="max-w-[1200px] mx-auto mt-5 px-5 ">
      <div className="text-sm mb-9">
        <Link
          href="/"
          className=" text-gray-400 transition-all hover:text-orange"
        >
          Home
        </Link>
        <span className=""> / Shop</span>
      </div>
      <HydrationBoundary state={dehydrateState}>
        <div className="flex flex-col gap-10 lg:flex-row">
          <FilterSideBar />
          <div className=" flex flex-col">
            <h2 >Shop</h2>
            <SortTopBar />

            <div className=" grid sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 justify-between max-w-[1200px] mx-auto gap-7">
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
        </div>
      </HydrationBoundary>
    </div>
  );
};

export default Shop;
