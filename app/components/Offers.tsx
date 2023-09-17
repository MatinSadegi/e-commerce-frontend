import React from "react";
import Image from "next/image";
import bagImg from "@/public/images/offer1.webp";
import shoes from "@/public/images/offer2.webp";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

const Offers = () => {
  return (
    <div className="grid grid-cols-3 gap-5 p-8 ">
      <div className="image-border ">
        <Image
          src={bagImg}
          alt="bagOffer"
          width={450}
          height={200}
          placeholder="blur"
        />
      </div>

      <div className=" bg-blue-300 w-full text-center py-2 lg:py-5 flex flex-col justify-between text-white image-border">
        <p>Take an Extra</p>
        <p className={`text-5xl lg:text-8xl tracking-wide ${caveat.className}`}>
          30%
        </p>
        <p className="">Almost Everything Store</p>
      </div>

      <div className="image-border">
        <Image
          src={shoes}
          alt="bagOffer"
          width={450}
          height={200}
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default Offers;
