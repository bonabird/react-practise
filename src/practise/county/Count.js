export default function Count(props) {
    // Function that inherits the amount from the state and displays it
    return (
        <div className="counter--count">
            <h1>{props.number}</h1>
        </div>
    )
}