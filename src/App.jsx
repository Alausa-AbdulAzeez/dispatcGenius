import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dispatch" element={<Home />} />
        <Route path="/publishing" element={<Home />} />
        <Route path="/travels" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
