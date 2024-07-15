import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import ScrollAnimation from "./LandingPage/scrollanimation";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<ScrollAnimation />} />
      </Routes>
    </Router>
  );
}

export default App;
