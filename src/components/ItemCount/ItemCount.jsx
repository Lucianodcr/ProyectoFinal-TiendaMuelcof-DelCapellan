import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, addToCart }) => {
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
      <div className="flex flex-col items-center ">
        <div className="grid grid-flow-col m-5">
          <button
            onClick={decrement}
            className="rounded-full bg-blue-500 font hover:bg-[#afddb8ff] text-white w-10 h-10 font-bold tamtext"
          >
            -
          </button>
          <span className="rounded-full bg-[#ffffff] font text-black w-40 font-extrabold tamtext">
          
            {count}
          </span>
          <button
            onClick={increment}
            className="rounded-full bg-blue-500 hover:bg-[#afddb8ff] text-white w-10 h-10 font-bold tamtext"
          >
            +
          </button>
        </div>

        <div className=" flex  my-10 text-center  ">
          <button
            onClick={() => addToCart(count)}
            className="bg-blue-500  hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
