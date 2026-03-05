import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useTheme = () => {
  const { config } = useContext(AppContext);
  return config.theme;
};