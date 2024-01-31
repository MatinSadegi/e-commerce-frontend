"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { ProductType } from "../types/types";

interface ContextProps {
  data: Partial<ProductType>;
  setData: Dispatch<SetStateAction<Partial<ProductType>>>;
  showQuickView: boolean;
  setShowQuickView: Dispatch<SetStateAction<boolean>>;
  cart: { products: object[]; cartTotal: number; countTotal: number };
  setCart: Dispatch<
    SetStateAction<{
      products: object[];
      cartTotal: number;
      countTotal: number;
    }>
  >;
}

const GlobalContext = createContext<ContextProps>({
  data: {
    title: "",
    description: "",
    price: 0,
    image: { public_id: "", url: "" },
  },
  setData: () => {},
  showQuickView: false,
  setShowQuickView: () => {},
  cart: { products: [{}], cartTotal: 0, countTotal: 0 },
  setCart: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState({});
  const [showQuickView, setShowQuickView] = useState(false);
  const [cart, setCart] = useState({
    products: [{}],
    cartTotal: 0,
    countTotal: 0,
  });
  return (
    <GlobalContext.Provider
      value={{ data, setData, showQuickView, setShowQuickView, cart, setCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
