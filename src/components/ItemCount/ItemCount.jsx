import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stock, initial, addToCart}) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

 

  return (
    <>
    <div className="flex flex-row justify-evenly align-center text-center items-center ">
      <button onClick={decrement} className="rounded-full bg-[#afddb8ff] font text-black w-10 h-10 font-bold tamtext" > - </button>
      <span className="rounded-full bg-[#ffffff] font text-black w-40 font-extrabold tamtext" > {count} </span>
      <button onClick={increment} className="rounded-full bg-[#afddb8ff] font text-black w-10 h-10 font-bold tamtext"> + </button>
      </div>
     
        <button onClick={()=> addToCart(count)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Agregar al Carrito
        </button>
     
      
    </>
  );
};

export default ItemCount;
