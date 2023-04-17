import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    getUnProducto(idItem)
      .then((res) => setProducto(res))
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
