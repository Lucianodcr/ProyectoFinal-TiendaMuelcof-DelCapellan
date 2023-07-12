import { useState, useEffect } from "react";

//Importamos las funciones de Firebase que necesitamos para mostrar los productos.
import { getDocs, collection, query, where, doc, updateDoc } from "firebase,firestore";

//getDocs me permite obtener los documentos de una coleccion
//colection permite obtenet coleccion.
//query la uso cuando quiero generar una consulta.
//where la uso para agregar filtros a mis consultas.

import { db } from "../../services/config";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const misProductos = query(
      collection(db, "products"),
      where("precio", "<", 500)
    );

    getDocs(misProductos).then((res) => {
      setProducts(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [products]);


  const stockDiscount= async (product) =>{
    const refProduct = doc(db, "product", product.id);
    const newStock = product.stock - 1;
    await updateDoc(refProduct, { stock: newStock });
  }

  return (
    <>
      <h2>Productos</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.precio}</p>
            <button onClick={()=> stockDiscount(product)}>Comprar</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
