"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { getProfile, useGetProfile } from "@/app/services/authService";
import { getCart, useGetCart } from "@/app/services/cartServices";
import personIcon from "@/public/icons/person-male-svgrepo-com.svg";
import arrowIcon from "@/public/icons/down-arrow-5-svgrepo-com.svg";
import CartQuickView from "./CartQuickView";
import { useGlobalContext } from "@/app/context/store";
import ProfileQuickView from "./ProfileQuickView";

const Header = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { setCart,setUser } = useGlobalContext();
  const user = useGetProfile();
  const { data, isFetching } = useGetCart();
 
  useEffect(() => {
    setCart(data);
    setUser(user.data)
  }, [ isFetching]);
 
  return (
    <div
      className={`text-xs max-w-screen relative flex justify-between p-6 md:p-0 z-30 ${
        user.isLoading ? " blur" : "blur-0"
      }`}
    >
      <div className=" absolute  md:z-30 md:left-1/2 md:top-12 md:-translate-x-1/2 2xl:hidden ">
        <Image src={logo} alt="logo" width={90} height={90} />
      </div>
      <div
        onClick={() => setShowMenu(true)}
        className="w-full flex justify-end md:hidden"
      >
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/windows/32/menu--v5.png"
          alt="menu--v5"
          className=""
        />
      </div>
      <div
        className={` absolute h-screen w-screen bg-[rgba(0,0,0,0.4)] top-0 left-0 z-10 md:hidden ${
          showMenu ? " block " : " hidden "
        }`}
        onClick={() => setShowMenu(false)}
      ></div>
      <div
        className={` absolute bg-white h-screen z-20 top-0 left-0 px-6 pt-12  pb-20 flex flex-col justify-between transition-all duration-300 md:translate-x-0 md:h-fit md:pt-10 md:pb-0 md:flex-row md:w-full md:relative md:flex-wrap 2xl:flex-nowrap 2xl:pb-10  ${
          showMenu ? "translate-x-0" : "-translate-x-[100%]"
        }`}
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

        <div className="relative items-center text-xs flex justify-center 2xl:order-last">
          {user.isSuccess ? (
            <div className="flex items-center cursor-pointer">
              <div
                className={`flex items-center transition-all p-2 rounded-xl sm:flex ${
                  showProfile ? "bg-lightOrange" : "bg-transparent"
                }`}
                onClick={() => setShowProfile(!showProfile)}
              >
                <Image src={arrowIcon} alt="arrow-down-icon" />
                <Image src={personIcon} alt="person-icon" />
              </div>
              <ProfileQuickView
                name={user?.data?.name}
                showProfile={showProfile}
              />
            </div>
          ) : (
            <div>
              <Link
                href={"/auth"}
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
            </div>
          )}

          <div
            className="relative ml-2 "
            onClick={() => router.push("/checkout/cart")}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/windows/70/shopping-bag.png"
              alt="shopping-bag"
              onMouseEnter={() => setShowCart(true)}
              onMouseLeave={() => setShowCart(false)}
            />
            <span
              className={` absolute -top-0.5 -left-0.5 w-4 h-4 text-center bg-orange text-white rounded-[150%] text-[10px] ${
                data?.products?.length ? "absolute" : "hidden"
              }`}
            >
              {data?.countTotal}
            </span>

            <CartQuickView showCart={showCart} />
          </div>
        </div>
        <nav className=" flex flex-col justify-center gap-14 items-center md:flex-row md:border-t md:mt-9 md:py-6 md:w-screen  2xl:mt-0 2xl:py-0 2xl:border-none 2xl:gap-16 2xl:w-fit 2xl:mr-32">
          <Link href="/#" className="hover:text-orange transition-colors">
            Home
          </Link>
          <Link href="/shop" className="hover:text-orange transition-colors">
            Shop
          </Link>
          <Link
            href="/#"
            className="hover:text-orange transition-colors 2xl:pr-12 "
          >
            Blog
          </Link>
          <Image
            src={logo}
            alt="logo"
            width={90}
            height={90}
            className="hidden 2xl:flex"
          />
          <Link
            href="/#"
            className="hover:text-orange transition-colors 2xl:pl-12 "
          >
            Specials
          </Link>
          <Link href="/#" className="hover:text-orange transition-colors">
            About Us
          </Link>
          <Link href="/#" className="hover:text-orange transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
