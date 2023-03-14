import React from "react";
import "../../css/Accesories/Navbar.css";

const Navbar = ({
  characteristicsRef,
  bannerRef,
  pricesRef,
  scrollToSection,
}) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          MOTO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li
              className="nav-item nav-link"
              onClick={() => scrollToSection(characteristicsRef)}
            >
              Features
            </li>
            <li
              className="nav-item nav-link"
              onClick={() => scrollToSection(bannerRef)}
            >
              Comunication
            </li>
            <li
              className="nav-item nav-link"
              onClick={() => scrollToSection(pricesRef)}
            >
              Prices
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
