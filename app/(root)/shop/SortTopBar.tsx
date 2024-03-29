"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  useRouter,
  useSearchParams,
  usePathname,
  ReadonlyURLSearchParams,
} from "next/navigation";
import sortIcon from "@/public/icons/sort-from-top-to-bottom-svgrepo-com.svg";
import Image from "next/image";

const SortTopBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState("newest");

  const createQueryString = useCallback(
    (name: string, value: any) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    router.push(pathname + "?" + createQueryString("sort", sort));
  }, [sort]);
  return (
    <div className=" w-full border mt-6 mb-8">
      <div className=" flex items-center p-3 gap-4">
        <Image src={sortIcon} alt="sort-icon" />
        <span className="text-gray-800">sort : </span>
        <ul className=" flex flex-col sm:flex-row">
          <li
            className={` px-2 py-1  font-medium  cursor-pointer ${
              sort === "newest" ? "text-orange" : "text-gray-500"
            }`}
            onClick={(e) => setSort(e.currentTarget.innerHTML)}
          >
            newest
          </li>
          <li
            className={` px-2 py-1  font-medium  cursor-pointer ${
              sort === "cheapest" ? "text-orange" : "text-gray-500"
            }`}
            onClick={(e) => setSort(e.currentTarget.innerHTML)}
          >
            cheapest
          </li>
          <li
            className={` px-2 py-1  font-medium  cursor-pointer ${
              sort === "most expensive" ? "text-orange" : "text-gray-500"
            }`}
            onClick={(e) => setSort(e.currentTarget.innerHTML)}
          >
            most expensive
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortTopBar;
