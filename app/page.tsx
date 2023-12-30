import Collection from "./components/Collection";
import Products from "./components/products/Products";
import Trending from "./components/products/Trending";
import Offers from "./components/Offers";
import Banner from "./components/Banner";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import getQueryClient from "./utils/getQueryClient";
import { getProducts } from "./services/productServices";


export default async function  Home() {
  const queryClient = getQueryClient();
  try {
      await queryClient.prefetchQuery({
        queryKey: ["products"],
        queryFn: getProducts,
      });
  } catch (error) {
    console.log(error)
  }

  const dehydrateState = dehydrate(queryClient);
  return (
    <main className=" w-full flex flex-col items-center mx-auto overflow-hidden  ">
      <Banner />
      <Offers />
      <HydrationBoundary state={dehydrateState}>
        <Products />
      </HydrationBoundary>
      <Collection />
      <Trending />
    </main>
  );
}
