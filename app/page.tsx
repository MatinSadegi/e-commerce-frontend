import Collection from "./components/Collection";
import Products from "./components/products/Products";
import Trending from "./components/products/Trending";

export default function Home() {
  return (
    <main className=" w-[96%] flex flex-col items-center mx-auto  ">
      <Products/>
      <Collection/>
      <Trending/>
    </main>
  )
}
