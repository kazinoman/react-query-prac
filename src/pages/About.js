import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  console.log(loc);
  return (
    <div>
      <p onClick={() => navigate("/")}>Home</p>
      <p onClick={() => navigate("/dashboard")}>Dashboard</p>
      <br />
      <h1>Usign history</h1>
    </div>
  );
};

export default About;
