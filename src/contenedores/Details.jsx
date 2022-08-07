import { Link, NavLink, useParams } from "react-router-dom";
import { useMask } from "../utiles/MainContext";
import "../componentes/css/details.css";

const Details = (props) => {
  const { valor } = useMask();

  const { id } = useParams();
  const resultado = valor.find((item) => item.id == id);

  return (
    <div className="details_wrapper">
      <div className="details">
        <p>{resultado.nombre}</p>
        <p>{resultado.marca}</p>
        <p>{resultado.descripcion}</p>
      </div>
    </div>
  );
};

export default Details;
