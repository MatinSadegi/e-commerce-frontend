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
  showQuickView:boolean;
  setShowQuickView:Dispatch<SetStateAction<boolean>>
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
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState({});
  const [showQuickView, setShowQuickView] = useState(false);
  return (
    <GlobalContext.Provider value={{ data, setData,showQuickView,setShowQuickView }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
