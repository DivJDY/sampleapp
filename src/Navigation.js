// App.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import HomePage from "./screens/HomePage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="home" element={<HomePage />} />
    </Routes>
  );
};

export default Navigation;
