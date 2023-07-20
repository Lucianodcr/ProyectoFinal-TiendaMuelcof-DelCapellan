import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {cart, clearCart, total, totalAmount} = useContext(CartContext);

    if (totalAmount === 0){
        return (
            <>
            <h2> No agregaste ningún producto al carrito! </h2>
            <Link to="/"> Ver Productos </Link>
            </>
        )
    }

  return (
    <div>
        {cart.map(producto => <CartItem key={producto.id} {...producto}/>)}
        <h3>Total: $ {total} </h3>
        <h3>Cantidad Total: {totalAmount} </h3>
        <button onClick={()=> clearCart()}> Vaciar Carrito </button>
        <Link to="/chekout"> Finalizar Compra </Link>
    </div>
  )
}

export default Cart