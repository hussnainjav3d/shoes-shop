import { createContext } from "react";
import data from "./data";
const GlobalState = createContext();

export const StateProvider = ({ children }) => {
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};

export default GlobalState;
