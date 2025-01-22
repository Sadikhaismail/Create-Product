import React, { useState } from "react";
import "./ShortDescription.css";

function ShortDescription() {
  const [description, setDescription] = useState("");

  return (
    <div className="short-description-container">
        <div className="divtag">
      <label className="description-label">Product Short Description</label>
      </div>
      <p className="addshort">Add Short Description For Product</p>
      <textarea
        className="description-textarea"
        placeholder="Must enter a minimum of 100 characters"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>
  );
}

export default ShortDescription;
