import React from "react";
import "../../css/HomeRoute/BannerSection.css";

const BannerSection = ({ bannerRef }) => {
  return (
    <div className="bannersection-container" ref={bannerRef}>
      <img
        src="/assets/img/girl.png"
        alt="girl with phone"
        className="bannersection-img"
      />
      <div className="bannersection-container_text">
        <h4>Connected everywhere</h4>
        <p>
          With lightning-fast processing speeds and a crystal-clear display, our
          smartphone makes it easy to stay on top of your work, communicate with
          friends and family, and enjoy your favorite entertainment wherever you
          go. Plus, with a sleek and stylish design, it's sure to turn heads
          wherever you take it.
        </p>
      </div>
    </div>
  );
};

export default BannerSection;
