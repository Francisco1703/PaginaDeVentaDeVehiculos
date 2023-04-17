import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="carrito">
      <img
        className="imgCarrito"
        src="../Img/carrito.png"
        alt="Imagen del Carrito"
      />
      <strong className="strong">0</strong>
    </div>
  );
};

export default CartWidget;
