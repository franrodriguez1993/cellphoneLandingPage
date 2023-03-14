import React from "react";
import "../../css/HomeRoute/CellphonePrices.css";
const CellphonePrices = ({ pricesRef }) => {
  return (
    <div className="CellphonePrices-container" ref={pricesRef}>
      <img
        src="/assets/img/colors.png"
        alt="cellphone styles"
        className="CellphonePrices-img"
      />

      <section className="price-section">
        <div className="ps-text">
          <div className="ps-text_card">
            <b className="ps-text_card--title">Standard Version</b>
            <p className="ps-text_card--memory">32 GB memory</p>
            <p className="ps-text_card--price">$699</p>
          </div>
          <div className="ps-text_card">
            <b className="ps-text_card--title">Ultimate Version</b>
            <p className="ps-text_card--memory">64 GB memory</p>
            <p className="ps-text_card--price">$899</p>
          </div>
        </div>
        <img
          src="/assets/img/motorola.png"
          alt="motorola cellphone"
          className="ps-img"
        />
      </section>
    </div>
  );
};

export default CellphonePrices;
