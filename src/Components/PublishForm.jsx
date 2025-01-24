import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./PublishForm.css";

// Reusable Dropdown Component
const Dropdown = ({ label, options, selectedValue, onSelect, dropdownWidth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="formGroupStyle">
      <label className="labelStyle">{label}</label>
      <div className="custom-dropdown">
        <button
          className="custom-dropdown-button"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {selectedValue}
          <IoIosArrowDown style={{ marginLeft: dropdownWidth || "auto" }} />
        </button>
        {isOpen && (
          <div className="custom-dropdown-content">
            {options.map((option, index) => (
              <div
                key={index}
                className={`dropdown-option ${
                  selectedValue === option ? "selected-option" : ""
                }`}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const PublishForm = ({ onStatusChange, onVisibilityChange }) => {
  const [status, setStatus] = useState("Published");
  const [visibility, setVisibility] = useState("Public");

  return (
    <div>
      <div className="publishHeadingContainerStyle">
        <h3 className="headingStyle">Publish</h3>
      </div>

      <div className="publishFormContainerStyle">
        <div className="formContainerStyle">
          <Dropdown
            label="Status"
            options={["Published", "Draft", "Scheduled"]}
            selectedValue={status}
            onSelect={(value) => {
              setStatus(value);
              if (onStatusChange) onStatusChange(value);
            }}
            dropdownWidth="250px"
          />
          <Dropdown
            label="Visibility"
            options={["Public", "Hidden"]}
            selectedValue={visibility}
            onSelect={(value) => {
              setVisibility(value);
              if (onVisibilityChange) onVisibilityChange(value);
            }}
            dropdownWidth="270px"
          />
        </div>
      </div>
    </div>
  );
};

export default PublishForm;
