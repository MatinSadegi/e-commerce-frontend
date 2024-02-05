"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const FilterSideBar = () => {
  const [values, setValues] = useState([50, 500]);
  const onChangeHandler = (value: any) => {
    setValues(value);
  };
  return (
    <div className=" w-[250px]">
      <div className="w-full">
        <p className=" text-sm font-medium">Filter By Price</p>
        <Slider
          range
          className="mt-3"
          style={{ height: "3px" }}
          dotStyle={{ backgroundColor: "red" }}
          trackStyle={{ backgroundColor: "#f97316", height: "4px" }}
          railStyle={{ backgroundColor: "#d1d5db", height: "4px" }}
          allowCross={false}
          min={50}
          max={500}
          value={values}
          onChange={onChangeHandler}
        />
        <p className=" mt-3 w-full text-center text-sm">
          <span>${values[0]}</span> - <span>${values[1]}</span>
        </p>
      </div>
      <div>
        <p className=" text-sm font-medium">Brand</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default FilterSideBar;
