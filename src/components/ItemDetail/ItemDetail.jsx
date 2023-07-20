import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [addStock, setAddStock] = useState(0);

  const { addProducts } = useContext(CartContext);

  const amountStock = (amount) => {
    setAddStock(amount);
    const item = { id, nombre, precio };
    addProducts(item, amount);
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
        <ItemCount initial={1} stock={stock} addToCart={amountStock} />
      )}
    </div>
  );
};

export default ItemDetail;
