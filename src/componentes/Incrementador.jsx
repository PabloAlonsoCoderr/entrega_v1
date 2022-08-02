import { useState } from "react";
import { Link } from "react-router-dom";

const Incrementador = () => {
  const [valor, Setvalor] = useState(0);
  const [boton, Setboton] = useState("agregar_carrito");

  function llamado() {
    Setboton("ver_carrito");
  }

  function aumentar() {
    if (valor < 5) {
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
      <p>{valor}</p>
      <button onClick={aumentar}>+</button>
      <button onClick={disminuir}>-</button>
      {boton === "agregar_carrito" ? (
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
