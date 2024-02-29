"use client";
import React, { useState } from "react";
import downIcon from "@/public/icons/down-arrow-5-svgrepo-com.svg";
import Image from "next/image";

export default function useDropdown(
  defaultState: string,
  options: { [x: string]: number }[]
) {
  const [state, setState] = useState(defaultState); 
  const [dropDown, setDropDown] = useState(false);
  const DropdownMaker = () => (
    <div
      className={`w-full relative text-gray-500 text-sm font-light ${
        dropDown ? " overflow-visible" : " overflow-hidden"
      } `}
    >
      <div
        className={`flex justify-between w-full rounded p-2 transition-all cursor-pointer border  relative z-0 overflow-hidden ${
          dropDown ? "border-gray-500" : "border-gray-300"
        }`}
        onClick={() => setDropDown((prev) => !prev)}
      >
        <p className="">{state}</p>
        <div className="  flex ">
          <Image
            src={downIcon}
            alt="down-icon"
            className={`${dropDown ? "rotate-180" : "rotate-0"} transition-all`}
          />
        </div>
      </div>

      <ul
        className={`flex flex-col  w-full  absolute z-10 max-h-[150px] overflow-y-auto scrollbar `}
      >
        {options.map((item: object) => {
          return (
            <li
              key={Object.keys(item)[0]}
              className={` bg-white p-2   hover:bg-gray-200  font-medium transition-all${
                +Object.values(item)[0] === 0
                  ? " line-through text-gray-300"
                  : " no-underline text-gray-400"
              }  `}
              onClick={() => {
                if (Object.values(item)[0] !== 0) {
                  setState(Object.keys(item)[0]);
                }
                setDropDown(false);
              }}
            >
              {Object.keys(item)}
            </li>
          );
        })}
      </ul>
    </div>
  );
  return [state, DropdownMaker];
}
