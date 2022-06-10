import { useEffect, useState } from "react";

export default function StarBoi() {
    // Stores the starwars data within it
    const [starWarsData, setStarWarsData] = useState({})
    // Manges the value of count
    const [count, setCount] = useState(1)
    // Fecthes the Star Wars data from the API and stores it in the object
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Generererate next character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}