import { useState } from "react";

export default function Conditional() {
  const [messages, setMessages] = useState<string[]>(["A"]);

  const messagesList = messages.map((message, i)=><p key={i}>{message}</p>
  )

  return (
    <div>
      <button
        onClick={() => {
          setMessages((prevArray) => {
            return [...prevArray, "Another Message"];
          });
        }}
      >
        +
      </button>
      {messages.length === 0 ? (
        <h1>You're all caught up!</h1>
      ) : (
        <h1>
          You have {messages.length} unread
          {messages.length > 1 ? " messages" : " message"}
        </h1>
      )}
      {messagesList}
      <button
        onClick={() => {
          setMessages(messages.slice(0, -1));
        }}
      >
        -
      </button>
    </div>
  );
}
