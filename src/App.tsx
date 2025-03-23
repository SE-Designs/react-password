import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Generator from "./pages/Generator";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import React from "react";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generator" element={<Generator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
