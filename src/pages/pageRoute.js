import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import About from "./About";
import Dashboard from "./Dashboard";
import Home from "./Home";

const PageRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default PageRoute;
