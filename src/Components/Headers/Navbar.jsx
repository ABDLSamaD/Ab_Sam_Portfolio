import { useState } from "react";
import { Link } from "react-router-dom";

const header = () => {
  // const [isMenuActive, setIsMenuActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <header>
        <div className="logo">
          <h1 className="text-4xl">Portfolio</h1>
        </div>
        <div
          className={`hamburger ${isMenuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line top"></div>
          <div className="line bottom"></div>
        </div>
      </header>
      <nav
        id="navMenu"
        className={`nav-menu p-2 ${isMenuActive ? "active" : ""}`}
      >
        <div
          className={`hamburger inside-nav ${isMenuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line top"></div>
          <div className="line bottom"></div>
        </div>
        <ul className="relative top-20">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="#/" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-between w-full">
          <span className="text-2xl text-cyan-50 tracking-wider hover:text-amber-600 transition-colors delay-150">
            BADIN, PK
          </span>
          <span className="text-2xl text-cyan-50 tracking-wider hover:text-amber-600 transition-colors delay-150">
            ab_d.Samad 2024
          </span>
        </div>
      </nav>
    </>
  );
};

export default header;
