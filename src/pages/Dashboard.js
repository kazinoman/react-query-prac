import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Dashboard component.</h2>
      <p onClick={() => navigate("/about")}>About page</p>
      <p onClick={() => navigate("/")}>Home</p>
    </div>
  );
};

export default Dashboard;
