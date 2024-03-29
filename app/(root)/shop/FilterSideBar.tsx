"use client";
import React, { useCallback, useState, useEffect } from "react";
import {
  useRouter,
  useSearchParams,
  usePathname,
} from "next/navigation";
import { useGetAttributes } from "@/app/services/attributeServices";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import CheckBox from "@/app/utils/CheckBox";

const FilterSideBar = () => {
  const { data, isError, isPending, error, isSuccess }: any =
    useGetAttributes();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [rangeValues, setRangeValues] = useState([5, 500]);
  const [selectedAttributes, setSelectedAttributes] = useState< 
    Record<string, string[]>
  >({});

  useEffect(() => {
    let selectedQueries: Record<string, string[]> = {};
    searchParams.forEach((value, key) => {
      const queries = value.split(",");
      if (selectedQueries[key]) {
        selectedQueries[key].push(...queries);
      } else {
        selectedQueries[key] = queries;
      }
    });
    setSelectedAttributes(selectedQueries);
  }, []);
  const createQueryString = useCallback(
    (name: string, value: any) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const onChangeHandler = (value: any) => {
    setRangeValues(value);
    const params = new URLSearchParams(searchParams);
    params.set('price[gte]',value[0])
    params.set('price[lte]',value[1])
    router.push(
      pathname + "?" + params.toString()
    );
  };

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name.toLowerCase();
    if (!selectedAttributes[name]) {
      setSelectedAttributes({ ...selectedAttributes, [name]: [value] });
      router.push(pathname + "?" + createQueryString(name, [value]));
    } else {
      if (selectedAttributes[name].includes(value)) {
        const attribute = selectedAttributes[name].filter((c) => c !== value);
        setSelectedAttributes({ ...selectedAttributes, [name]: attribute });
        router.push(pathname + "?" + createQueryString(name, attribute));
      } else {
        setSelectedAttributes({
          ...selectedAttributes,
          [name]: [...selectedAttributes[name], value],
        });
        router.push(
          pathname +
            "?" +
            createQueryString(name, [...selectedAttributes[name], value])
        );
      }
    }
  };
  return (
    <div className=" min-w-[200px] order-2 lg:order-first">
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
          min={5}
          max={500}
          value={rangeValues}
          onChange={onChangeHandler}
        />
        <p className=" mt-3 w-full text-center text-sm">
          <span>${rangeValues[0]}</span> - <span>${rangeValues[1]}</span>
        </p>
      </div>
      {data?.map((item: any) => {
        return (
          <div key={item._id} className=" mt-6">
            <p className=" text-sm font-semibold mb-1">{item?.name}</p>
            <ul className="flex flex-col gap-1">
              {item.values.map((val: string) => {
                return (
                  <CheckBox
                    id={item._id}
                    key={val}
                    value={val}
                    name={item.name}
                    label={val}
                    onChange={filterHandler}
                    checked={
                      selectedAttributes[item.name.toLowerCase()]
                        ? selectedAttributes[item.name.toLowerCase()].includes(
                            val
                          )
                          ? true
                          : false
                        : false
                    }
                  />
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FilterSideBar;
