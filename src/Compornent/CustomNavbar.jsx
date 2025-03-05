import React, { useState } from "react";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <a href="#home" className="logo">
        Obadimu <span>Adedamola</span>
      </a>

      {/* Menu Icon */}
      <CiMenuBurger id="menu-icon" onClick={toggleMenu} />

      {/* Navigation Links */}
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <a href="#" className="active" onClick={toggleMenu}>
          Home
        </a>
        <a href="#" onClick={toggleMenu}>
          Education
        </a>
        <a href="#" onClick={toggleMenu}>
          Service
        </a>
        <a href="#" onClick={toggleMenu}>
          Testimonials
        </a>
        <a href="#" onClick={toggleMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default CustomNavbar;
