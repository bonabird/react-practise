import { useState } from "react";

export default function Contitonal() {
    // Handles state and initilaises the message
    const [messages, setMessages] = useState(["A"])

    return (
        <div>
            {
                messages.length === 0 ?
                    <h1>You're all caught up!</h1> :
                    <h1>You have {messages.length} unread
                        {messages.length > 1 ? " messages" : " message"}</h1>
            }
        </div>
    )
}