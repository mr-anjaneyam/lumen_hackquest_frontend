import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";
import "../../assets/styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar open/close state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className={`main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>
        {/* Navbar */}
        <Navbar onMenuClick={toggleSidebar} />

        {/* Dashboard Header */}
        <div className="dashboard-header">
          <h1>Welcome, Admin</h1>
          <p>Here's an overview of the system status and recent activities.</p>
        </div>

        {/* Widgets Section */}
        <div className="dashboard-widgets">
          <div className="widget">
            <h3>Total Products</h3>
            <p>150</p>
          </div>
          <div className="widget">
            <h3>Total Suppliers</h3>
            <p>45</p>
          </div>
          <div className="widget">
            <h3>Low Stock Alerts</h3>
            <p>10</p>
          </div>
          <div className="widget">
            <h3>Pending Orders</h3>
            <p>8</p>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="dashboard-section">
          <h2>Recent Activities</h2>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-01-03</td>
                <td>Stock added for Product A</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>2025-01-02</td>
                <td>Order placed for Supplier X</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>2025-01-01</td>
                <td>User Admin created</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Reports Section */}
        <div className="dashboard-section">
          <h2>Reports</h2>
          <div className="dashboard-reports">
            <div className="report-card">Stock Levels Report</div>
            <div className="report-card">Supplier Performance Report</div>
            <div className="report-card">Sales Trends Report</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
