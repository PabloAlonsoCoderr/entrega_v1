import { useState } from "react";
import { Link } from "react-router-dom";

const Incrementador = ({ inicial, stock_actualizado }) => {
  const [valor, Setvalor] = useState(inicial);
  const [boton, Setboton] = useState(true);

  function llamado() {
    Setboton("ver_carrito");
  }

  function aumentar() {
    if (valor < stock_actualizado) {
      Setvalor(valor + 1);
    } else {
      console.log("ERROR");
    }
  }

  function disminuir() {
    if (valor > 0) {
      Setvalor(valor - 1);
    } else {
      console.log("ERROR");
    }
  }

  return (
    <div>
      <p>
        SOY LAS UNIDADES AGREGADAS{" "}
        <strong style={{ color: "blue" }}>{valor}</strong>
      </p>
      <br></br>
      <p>
        SOY EL STOCK{" "}
        <strong style={{ color: "blue" }}>{stock_actualizado}</strong>
      </p>
      <button onClick={aumentar}>+</button>
      <button onClick={disminuir}>-</button>
      {boton === true ? (
        <button onClick={llamado}>AGREGAR</button>
      ) : (
        <Link to="/cart">
          <button>VER CARRITO</button>
        </Link>
      )}
    </div>
  );
};

export default Incrementador;
