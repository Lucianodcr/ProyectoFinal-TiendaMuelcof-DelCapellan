import { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (conut > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <button onClick={decrement}> - </button>
      <span> {count} </span>
      <button onClick={increment}> + </button>
    </>
  );
};

export default ItemCount;
