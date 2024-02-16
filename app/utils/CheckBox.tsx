import React from "react";
import { CheckBoxProps } from "../types/types";

const CheckBox = ({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}: CheckBoxProps) => {
  return (
    <div className="flex items-center text-gray-700 justify-between relative ">
      <label htmlFor={id} className="">
        {label}
      </label>
      <input
        type="checkbox"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        className=" relative peer
    appearance-none w-6 h-6  bg-gray-300 rounded-sm 
    mt-1
    checked:bg-white checked:border-2 checked:border-orange "
      />
      <svg
        className="absolute right-0 top-0 pointer-events-none  -translate-x-1 translate-y-[3px]  w-4 h-4 mt-1 hidden peer-checked:block z-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f97316"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default CheckBox;
