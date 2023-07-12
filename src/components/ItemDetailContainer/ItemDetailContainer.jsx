import { useState, useEffect } from "react";
import { getUnProducto } from "../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
 
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();
   
  
    useEffect( () => {
      getUnProducto(idItem)
          .then( res => setProducto(res))
    }, [idItem])
    
    console.log(ItemDetailContainer)
    return (
      <div className=" pl-28 flex flex-row items- w-25 h-25">
        <ItemDetail  {...producto} />
      </div>
    )
  }

 export default ItemDetailContainer