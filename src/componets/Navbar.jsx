import { useState } from "react";
import "../styles/navbar.css";

const MENU_ITEMS = ["Lorem", "Losum", "Dolor sitame", "Turodi", "Piscing"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const renderMenuItems = (className) => (
    <ul className={className}>
      {MENU_ITEMS.map((item) => (
        <li key={item}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="navbar-container">
      {renderMenuItems("navbar-menu")}

      <button
        className={`hamburger hamburger--spin ${isOpen ? "is-active" : ""}`}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div className={`overlay ${isOpen ? "open" : ""}`} role="menu">
        {renderMenuItems("overlay-menu")}
      </div>
    </nav>
  );
}
