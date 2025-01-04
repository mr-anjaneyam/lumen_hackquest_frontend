import React from "react";
import "../../assets/styles/Navbar.css";

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="hamburger" onClick={onMenuClick}>
          ☰
        </button>
        <h1>Telecom Inventory</h1>
      </div>
      <div className="navbar-actions">
        <button className="btn">Notifications</button>
        <button className="btn">Profile</button>
        <button className="btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
