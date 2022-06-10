import { useState } from "react";
import WIndowTrackerBoi from "./WindowTrackerBoi";

export default function WindowBoi() {
    // Handles the state of the boolean
    const [show, setShow] = useState(true)
    //Updates the state of the boolean
    function toggle() {
        setShow(prevShow => !prevShow)
    }
    return (
        <div className="container">
            <button onClick={toggle}>
                Toggle a Window Tracker
            </button>
            {show && <WIndowTrackerBoi />}
        </div>

    )
}