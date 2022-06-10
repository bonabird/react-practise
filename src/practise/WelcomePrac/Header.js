import { useState } from "react";

export default function Header(props) {
    // After inheriting the user, this functions displays the users name
    return (
        <header>
            <p> Current User: {props.user}</p>
        </header>
    )
}