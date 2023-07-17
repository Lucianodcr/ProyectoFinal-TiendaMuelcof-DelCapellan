import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [addStock, setAddStock] = useState(0);

  const amountStock = (amount) => {
    setAddStock(amount);
    console.log("Productos agregados: " + amount);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md max-w-md mx-auto">
      <img className="w-64 h-64 object-cover mb-4" src={img} alt={nombre} />
      <h3 className="text-xl font-semibold">{nombre}</h3>
      <p className="text-gray-600">Precio: $ {precio}</p>
      <p className="text-gray-600">Id: {id}</p>
      {addStock > 0 ? (
        <Link
          to="/cart"
          className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Terminar compra
        </Link>
      ) : (
        <ItemCount initial={1} stock={stock} addfunction={amountStock} />
      )}
    </div>
  );
};

export default ItemDetail;
