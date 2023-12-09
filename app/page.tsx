import Collection from "./components/Collection";
import Products from "./components/products/Products";
import Trending from "./components/products/Trending";
import Offers from "./components/Offers";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main className=" w-[96%] flex flex-col items-center mx-auto  ">
      <Banner/>
      <Offers/>
      <Products/>
      <Collection/>
      <Trending/>
    </main>
  )
}
