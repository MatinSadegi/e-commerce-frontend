"use client";

import React, { useState } from "react";
import logo from "@/public/logo.webp";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  
  return (
    <div className="text-xs max-w-screen relative ">
      <div className=" w-full absolute flex justify-between p-8 -z-10 md:left-1/2 md:p-0 md:top-12 md:w-fit xl:hidden  ">
        <Image src={logo} alt="logo" width={90} height={90} />
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/windows/32/menu--v5.png"
            alt="menu--v5"
            className=" cursor-pointer flex md:hidden"
            onClick={() => setShowMenu(true)}
          />
      </div>
      <div
        className={`bg-[rgba(0,0,0,0.4)]  md:bg-transparent transition-all delay-300  ${
          showMenu ? " block " : " hidden "
        }`}
        onClick={() => setShowMenu(false)}
      >
        <div
          className={` bg-white transition-all duration-300 flex flex-col justify-between items-center  w-[60%] px-8 py-10  h-screen md:h-fit md:w-[90%] md:bg-transparent md:mx-auto md:flex-row md:px-0 ${
            showMenu ? "translate-x-0" : "-translate-x-[100%]"
          } `}
        >
          <div className="border flex w-[250px] py-3 px-4 rounded-full self-center justify-between items-center text-xs ">
            <input
              className=" outline-none"
              type="text"
              placeholder="Search entire store here..."
            />
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png"
              alt="search--v1"
            />
          </div>

          <nav className=" flex flex-col justify-center gap-10 items-center md:top-[120px] md:flex-row md:pl-16 md:absolute md:border-t md:py-10 md:w-[100%] xl:border-none xl:static xl:w-fit xl:p-0">
            <Link href="/#" className="hover:text-orange transition-colors">
              Home
            </Link>
            <Link href="/#" className="hover:text-orange transition-colors">
              Shop
            </Link>
            <Link href="/#" className="hover:text-orange transition-colors  ">
              Blog
            </Link>
            <Image
              src={logo}
              alt="logo"
              width={90}
              height={90}
              className="hidden xl:flex"
            />
            <Link href="/#" className="hover:text-orange transition-colors ">
              Specials
            </Link>
            <Link href="/#" className="hover:text-orange transition-colors">
              About Us
            </Link>
            <Link href="/#" className="hover:text-orange transition-colors">
              Contact Us
            </Link>
          </nav>

          <div className=" items-center text-xs flex justify-center">
            <Link
              href={"/#"}
              className="mr-1 hover:text-orange transition-colors"
            >
              Login
            </Link>
            /
            <Link
              href={"/#"}
              className="ml-1 hover:text-orange transition-colors"
            >
              Register
            </Link>
            <div className="relative ml-4 ">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/windows/70/shopping-bag.png"
                alt="shopping-bag"
              />
              <span className=" absolute -top-0.5 -left-0.5 w-4 h-4 text-center bg-orange text-white rounded-[150%] text-[10px]">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
