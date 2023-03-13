import React from "react";
import "../../css/HomeRoute/CellphoneColors.css";
const CellphoneColors = ({ colorsRef }) => {
  return (
    <div className="cellphonecolors-container" ref={colorsRef}>
      {/* <h4 className="cellphonecolors-title">Choose your own style</h4> */}

      <img
        src="/assets/img/colors.png"
        alt="cellphone styles"
        className="cellphonecolors-img"
      />
    </div>
  );
};

export default CellphoneColors;
