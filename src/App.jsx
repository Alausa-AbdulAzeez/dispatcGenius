import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Dispatch from "./pages/Dispatch";
import Publishing from "./pages/Publishing";
import Interstate from "./pages/Interstate";

function App() {
  // SCROLL VIEW
  const [isVisible, setIsVisible] = useState(false);

  // Check if the user has scrolled down enough to show the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can adjust the scroll behavior here
    });
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/logistics"
          element={<Dispatch isVisible={isVisible} scrollToTop={scrollToTop} />}
        />
        <Route path="/publishing" element={<Publishing />} />
        <Route path="/travels" element={<Interstate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
