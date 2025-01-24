import React, { useState } from "react";
import "./ShortDescription.css";

function ShortDescription({ onChange }) {
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setDescription(value);

    // Check character count
    if (value.length < 100) {
      setError("Description must be at least 100 characters long.");
    } else {
      setError("");
    }

    // Callback to parent
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="short-description-container">
      <div className="divtag">
        <label htmlFor="description" className="description-label">
          Product Short Description
        </label>
      </div>
      <p className="addshort">Add Short Description For Product</p>
      <textarea
        id="description"
        className="description-textarea"
        placeholder="Must enter a minimum of 100 characters"
        value={description}
        onChange={handleChange}
      ></textarea>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default ShortDescription;
