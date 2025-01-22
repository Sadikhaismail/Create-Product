import React from "react";
import { MdChevronRight } from "react-icons/md";
import "./AdminCreateProduct.css"; // Import your CSS file for styling

const AdminCreateProduct = () => {
  return (
    <div className="product-header">
      {/* Left Section */}
      <div className="left-section">
        <h1>CREATE PRODUCT</h1>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>Ecommerce</h2>
        <MdChevronRight size={24} />
        <h2 style={{ color: "rgb(73, 80, 87)" }}>Create Product</h2>


      </div>
    </div>
  );
};

export default AdminCreateProduct;
