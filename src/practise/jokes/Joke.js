import { useState } from "react"

export default function Joke(prop) {
    // Handles whther the punchline is hwon or not
    const [isShown, setIsShown] = useState(false)
    //Adjusts the state
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
    )
}