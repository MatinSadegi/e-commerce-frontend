import Collection from "../components/Collection";
import Products from "../components/shared/products/Products";
import Trending from "../components/shared/products/Trending";
import Offers from "../components/Offers";
import Banner from "../components/Banner";

 

export default async function Home() {
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
          <Products />
        </section>
      </div>
      <Collection />
      <Trending />
    </main>
  );
}
