import React from "react";
import "../../css/HomeRoute/Index.css";
const Index = () => {
  return (
    <div className="index-container">
      <div className="index-presentation">
        <h1 className="indexroute-title">Ready for the next level?</h1>
        <h2 className="indexroute-subtitle">
          It's time to level up your experience
        </h2>
      </div>

      <img
        src="/assets/img/cellphone.png"
        alt="cellphone new"
        className="index-cellphone"
      />
    </div>
  );
};

export default Index;
