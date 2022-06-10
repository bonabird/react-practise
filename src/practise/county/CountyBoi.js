import { useState } from "react";
import Count from "./Count";

export default function CountyBoi() {
    // Holds the state of the number
    const [count, setCount] = useState(0)
    // Function called when the + button is clicked
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    // Function called when the - button is clicked
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>-</button>
            <Count number={count}  />
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}