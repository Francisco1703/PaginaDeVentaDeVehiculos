const productos = [
  {
    nombre: "VolksWagen Amarok 3.0 V6 Extreme",
    precio: "U$S 48.000",
    img: "../img/amarok.png",
    stock: "2",
    id: "1",
    idCat: "1",
  },
  {
    nombre: "VolksWagen Scirocco1.4 Tsi 160cv",
    precio: "U$S 25.000",
    img: "../img/scirocco.png",
    stock: "1",
    id: "2",
    idCat: "1",
  },
  {
    nombre: "Mercedes Benz Clase GLC",
    precio: "U$S 59.000",
    img: "../img/camioneta Mercedes Benz.png",
    stock: "3",
    id: "3",
    idCat: "1",
  },
  {
    nombre: "BMW Serie 2 Coupé",
    precio: "U$S 49.500",
    img: "../img/auto BMW.png",
    stock: "5",
    id: "4",
    idCat: "1",
  },
  {
    nombre: "Benelli Trk 502",
    precio: "U$S 12.500",
    img: "../img/moto benelli.png",
    stock: "4",
    id: "5",
    idCat: "2",
  },
  {
    nombre: "Dukati Monster 797",
    precio: "U$S 16.900",
    img: "../img/moto ducati.png",
    stock: "7",
    id: "6",
    idCat: "2",
  },

  {
    nombre: "BMW R 1200 Gs",
    precio: "U$S 44.900",
    img: "../img/moto bmw.png",
    stock: "3",
    id: "7",
    idCat: "2",
  },
  {
    nombre: "Indian ftr 1200s",
    precio: "U$S 29.900",
    img: "../img/moto indian.png",
    stock: "4",
    id: "8",
    idCat: "2",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getUnProducto = (id) => {
  return new Promise((res) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      res(producto);
    }, 2000);
  });
};

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((res) => {
    setTimeout(() => {
      const productosPorCategoria = productos.filter(
        (prod) => prod.idCat === idCategoria
      );
      res(productosPorCategoria);
    }, 2000);
  });
};
