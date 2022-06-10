import { useEffect, useState } from "react"

export default function WIndowTrackerBoi() {
    // state the stores the value of the window whenever it changes
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    // Gets called everytime the window changes and uodates the value
    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}