import { useState, createContext, useContext } from "react";
import { Productos } from "./Productos";

export const Mask = createContext([]);
export const useMask = () => useContext(Mask);

const MainContext = ({ children }) => {
  const [valor, setValor] = useState(Productos);

  return <Mask.Provider value={{ valor }}>{children}</Mask.Provider>;
};

export default MainContext;
