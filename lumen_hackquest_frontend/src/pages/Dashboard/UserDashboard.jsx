import React, { useState, useEffect, useRef } from "react";
import UserNavbar from "../../components/layout/User_Navbar";
import UserSidebar from "../../components/layout/User_Sidebar";
import "../../assets/styles/Dashboard.css";

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // States for managing products and search
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([
    { name: "Product A", stock: 20 },
    { name: "Product B", stock: 50 },
    { name: "Product C", stock: 10 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Detect click outside of the sidebar to collapse it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false); // Collapse sidebar when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle search input and filter products
  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchQuery, products]);

  return (
    <div className="dashboard-container">
      {/* Sidebar with ref to detect clicks outside */}
      <UserSidebar ref={sidebarRef} isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className={`main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>
        {/* Navbar with onClick prop for sidebar toggle */}
        <UserNavbar onMenuClick={toggleSidebar} />

        {/* Dashboard Header */}
        <div className="dashboard-header">
          <h1>Welcome, User</h1>
          <p>Search for the products </p>
        </div>

        {/* Search Field */}
        <div className="search-section">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Products Section */}
        <div className="products-section">
          <h2>Available Products</h2>
          {filteredProducts.length > 0 ? (
            <ul className="product-list">
              {filteredProducts.map((product, index) => (
                <li key={index}>
                  <span>{product.name}</span> - <span>Stock: {product.stock}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
