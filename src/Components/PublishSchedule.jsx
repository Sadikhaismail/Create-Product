import React, { useState } from "react";
import ReactFlatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Flatpickr styles
import "./PublishSchedule.css"; // Custom styles for time controls
import ProductCategories from "./ProductCategories"; // Import ProductCategories component

const PublishSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(null); // Set initial date to null

  return (
    <div className="publishdiv">
<div style={{ borderBottom: "1px solid #ddd" }}>
      <h3 className="publishhead">Publish Schedule</h3>
      </div>
      <div className="form-section">
        <div className="form-group">
          <label className="publishlabel">Publish Date & Time</label>
          <div className="date-input-wrapper">
            <ReactFlatpickr
              placeholder="Enter Publish Date" // Placeholder added
              value={selectedDate}
              onChange={(date) => setSelectedDate(date[0])}
              options={{
                enableTime: true,
                time_24hr: true,
              }}
              className="flatpickr-input"
            />
          </div>
        </div>
      </div>

      {/* Adding Product Categories below the Publish Schedule */}
      <div className="product-categories-section">
        <ProductCategories /> {/* Render ProductCategories here */}
      </div>
    </div>
  );
};

export default PublishSchedule;
