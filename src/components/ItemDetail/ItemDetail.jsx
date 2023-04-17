import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const handlerCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos Agregados: " + cantidad);
  };

  return (
    <div className="contenedorItem">
      <div className="imgContenedor">
        <img className="imgDetail" src={img} alt={nombre} />
        {agregarCantidad > 0 ? (
          <Link className="terminarCompra" to={"/cart"}>
            Terminar Compra
          </Link>
        ) : (
          <ItemCount inicial={1} stock={stock} onAdd={handlerCantidad} />
        )}
      </div>

      <div className="divisor">
        <h2 className="nombre"> {nombre} </h2>
        <h2 className="precio"> {precio} </h2>
        <h2 className="id"> ID: {id} </h2>
        <p className="descripcion">
          <span className="caracteristicas"> Características: </span> Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsa ipsam
          nisi odio autem repellat dolor harum nam, aliquid sequi velit quod
          accusantium totam ullam maxime aspernatur pariatur eveniet impedit.
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
