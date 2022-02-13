import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home page</h2>
      <button onClick={() => navigate("/about")}>about page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard page</button>
      <br />
    </div>
  );
};

export default Home;
