import Cards from "../componentes/Cards";
import Promesa from "../utiles/Promesa";
import { useState, useEffect } from "react";
import "../componentes/css/List.css";

const List = () => {
  const [valor, setValor] = useState([]);

  useEffect(() => {
    Promesa()
      .then((resp) => setValor(resp))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="list_wrapper">
      {
        <div className="list">
          {valor.map((item) => (
            <Cards
              nombre={item.nombre}
              marca={item.marca}
              precio={item.precio}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
      }
    </div>
  );
};

export default List;
