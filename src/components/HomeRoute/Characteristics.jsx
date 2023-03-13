import React from "react";
import "../../css/HomeRoute/Characteristics.css";

//SVG Imports:
import camIcon from "../../svg/cam.svg";
import cpuIcon from "../../svg/cpu.svg";
import phoneIcon from "../../svg/smartphone.svg";
import videoIcon from "../../svg/video.svg";

const Characteristics = ({ characteristicsRef }) => {
  return (
    <div className="characteristics-container" ref={characteristicsRef}>
      <h3 className="cc-title"> New characteristics </h3>

      <section className="cc-box">
        <article className="cc-box-card">
          <img src={camIcon} alt="cam icon" className="cc-box-card_img" />
          <div className="cc-box-card_text">
            <p>Take 4K pictures of everything</p>
          </div>
        </article>

        <article className="cc-box-card">
          <img src={videoIcon} alt="cam icon" className="cc-box-card_img" />
          <div className="cc-box-card_text">
            <p>Record amazing videos</p>
          </div>
        </article>

        <article className="cc-box-card">
          <img src={cpuIcon} alt="cam icon" className="cc-box-card_img" />
          <div className="cc-box-card_text">
            <p>The most advanced technology in processors</p>
          </div>
        </article>
        <article className="cc-box-card">
          <img src={phoneIcon} alt="cam icon" className="cc-box-card_img" />
          <div className="cc-box-card_text">
            <p>Aesthetic design</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Characteristics;
