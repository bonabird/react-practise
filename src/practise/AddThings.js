import { useState } from "react"

export default function AddThings() {
    const [thingsArray, setThingsArray] = useState (["Thing 1", "Thing 2"])

    function AddItem() {
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thinkin ${prevThingsArray.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button onClick={AddItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}  