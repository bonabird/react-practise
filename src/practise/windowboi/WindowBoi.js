import { useState } from "react";
import WIndowTrackerBoi from "./WindowTrackerBoi";

export default function WindowBoi() {
    const [show, setShow] = useState(true)
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