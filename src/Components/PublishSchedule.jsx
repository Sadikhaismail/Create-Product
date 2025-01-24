import React, { useState } from "react";
import ReactFlatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Flatpickr styles
import "./PublishSchedule.css"; // Custom styles for time controls

const PublishSchedule = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null); // Set initial date to null
  const [error, setError] = useState(""); // State for error message

  const handleDateChange = (date) => {
    const selected = date[0];
    setSelectedDate(selected);

    // Validate the selected date (must be in the future)
    if (selected && selected < new Date()) {
      setError("Please select a future date and time.");
    } else {
      setError("");
      if (onDateChange) {
        onDateChange(selected); // Notify parent component
      }
    }
  };

 

  return (
    <div className="publishdiv">
      <div style={{ borderBottom: "1px solid #ddd" }}>
        <h3 className="publishhead">Publish Schedule</h3>
      </div>
      <div className="form-section">
        <div className="form-group">
          <label htmlFor="publish-date" className="publishlabel">
            Publish Date & Time
          </label>
          <div className="date-input-wrapper">
            <ReactFlatpickr
              id="publish-date"
              placeholder="Enter Publish Date" // Placeholder added
              value={selectedDate}
              onChange={handleDateChange}
              options={{
                enableTime: true,
                time_24hr: true,
              }}
              className="flatpickr-input"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
        
      </div>
    </div>
  );
};

export default PublishSchedule;
