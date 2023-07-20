import { useState, createContext } from "react";

export const CartContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addProducts = (item, amount) => {
    const existingProduct = cart.find((prod) => prod.item.id === item.id);

    if (!existingProduct) {
      setCart((prev) => [...prev, { item, amount }]);
      setTotalAmount((prev) => prev + amount);
      setTotal((prev) => prev + item.precio * amount);
    } else {
      const cartUpdated = cart.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, candidad: prod.amount + amount };
        } else {
          return prod;
        }
      });
      setCart(cartUpdated);
      setTotalAmount((prev) => prev + amount);
      setTotal((prev) => prev + item.precio * amount);
    }
  };

  const deleteProduct = (id) => {
    const productoDeleted = cart.find((prod) => prod.item.id === id);
    const updatedCart = cart.filter((prod) => prod.item.id !== id);

    setCart(updatedCart);
    setTotalAmount((prev) => prev - productoDeleted.amount);
    setTotal(
      (prev) => prev - productoDeleted.item.precio * productoDeleted.amount
    );
  };

  const clearCart = () => {
    setCart([]);
    setTotalAmount(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProducts,
        deleteProduct,
        clearCart,
        total,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
