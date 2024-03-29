import React from "react";
import { getProducts, getProductBySlug } from "../../services/productServices";
import { ProductType } from "../../types/types";
import { Open_Sans } from "next/font/google";
import starIcon from "@/public/icons/star-favorite-1499-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";
import AddToCartButtons from "./AddToCartButtons";
export const dynamic = "force-static";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

const Product = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const {
    image,
    title,
    price,
    description,
    quantity,
    category,
    subcategory,
    brand,
    _id,
  } = await getProductBySlug(slug);

  return (
    <div
      className={`${openSans.className} max-w-md md:max-w-[800px] mx-auto mt-5 px-3  `}
    >
      <div className="text-sm mb-9">
        <Link
          href="/"
          className=" text-gray-400 transition-all hover:text-orange"
        >
          Home
        </Link>
        <span className=""> / Product Details</span>
      </div>
      <div className="flex flex-col justify-center md:flex-row md:space-x-7">
        <div className="md:w-1/2">
          <Image
            src={image.url}
            width={450}
            height={450}
            alt={title}
            className=" rounded"
          />
        </div>
        <div className=" mt-8 flex flex-col gap-6 md:w-1/2 md:m-0">
          <h4 className=" text-gray-500 font-normal"> {title}</h4>
          <div className="flex items-center gap-1">
            <Image src={starIcon} alt="star-icon" />
            <Image src={starIcon} alt="star-icon" />
            <Image src={starIcon} alt="star-icon" />
            <Image src={starIcon} alt="star-icon" />
          </div>
          <p className="font-medium text-lg">${price.toFixed(2)}</p>
          <p className="text-gray-500 leading-5">{description}</p>
          <AddToCartButtons count={quantity} productId={_id} />
        </div>
      </div>
      <div className=" w-full border border-gray-300 mt-10">
        <div className="flex">
          <p className=" text-center py-2.5 px-6 bg-gray-300 text-[15px] font-medium transition-all hover:bg-orange hover:text-white">
            DATA SHEET
          </p>
        </div>
        <div className=" p-8 text-gray-500 ">
          <div className="grid grid-row-3 border-y border-gray-300">
            <div className="flex ">
              <p className="w-1/3 p-2.5 font-bold ">Compositions</p>
              <p className="border-l p-2.5 border-gray-300">{brand}</p>
            </div>
            <div className="flex border-t border-gray-300">
              <p className="w-1/3 p-2.5 font-bold ">Styles</p>
              <p className="border-l p-2.5 border-gray-300">{category}</p>
            </div>
            <div className="flex border-t border-gray-300">
              <p className="w-1/3 p-2.5 font-bold ">Properties</p>
              <p className="border-l p-2.5 border-gray-300">{subcategory}</p>
            </div>
          </div>
          <p className=" mt-8">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

export async function generateStaticParams() {
  const products = await getProducts("");
  return products.slice(0, 3).map((product: ProductType) => ({
    slug: product.slug,
  }));
}
