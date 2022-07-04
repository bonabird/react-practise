import { useState } from "react";
import Body from "./body";
import Header from "./header";
import NameChange from "./namechange";

const TopLevelBoi = () => {
  const [user, setUser] = useState<string>("Mike Hunt");
  const [showInput, setShowInput] = useState<boolean>(false);

  return (
    <div className="App">
      <Header user={user} />
      <Body user={user} />
      <button
        onClick={() => {
          setShowInput(!showInput);
        }}
      >
        Click Here!
      </button>
      {showInput && <NameChange setUser={setUser} user={user} />}
    </div>
  );
};
export default TopLevelBoi;
