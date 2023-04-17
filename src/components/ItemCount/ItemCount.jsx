import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ inicial, stock, onAdd }) => {
  const [contador, setContador] = useState(inicial);

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  return (
    <>
      <div className="divContador">
        <button className="btnModificar" onClick={decrementar}>
          {" "}
          -{" "}
        </button>
        <p className="contador"> {contador} </p>
        <button className="btnModificar" onClick={incrementar}>
          {" "}
          +{" "}
        </button>
      </div>
      <button className="btnAgregar" onClick={() => onAdd(contador)}>
        Agregar al Carrito
      </button>
    </>
  );
};

export default ItemCount;
