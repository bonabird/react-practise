import { useState } from "react";

const YeeeNaaa = () => {
  const [isGoingOut, setIsGoingOut] = useState<boolean>(true);

  function manageClick() {
    setIsGoingOut(!isGoingOut);
  }
  return (
    <div>
      <h1 className="state--title">Do I feel like going out?</h1>
      <button className="state--value" onClick={manageClick}>
        ChangeMyMind
      </button>
      <h1>{isGoingOut ? "Yes" : "No"}</h1>
    </div>
  );
};

export default YeeeNaaa;
