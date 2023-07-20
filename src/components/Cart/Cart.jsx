import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
  const { cart, clearCart, total, totalAmount } = useContext(CartContext);

  if (totalAmount === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">No agregaste ningún producto al carrito!</h2>
        <Link to="/" className="text-white font-bold  bg-blue-500 px-10 py-2 rounded-full hover:bg-blue-600">Ver Productos</Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      {cart.map(producto => <CartItem key={producto.id} {...producto} />)}
      <h3 className="text-xl font-semibold mt-4">Total: $ {total}</h3>
      <h3 className="text-lg mt-2">Cantidad Total: {totalAmount}</h3>
      <button
        onClick={() => clearCart()}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Vaciar Carrito
      </button>
      <Link
        to="/chekout"
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Finalizar Compra
      </Link>
    </div>
  )
}

export default Cart