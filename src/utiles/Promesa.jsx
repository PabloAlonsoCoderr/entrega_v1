import { Productos } from "./Productos";

const Promesa = () => {
  return new Promise((resolve, reject) => {
    resolve(Productos);
    reject(console.log("no anda"));
  });
};

export default Promesa;
