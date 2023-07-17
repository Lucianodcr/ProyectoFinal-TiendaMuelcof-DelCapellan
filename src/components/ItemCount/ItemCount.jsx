import { useState } from "react";
import "./ItemCount.css"

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
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
    </>
  );
};

export default ItemCount;
