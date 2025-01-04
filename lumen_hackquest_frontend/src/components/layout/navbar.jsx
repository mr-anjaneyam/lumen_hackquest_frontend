import React from "react";
import "../assets/styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
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
