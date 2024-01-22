import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Dispatch from "./pages/Dispatch";
import Publishing from "./pages/Publishing";
import Interstate from "./pages/Interstate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logistics" element={<Dispatch />} />
        <Route path="/publishing" element={<Publishing />} />
        <Route path="/travels" element={<Interstate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
