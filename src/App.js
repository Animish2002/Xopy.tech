import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Demo from "./demo/demo";
import ScrollAnimation from "./demo/scrollanimation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/scroll" element={<ScrollAnimation />} />
      </Routes>
    </Router>
  );
}

export default App;
