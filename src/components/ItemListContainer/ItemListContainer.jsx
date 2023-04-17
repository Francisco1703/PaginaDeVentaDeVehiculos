import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria
      ? getProductosPorCategoria
      : getProductos;

    funcionProductos(idCategoria)
      .then((resolve) => setProductos(resolve))
      .catch((error) => console.log(error));
  }, [idCategoria]);

  return (
    <div className="bgDiv">
      <h1 className="text-center m-3 textContainer"> Vehículos </h1>
      <hr className="hr" />
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
