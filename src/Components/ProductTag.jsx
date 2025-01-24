import React, { useState } from "react";
import "./ProductTag.css";

const ProductTags = ({ onTagsChange }) => {
  const [tags, setTags] = useState(["cotton"]); // Default tag is "cotton"
  const [inputValue, setInputValue] = useState(""); // Input value
  const [showDropdown, setShowDropdown] = useState(false); // Show dropdown when typing

  // Handle adding a new tag
  const handleAddTag = (e) => {
    if (e.key === "Enter" && inputValue.trim() && tags.length === 0) {
      const newTag = `"${inputValue}"`; // Wrap tag in double quotes
      const updatedTags = [newTag]; // Only add the new tag
      setTags(updatedTags); // Update tags state
      setInputValue(""); // Clear input
      setShowDropdown(false); // Hide dropdown
      onTagsChange?.(updatedTags); // Notify parent
    } else if (tags.length > 0) {
      alert("Only one tag is allowed!");
    }
  };

  // Handle removing a tag
  const handleRemoveTag = () => {
    setTags([]); // Clear tags
    setInputValue(""); // Clear input
    onTagsChange?.([]); // Notify parent of empty tag state
  };

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Show dropdown only when input is not empty
    setShowDropdown(value.trim() !== "");
  };

  return (
    <div className="card">
      <div className="headertag">
        <h5 className="productTag">Product Tags</h5>
      </div>
      <div className="cardbody">
        <div className="hstack">
          <div className="flex-grow-1">
            <div className="choices">
              <div className="choices__inner">
                {/* Display tags */}
                <div className="choices__list choices__list--multiple">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="choices__item choices__item--selectable"
                    >
                      {tag}
                      <button
                        type="button"
                        className="choices__button"
                        onClick={handleRemoveTag}
                      >
                        &#10006; {/* Add remove icon */}
                      </button>
                    </div>
                  ))}
                </div>
                {/* Input for adding new tags */}
                <input
                  type="text"
                  className="choicesinput"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleAddTag}
                  disabled={tags.length > 0} // Disable input when tag exists
                />
                {/* Dropdown for hint */}
                {showDropdown && tags.length === 0 && (
                  <div className="dropdown">
                    <div className="dropdown-item">
                      Press Enter to add the tag: "{inputValue}"
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTags;
