import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    const newDoc = doc(db, "inventario", idItem);

    getDoc(newDoc)
      .then((res) => {
        const data = res.data();
        const newProduct = { id: res.id, ...data };
        setProducto(newProduct);
      })
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;