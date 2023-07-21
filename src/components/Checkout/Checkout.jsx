import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const { cart, clearCart, total, totalAmount } = useContext(CartContext);

  const formHandler = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !confirmEmail) {
      setError("Por favor complete todos los campos!");
      return;
    }

    if (email !== confirmEmail) {
      setError("Los campos del email no coinciden, intente nuevamente");
    }

    const order = {
      items: cart.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.amount,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), order)
      .then((docRef) => {
        setOrderId(docRef.id);
      })
      .catch((error) => {
        console.log(
          "A ocurrido un error al crear su orden, intente nuevamente",
          error
        );
        setError(
          "Se produjo un error al crear la orden, póngase en contacto con el soporte para solucionar el inconveniente"
        );
      });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-3xl mb-4 justify-center flex"> Checkout </h2>

      {cart.map((producto) => (
        <div key={producto.item.id} className="mb-4">
          <p>{producto.item.img}</p>
          <p>
            {producto.item.nombre} x {producto.amount}
          </p>
          <p>{producto.item.precio}</p>
        </div>
      ))}

      <hr className="mb-4" />

      <form onSubmit={formHandler} className="mb-4">
        <div className="mb-4">
          <label htmlFor="nombre" className="block font-semibold">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="apellido" className="block font-semibold">
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="telefono" className="block font-semibold">
            Teléfono
          </label>
          <input
            type="number"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmEmail" className="block font-semibold">
            Confirmar Email
          </label>
          <input
            type="email"
            id="confirmEmail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          type="submit"
          className="hover:bg-blue-400 bg-[#afddb8ff] hover:text-white font-bold py-2 px-4 rounded-full"
        >
          Finalizar Compra
        </button>
      </form>

      {orderId && (
        <strong>
          ¡Gracias por tu compra! Tu número de orden es {orderId}
        </strong>
      )}
    </div>
  );
};

export default Checkout;
