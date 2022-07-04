import { useState } from "react";
import Count from "./count";

const CountBoi = () => {
  const [count, setCount] = useState(0);
  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <button className="counter--minus" onClick={subtract}>
        -
      </button>
      <Count number={count} />
      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
};

export default CountBoi;
