import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main.page";

export const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};
