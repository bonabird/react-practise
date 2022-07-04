import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/nav";
import AddThings from "./pages/addthings";
import Conditional from "./pages/conditional";
import CountBoi from "./pages/county/countyboi";
import StarBoi from "./pages/starboi";
import TopLevelBoi from "./pages/welcomeprac/toplevelboi";
import WindowBoi from "./pages/windowboi/windowboi";
import YeeeNaaa from "./pages/yeeenaaa";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/starboi" element={<StarBoi />} />
        <Route path="/countyboi" element={<CountBoi />} />
        <Route path="/yeeenaaa" element={<YeeeNaaa />} />
        <Route path="/addThings" element={<AddThings />} />
        <Route path="/toplevelboi" element={<TopLevelBoi />} />
        <Route path="/conditional" element={<Conditional />} />
        <Route path="/windowboi" element={<WindowBoi />} />
      </Routes>
    </div>
  );
}

export default App;
