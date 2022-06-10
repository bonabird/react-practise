import React, {useState} from "react"

export default function YeeeeNaaaa() {
    // Handles the state of the boolean
    const [isGoingOut, setIsGoingOut] = useState(true)
    // Changes the state of the boolean
    function ManageClick() {
        setIsGoingOut(prevState => !prevState)
    }

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out?</h1>
            <button className="state--value" onClick={ManageClick}></button>
            <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
    )
}