const misProductos = [
  {
    id: "doh001",
    nombre: "212 MEN - C.HERRERA",
    precio: 6800,
    img: "../img/doh/doh-212men-cherrera.webp",
    idCategoria: "masc",
  },
  {
    id: "doh002",
    nombre: "212 MEN HEROES - C.HERRERA",
    precio: 6800,
    img: "../img/doh/doh-212menheroes-chererra.webp",
    idCategoria: "masc",
  },
  {
    id: "doh003",
    nombre: "212 SEXY MEN - C.HERRERA",
    precio: 6800,
    img: "../img/doh/doh-212sexymen-cherrera.webp",
    idCategoria: "masc",
  },
  {
    id: "dof001",
    nombre: "LA VIE EST BELLE EN ROSE - LANCOME",
    precio: 6800,
    img: "../img/dom/dom-lavieestbelleroselancome.webp",
    idCategoria: "fem",
  },
  {
    id: "dof002",
    nombre: "LA VIE EST BELLE L'ECLAT - LANCOME",
    precio: 6800,
    img: "../img/dom/dom-lavieestbellelecla.webp",
    idCategoria: "fem",
  },
  {
    id: "dof003",
    nombre: "LA VIE EST BELLE LEGERE - LANCOME",
    precio: 6800,
    img: "../img/dom/dom-lavieestbellelegerelancome.webp",
    idCategoria: "fem",
  },
  {
    id: "dof004",
    nombre: "LA VIE EST BELLE EN ROSE - LANCOME",
    precio: 6800,
    img: "../img/dom/dom-lavieestbelleroselancome.webp",
    idCategoria: "fem",
  },
  {
    id: "dof005",
    nombre: "LA VIE EST BELLE L'ECLAT - LANCOME",
    precio: 6800,
    img: "../img/dom/dom-lavieestbellelecla.webp",
    idCategoria: "fem",
  },
  {
    id: "dof006",
    nombre: "LA VIE EST BELLE LEGERE - LANCOME",
    precio: 6800,
    img: "../img/dom/dom-lavieestbellelegerelancome.webp",
    idCategoria: "fem",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 1000);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id === id);
      resolve(producto);
    }, 1000);
  });
};

//RETORNAR ARRAY CARTEGORÍA

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(
        (prod) => prod.idCategoria === idCategoria
      );
      resolve(productosCategoria);
    }, 1000);
  });
};
