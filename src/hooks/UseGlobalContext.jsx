import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const UseGlobalContext = () => {
  const context = useContext(GlobalContext);
  if(!context){
    throw new Error("useGlobalContext must be in the")
  }
  return context;
};
