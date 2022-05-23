import Body from "./Body";
import Header from "./Header";
import { useState } from "react"

function TopLevelBoi() {
    const [user, setUser] = useState("Mike Hunt")

    return (
      <div className="App">
          <Header user={user}/>
          <Body user={user}/>
        </div>
    );
  }
  
  export default TopLevelBoi;
  