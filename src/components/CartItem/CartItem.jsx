import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ item, amount }) => {
  const { deleteProduct } = useContext(CartContext);

  return (
    <div key={item.id} className="bg-white p-4 rounded shadow-md mb-4">
      <h4 className="text-lg font-semibold">{item.nombre}</h4>
      <p>Cantidad: {amount}</p>
      <p>Precio: $ {item.precio}</p>
      <button
        onClick={() => deleteProduct(item.id)}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
      >
        Eliminar
      </button>
      <hr className="my-2" />
    </div>
  )
}

export default CartItem
