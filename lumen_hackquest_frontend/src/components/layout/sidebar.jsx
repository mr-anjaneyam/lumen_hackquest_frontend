import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Sidebar.css";

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard" className="sidebar-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/products" className="sidebar-link">
            Manage Products
          </Link>
        </li>
        <li>
          <Link to="/suppliers" className="sidebar-link">
            Manage Suppliers
          </Link>
        </li>
        <li>
          <Link to="/alerts" className="sidebar-link">
            Alerts
          </Link>
        </li>
        <li>
          <Link to="/reports" className="sidebar-link">
            Reports
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
