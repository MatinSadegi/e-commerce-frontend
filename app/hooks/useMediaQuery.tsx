"use client";
import { useState, useEffect } from "react";

type WindowDimentions = {
  width: number | undefined;
  height: number | undefined;
};

const useMediaQuery = (): WindowDimentions => {
  const [mediaQuery, setMediaQuery] = useState<WindowDimentions>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => { 
    function handleResize(): void {
      setMediaQuery({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);
  return mediaQuery;
};

export default useMediaQuery;
