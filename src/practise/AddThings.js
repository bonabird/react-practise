import { useState } from "react"

export default function AddThings() {
    // Sets the initial values of the array and handles the new values
    const [thingsArray, setThingsArray] = useState (["Thing 1", "Thing 2"])
    // Adds a new value to the array
    function AddItem() {
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thinkin ${prevThingsArray.length + 1}`]
        })
    }
    // Constructs a element that can be used to display the elements in the array
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button onClick={AddItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}  