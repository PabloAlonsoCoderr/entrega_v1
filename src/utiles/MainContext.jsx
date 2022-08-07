import { useState, createContext, useContext } from "react";
import { Productos } from "./Productos";

const Mask = createContext([]);
export const Mascara = createContext([]);

const MainContext = ({ children }) => {
  const pepe = "ramiro";
  return <Mask.Provider value={pepe}>{children}</Mask.Provider>;
};

export default MainContext;
