import Body from "./Body";
import Header from "./Header";
import { useState } from "react"

function TopLevelBoi() {
  // Sets the user (Not the most efficient way, but used to demonstrate a use case)
    const [user, setUser] = useState("Mike Hunt")

    return (
      <div className="App">
          <Header user={user}/>
          <Body user={user}/>
        </div>
    );
  }
  
  export default TopLevelBoi;
  