import React from "react";
import Image from "next/image";
import cBanner1 from "@/public/images/collection-banner1.webp";
import cBanner2 from "@/public/images/collection-banner2.webp";

const Collection = () => {
  return (
    <section className="flex flex-col gap-6 mb-14 text-white p-8 md:flex-row">
      <div className="relative image-border cursor-pointer">
        <Image src={cBanner1} alt="banner" />
        <div className=" absolute left-10 top-1/2 -translate-y-1/2 leading-8 flex flex-col items-center">
          <h2 className=" font-normal text-center mb-1 ">
            Handbag <br /> Men's Collection
          </h2>
          <p className="text-base border-b-2 w-fit">Discover Now</p>
        </div>
      </div>
      <div className="relative image-border cursor-pointer">
        <Image src={cBanner2} alt="banner" />
        <div className=" absolute left-10 top-1/2 -translate-y-1/2 leading-8 flex flex-col items-center">
          <h2 className=" font-normal text-center mb-1 ">
            Sneaker <br /> Men's Collection
          </h2>
          <p className="text-base border-b-2 w-fit">Discover Now</p>
        </div>
      </div>
    </section>
  );
};

export default Collection;
