import React, { useState } from "react";

export default function AddThings() {
  const [thingsArray, setThingsArray] = useState<string[]>(["Thing 1", "Thing 2"]);
  function AddItem() {
    setThingsArray((prevArray) => {
      return [...prevArray, `Thinking ${prevArray.length + 1}`];
    });
  }
  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);
  return (
    <div>
      <button onClick={AddItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}
