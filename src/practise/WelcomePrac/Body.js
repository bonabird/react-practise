export default function Body(props) {
        // After inheriting the user, this functions displays the users name
    return (
        <section>
            <h1>Welcome back, {props.user}!</h1>
        </section>

    )
}