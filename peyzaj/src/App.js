import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Projeler from "./Components/pages/Projeler";
import Header from "./Components/Header";
import Bitkiler from "./Components/pages/Bitkiler";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeler" element={<Projeler />} />
        <Route path="/bitkiler" element={<Bitkiler />} />
      </Routes>
    </div>
  );
}

export default App;
