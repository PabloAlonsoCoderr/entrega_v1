import { Link, NavLink } from "react-router-dom";
import "./css/Cards.css";

const Cards = (props) => {
  return (
    <div className="cards">
      <div className="cards--1"></div>
      <div className="cards--2" key={props.id}>
        <p>{props.nombre}</p>
        <p>{props.marca}</p>
        <p>{props.precio}</p>
        <Link to={`/details/${props.id}`}>
          <button id={props.id} style={{ cursor: "pointer" }}>
            VER DETALLES
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
