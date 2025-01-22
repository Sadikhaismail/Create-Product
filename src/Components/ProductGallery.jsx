import React, { useRef } from "react";
import { FaRegCircle } from "react-icons/fa"; // For the circle icon
import { RiImageFill } from "react-icons/ri"; // For the image icon
import { BsFillCloudUploadFill } from "react-icons/bs";
import "./ProductGallery.css"; // Import the CSS file

const ProductGallery = () => {
  const mainImageInputRef = useRef(null); // Ref for the Product Image input
  const galleryImageInputRef = useRef(null); // Ref for the Product Gallery input

  // Function to trigger the main image file input dialog
  const handleMainImageClick = () => {
    mainImageInputRef.current.click(); // Programmatically trigger the Product Image input
  };

  // Function to trigger the gallery image file input dialog
  const handleGalleryImageClick = () => {
    galleryImageInputRef.current.click(); // Programmatically trigger the Product Gallery input
  };

  return (
    <div className="container">
      {/* Product Gallery Heading */}
      <div className="heading-container">
        <h3 className="heading">Product Gallery</h3>
      </div>

      {/* Product Image Section */}
      <div className="section product-image-section">
        <h4 className="subheading">Product Image</h4>
        <p className="description">Add Product Main Image.</p>
        <div className="image-upload-box" onClick={handleMainImageClick}>
          <div className="circle-container">
            <FaRegCircle className="circle-icon" />
            <RiImageFill className="inner-icon" />
          </div>
        </div>
        <input
          type="file"
          ref={mainImageInputRef}
          style={{ display: "none" }} // Hide the actual file input
          onChange={(e) => console.log("Main Image:", e.target.files)} // Handle file selection
        />
      </div>

      {/* Product Gallery Section */}
      <div style={{marginTop:"-50px"}} className="section product-gallery-section">
        <h4 className="subheading">Product Gallery</h4>
        <p className="description">Add Product Gallery Images.</p>
        <div className="upload-area" onClick={handleGalleryImageClick}>
          <BsFillCloudUploadFill  className="icon" />
          <p>Drop files here or click to upload.</p>
        </div>
        <input
          type="file"
          ref={galleryImageInputRef}
          style={{ display: "none" }} // Hide the actual file input
          onChange={(e) => console.log("Gallery Images:", e.target.files)} // Handle file selection
        />
      </div>
    </div>
  );
};

export default ProductGallery;
