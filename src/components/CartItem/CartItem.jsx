import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = (item, amount) => {
    const {deleteProduct} = useContext(CartContext);
  return (
    <div>
        <h4>{item.nombre}</h4>
        <p> Cantidad: {amount}</p>
        <p> Precio: $ {item.precio}</p>
        <button onClick={()=> deleteProduct(item.id)}> Elminar </button>
        <hr />
    </div>
  )
}

export default CartItem