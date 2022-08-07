import Cards from "../componentes/Cards";
import { useMask } from "../utiles/MainContext";
import "../componentes/css/List.css";

const List = () => {
  const { valor } = useMask();

  return (
    <div className="list_wrapper">
      {
        <div className="list">
          {valor.map((item) => (
            <Cards
              nombre={item.nombre}
              marca={item.marca}
              precio={item.precio}
              cantidad={item.cantidad}
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
