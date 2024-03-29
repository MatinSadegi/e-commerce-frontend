"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { ProductType, CartType } from "../types/types";


const useValue = () => {
  const [data, setData] = useState<Partial<ProductType>>({});
  const [showQuickView, setShowQuickView] = useState<boolean>(false);
  const [cart, setCart] = useState<CartType>();
  const [user, setUser] = useState<any>()
  return { data, setData, showQuickView, setShowQuickView, cart, setCart, user,setUser };
};

const GlobalContext = createContext({} as ReturnType<typeof useValue>);

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <GlobalContext.Provider value={useValue()}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
