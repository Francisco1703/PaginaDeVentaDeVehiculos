import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="cardProduct">
      <p className="nombreItem"> {nombre} </p>
      <p className="precioItem"> {precio} </p>
      <p className="idItem">ID : {id} </p>
      <img className="imgProducts" src={img} alt={nombre} />
      <Link className="btnItem" to={`/item/${id}`}>
        Ver Detalles
      </Link>
    </div>
  );
};

export default Item;
