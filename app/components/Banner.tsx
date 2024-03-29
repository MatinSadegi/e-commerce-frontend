"use client";

import React, { useState } from "react";
import { Caveat } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  display:"swap"
});

const Banner = () => {
  const slides = [
    {
      url: "/images/banner1.jpg",
      title: "Hello Summer",
    },
    {
      url: "/images/banner2.jpg",
      title: "Special Clothing",
    },
    {
      url: "/images/banner3.jpg",
      title: "Simplify Everything",
    },
  ];

  const [slideNum, setSlideNum] = useState(0);

  const nextSlide = (): void => {
    if (slideNum === 2) setSlideNum(0);
    else {
      setSlideNum((prev) => prev + 1);
    }
  };
  const prevSlide = (): void => {
    if (slideNum === 0) setSlideNum(2);
    else {
      setSlideNum((prev) => prev - 1);
    }
  };

  return (
    <div className=" overflow-hidden group relative -z-10  xl:mt-0">
      <motion.div
        style={{ backgroundImage: `url(${slides[slideNum].url})` }}
        className={` h-[600px] w-screen bg-cover bg-center duration-700 items-center flex flex-col justify-around text-white `}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={` text-6xl lg:text-8xl text-center mt-24 ${caveat.className}`}
        >
          {slides[slideNum].title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
          className=" text-sm lg:text-base text-center "
        >
          the wooboom clothing summer collection is back at half price
        </motion.p>
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6,delay:0.4 }}
        >
          <Link
            href="/#"
            className="border-b w-fit text-lg transition-all hover:text-orange hover:border-orange"
          >
            Discover Now
          </Link>
        </motion.div>
        <div className="flex gap-3 mt-10">
          {slides.map((slide, slideIndex) => (
            <span
            key={slideIndex}
              className={`w-8 h-1 transition-all duration-1000  ${
                slideIndex === slideNum ? "bg-orange" : "bg-white"
              }`}
            ></span>
          ))}
        </div>
      </motion.div>

      <div className=" absolute hidden w-full lg:px-8 group-hover:flex justify-between top-1/2 ">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ios-filled/50/9ca3af/back.png"
          alt="back"
          className=" cursor-pointer"
          onClick={prevSlide}
        />
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ios-filled/50/9ca3af/forward--v1.png"
          alt="forward--v1"
          className=" cursor-pointer"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Banner;
