import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { StickyScrollRevealDemo } from "./components/Layout/StickyScrollRevealDemo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/demo" element={<StickyScrollRevealDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
