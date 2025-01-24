import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io"; // Import the dropdown icon
import "./ProductCategories.css"; // Import the CSS file

const ProductCategories = () => {
  const [category, setCategory] = useState("Appliances");
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = [
    "Appliances",
    "Automotive Accessories",
    "Electronics",
    "Fashion",
    "Furniture",
    "Grocery",
    "Kids",
    "Watches",
  ];

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setShowDropdown(false);
  };

  return (
    <div className="product-categories">
      <div className="heading-section">

      <h3>Product Categories</h3>
       
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ margin: 0 }}>Select Product Category</p>
        <button className="add-new-button">Add New</button>
      </div>
      {/* Custom Dropdown */}
      <div className="custom-dropdown">
        <div
          className="custom-dropdown-selected"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>{category}</span>
          <IoIosArrowDown
            className={`dropdown-icon ${showDropdown ? "rotate-icon" : ""}`}
          />
        </div>
        {showDropdown && (
          <ul className="custom-dropdown-list">
            {categories.map((cat, index) => (
              <li
                key={index}
                className="custom-dropdown-item"
                onClick={() => handleCategorySelect(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </div>
  );
};

export default ProductCategories;
