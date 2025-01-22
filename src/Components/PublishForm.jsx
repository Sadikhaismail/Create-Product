import React, { useState } from "react";
import PublishSchedule from "./PublishSchedule";
import { IoIosArrowDown } from "react-icons/io";
import "./PublishForm.css";

const PublishForm = () => {
  const [status, setStatus] = useState("Published");
  const [visibility, setVisibility] = useState("Public");
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [visibilityDropdownOpen, setVisibilityDropdownOpen] = useState(false);

  const toggleStatusDropdown = () => {
    setStatusDropdownOpen(!statusDropdownOpen);
  };

  const toggleVisibilityDropdown = () => {
    setVisibilityDropdownOpen(!visibilityDropdownOpen);
  };

  return (
    <div>
      <div className="publishHeadingContainerStyle">
        <h3 className="headingStyle">Publish</h3>
      </div>

      <div className="publishFormContainerStyle">
        <div className="formContainerStyle">
          <div className="formGroupStyle">
            <label className="labelStyle">Status</label>
            <div className="custom-dropdown">
              <button
                className="custom-dropdown-button"
                onClick={toggleStatusDropdown}
                aria-haspopup="true"
                aria-expanded={statusDropdownOpen}
              >
                {status} <IoIosArrowDown style={{ marginLeft: "202px" }} />
              </button>
              {statusDropdownOpen && (
                <div className="custom-dropdown-content">
                  <div onClick={() => { setStatus("Published"); setStatusDropdownOpen(false); }}>Published</div>
                  <div onClick={() => { setStatus("Draft"); setStatusDropdownOpen(false); }}>Draft</div>
                  <div onClick={() => { setStatus("Scheduled"); setStatusDropdownOpen(false); }}>Scheduled</div>
                </div>
              )}
            </div>
          </div>
          <div className="formGroupStyle">
            <label className="labelStyle">Visibility</label>
            <div className="custom-dropdown">
              <button
                className="custom-dropdown-button"
                onClick={toggleVisibilityDropdown}
                aria-haspopup="true"
                aria-expanded={visibilityDropdownOpen}
              >
                {visibility} <IoIosArrowDown style={{  marginLeft: "225px" }} />
              </button>
              {visibilityDropdownOpen && (
                <div className="custom-dropdown-content">
                  <div onClick={() => { setVisibility("Public"); setVisibilityDropdownOpen(false); }}>Public</div>
                  <div onClick={() => { setVisibility("Hidden"); setVisibilityDropdownOpen(false); }}>Hidden</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <PublishSchedule />
    </div>
  );
};

export default PublishForm;
