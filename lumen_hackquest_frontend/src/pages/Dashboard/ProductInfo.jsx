import React, { useEffect, useState } from "react";
import placeholderImage from "../../assets/images/sample.jpg";
import "../../assets/styles/ProductInfo.css";


const ProductInfoPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/src/assets/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  return (
    <div className="product-info-page">
      <h1>Available Product Data</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.ProductImage || placeholderImage}
              alt={product.ProductName}
              className="product-image"
            />
            <h3 className="product-name">{product.ProductName}</h3>
            <p className="product-description">{product.Description}</p>
            <p className="product-category">
              Category: {product.ProductCategoryName}
            </p>
            <p className="product-details">
              Model: {product.ModelNumber} | Serial: {product.SerialNumber}
            </p>
            <p className="product-stock">
              Stock Level: {product.StockLevel} | Reorder Point:{" "}
              {product.ReorderPoint}
            </p>
            <p className="product-supplier">
              Supplier: {product.SupplierName} (
              <a href={`mailto:${product.SupplierMail}`}>
                {product.SupplierMail}
              </a>
              )
            </p>
            <p className="product-order">
              Last Order: {product.OrderDate} | Quantity: {product.Quantity} | Status: {product.OrderStatus}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfoPage;
