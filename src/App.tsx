import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/nav";
import NotFoundPage from "./pages/404";
import AddThings from "./pages/addthings";
import Conditional from "./pages/conditional";
import CountBoi from "./pages/county/countyboi";
import FormyBoi from "./pages/formyboi";
import FormyBoiTwo from "./pages/formyboitwo";
import FormyRework from "./pages/formyrework";
import MemeBoi from "./pages/meme/memeboi";
import StarBoi from "./pages/starboi";
import UseRefPrac from "./pages/userefprc";
import TopLevelBoi from "./pages/welcomeprac/toplevelboi";
import WindowBoi from "./pages/windowboi/windowboi";
import YeeeNaaa from "./pages/yeeenaaa";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" element={<Navigate replace to="/memeboi" />} />
        <Route path="/memeboi" element={<MemeBoi />} />
        <Route path="/starboi" element={<StarBoi />} />
        <Route path="/countyboi" element={<CountBoi />} />
        <Route path="/yeeenaaa" element={<YeeeNaaa />} />
        <Route path="/addThings" element={<AddThings />} />
        <Route path="/toplevelboi" element={<TopLevelBoi />} />
        <Route path="/conditional" element={<Conditional />} />
        <Route path="/windowboi" element={<WindowBoi />} />
        <Route path="/formyboi" element={<FormyBoi />} />
        <Route path="/formyrework" element={<FormyRework />} />
        <Route path="/anotherformyboi" element={<FormyBoiTwo />} />
        <Route path="/userefprac" element={<UseRefPrac />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
