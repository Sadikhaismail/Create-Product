import React, { useState } from "react";
import { FaDollarSign, FaPercent } from "react-icons/fa";
import "./GeneralMeta.css";

const FormComponent = () => {
  const [activeTab, setActiveTab] = useState("General Info");

  const handleGeneralInfoSubmit = (e) => {
    e.preventDefault();
    console.log("General Info submitted");
    // Add your General Info submission logic here
  };

  const handleMetaDataSubmit = (e) => {
    e.preventDefault();
    console.log("Meta Data submitted");
    // Add your Meta Data submission logic here
  };

  return (
    <div
      className={`form-container ${
        activeTab === "General Info" ? "general-info" : "meta-data"
      }`}
    >
      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "General Info" ? "active" : ""}`}
          onClick={() => setActiveTab("General Info")}
        >
          General Info
        </button>
        <button
          className={`tab ${activeTab === "Meta Data" ? "active" : ""}`}
          onClick={() => setActiveTab("Meta Data")}
        >
          Meta Data
        </button>
      </div>

      {/* General Info Form */}
      {activeTab === "General Info" && (
        <form className="general-info form-content" onSubmit={handleGeneralInfoSubmit}>
          <div className="row">
            <div className="form-group">
              <label>Manufacturer Name</label>
              <input type="text" placeholder="Enter manufacturer name" />
            </div>
            <div className="form-group">
              <label>Manufacturer Brand</label>
              <input type="text" placeholder="Enter manufacturer brand" />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label>Stocks</label>
              <input type="text" placeholder="Stocks" />
            </div>
            <div className="form-group price-group">
              <label>Price</label>
              <div className="input-with-symbol">
                <FaDollarSign size={"13px"} className="icon" />
                <input type="text" placeholder="Enter price" />
              </div>
            </div>
            <div className="form-group discount-group">
              <label>Discount</label>
              <div className="input-with-symbol">
                <FaPercent size={"13px"} className="icon" />
                <input type="text" placeholder="Enter discount" />
              </div>
            </div>
            <div className="form-group">
              <label>Orders</label>
              <input type="text" placeholder="Orders" />
            </div>
          </div>
          <div className="submit-button">
            <button className="submitform" type="submit">
              Submit
            </button>
          </div>
        </form>
      )}

      {/* Meta Data Form */}
      {activeTab === "Meta Data" && (
        <form className="meta-data form-content" onSubmit={handleMetaDataSubmit}>
          <div className="row">
            <div className="form-group">
              <label>Meta Title</label>
              <input type="text" placeholder="Enter meta title" />
            </div>
            <div className="form-group">
              <label>Meta Keywords</label>
              <input type="text" placeholder="Enter meta keywords" />
            </div>
          </div>
          <div className="row">
            <div className="form-group full-width">
              <label>Meta Description</label>
              <textarea placeholder="Enter meta description"></textarea>
            </div>
          </div>
          <div className="submit-button">
            <button className="submitmeta" type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormComponent;
