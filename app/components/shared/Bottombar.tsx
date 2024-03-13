"use client";

import React from "react";
import Link from "next/link";

const Bottombar = () => {
  return (
    <footer className="pt-20">
      <div className="grid grid-rows-3 grid-cols-2 gap-5 p-14 border-t grid-flow-col md:grid-flow-row  md:grid-rows-2 md:px-8 lg:grid-rows-1 lg:grid-cols-4 ">
        <div className=" text-gray-400  ">
          <h3>Information</h3>
          <ul className="flex flex-col mt-4 gap-3">
            <Link href="/#" className=" hover:text-orange">
              About Us
            </Link>
            <Link href="/#" className=" hover:text-orange">
              Delivery Information
            </Link>
            <Link href="/#" className=" hover:text-orange">
              Privacy Policy
            </Link>
            <Link href="/#" className=" hover:text-orange">
              Terms & Conditions
            </Link>
            <Link href="/#" className=" hover:text-orange">
              Contact Us
            </Link>
            <Link href="/#" className=" hover:text-orange">
              Returns
            </Link>
          </ul>
        </div>
        <div className=" text-gray-400  order-last md:order-none ">
          <h3>Extras</h3>
          <ul className="flex flex-col mt-4 gap-3">
            <Link href="/#" className=" hover:text-orange">
              Brands
            </Link>
            <Link href="/#" className=" hover:text-orange">
              Gift Certificates
            </Link>
            <Link href="/#" className=" hover:text-orange">
              Affiliate
            </Link>
            <Link href="/#" className=" hover:text-orange">
              Specials
            </Link>
            <Link href="/#" className=" hover:text-orange">
              Site Map
            </Link>
            <Link href="/#" className=" hover:text-orange">
              My Account
            </Link>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h3>Contact Us</h3>
          <ul className="flex flex-col mt-4 gap-3">
            <p>Address : Your address goes here.</p>
            <p>Phone : 0123456879</p>
            <p>Email : example@example.com</p>
          </ul>
          <ul className="mt-3 flex gap-3">
            <Link href="/#">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/windows/32/9ca3af/twitter.png"
                alt="twitter"
                className="border p-1.5 rounded-full"
              />
            </Link>
            <Link href="/#">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/windows/32/9ca3af/google-plus.png"
                alt="google-plus"
                className="border p-1.5 rounded-full"
              />
            </Link>
            <Link href="/#">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/material-outlined/24/9ca3af/facebook-f.png"
                alt="facebook-f"
                className="border p-1.5 rounded-full"
              />
            </Link>
            <Link href="/#">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/windows/32/9ca3af/youtube.png"
                alt="youtube"
                className="border p-1.5 rounded-full"
              />
            </Link>
          </ul>
        </div>
        <div className=" flex flex-col col-span-2 md:col-span-1 gap-3">
          <h3 className=" leading-7">Join Our Newsletter Now</h3>
          <p className=" leading-6">
            Exceptional quality. Ethical factories. Sign up to enjoy free U.S.
            shipping and returns on your first order.
          </p>
          <form className=" flex flex-col">
            <input
              type="email"
              placeholder="Enter you email address here..."
              className=" outline-none border p-3"
            />
            <button className=" mt-3 bg-black transition-all text-white p-3 rounded hover:bg-orange">
              Subscribe !
            </button>
          </form>
        </div>
      </div>
      <div className="border-t text-center p-4">
        <p>
          © 2024 <strong> Reid </strong>Mede With ❤️ By{" "}
          <span className=" text-orange">Matin.S</span>
        </p>
        <ul className="mt-2 flex justify-center gap-5 text-gray-400">
          <Link href="/#">Order History</Link>
          <Link href="/#">Wish List</Link>
          <Link href="/#">Newsletter</Link>
        </ul>
      </div>
    </footer>
  );
};

export default Bottombar;
