import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Accesories/Footer";
import Navbar from "../components/Accesories/Navbar";
import BannerSection from "../components/HomeRoute/BannerSection";
import CellphonePrices from "../components/HomeRoute/CellphonePrices";
import Characteristics from "../components/HomeRoute/Characteristics";
import Index from "../components/HomeRoute/Index";
import UpBottom from "../components/Accesories/UpBottom";
const Home = () => {
  const [showButtom, SetShowButton] = useState(false);
  const characteristicsRef = useRef();
  const bannerRef = useRef();
  const pricesRef = useRef();

  /** UP BUTTOM **/
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? SetShowButton(true) : SetShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  /** SCROLL TO SECTION **/
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Navbar
        characteristicsRef={characteristicsRef}
        bannerRef={bannerRef}
        pricesRef={pricesRef}
        scrollToSection={scrollToSection}
      />
      <Index />
      <Characteristics characteristicsRef={characteristicsRef} />
      <BannerSection bannerRef={bannerRef} />
      <CellphonePrices pricesRef={pricesRef} />
      <Footer />

      {showButtom && (
        <div className={`scrollToTop`}>
          <UpBottom />
        </div>
      )}
    </div>
  );
};

export default Home;
