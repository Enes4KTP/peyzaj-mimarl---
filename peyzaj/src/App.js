import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Projeler from "./Components/pages/Projeler";
import Header from "./Components/Header";
import Bitkiler from "./Components/pages/Bitkiler";
import Peyzaj from "./Components/pages/Peyzaj";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeler" element={<Projeler />} />
        <Route path="/bitkiler" element={<Bitkiler />} />
        <Route path="/peyzaj" element={<Peyzaj />} />
      </Routes>
    </div>
  );
}

export default App;
