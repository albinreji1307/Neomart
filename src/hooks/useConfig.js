import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useConfig = () => {
  const { config } = useContext(AppContext);
  return config;
};