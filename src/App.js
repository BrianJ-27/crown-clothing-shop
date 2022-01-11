import React from "react";
import "./App.scss";
import HomePage from "./pages/homepage/Homepage.component";
import { Routes, Route } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
};

export default App;
