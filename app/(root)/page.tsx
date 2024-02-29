import Collection from "../components/Collection";
import Products from "../components/shared/products/Products";
import Trending from "../components/shared/products/Trending";
import Offers from "../components/Offers";
import Banner from "../components/Banner";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import getQueryClient from "../utils/getQueryClient";
import { getProducts } from "../services/productServices";
export const dynamic = "force-dynamic";

export default async function Home() {
  const queryClient = getQueryClient();
  try {
    await queryClient.prefetchQuery({
      queryKey: ["products"],
      queryFn: () => getProducts(""),
    });
  } catch (error) {
    console.log(error);
  }

  const dehydrateState = dehydrate(queryClient);
  return (
    <main className=" w-full flex flex-col items-center mx-auto overflow-hidden  ">
      <Banner />
      <Offers />
      <div className=" w-screen relative">
        <section className="text-center w-[90%] mx-auto my-16 ">
          <h2 className=" font-semibold">Our Products</h2>
          <p className="pt-7 pb-8 text-gray-500">
            Contemporary, minimal and modern design embody the Lavish Alice
            handwriting
          </p>
          <HydrationBoundary state={dehydrateState}>
            <Products />
          </HydrationBoundary>
        </section>
      </div>
      <Collection />
      <Trending />
    </main>
  );
}
