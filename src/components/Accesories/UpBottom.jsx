import React from "react";
import "../../css/Accesories/UpBottom.css";
import up from "../../svg/up.svg";
const UpBottom = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <img
      src={up}
      alt="upbottom"
      className="upbottom"
      onClick={handleScrollToTop}
    />
  );
};

export default UpBottom;
