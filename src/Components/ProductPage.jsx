import React, { useState } from "react";
import { BiUndo, BiRedo } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { BsTypeBold, BsTable, BsQuote } from "react-icons/bs";
import { PiTextItalicLight } from "react-icons/pi";
import { AiOutlineLink } from "react-icons/ai";
import { LuImageUp } from "react-icons/lu";
import { ImFilm } from "react-icons/im";
import { MdOutlineFormatListBulleted, MdOutlineFormatListNumbered } from "react-icons/md";
import { RiIndentDecrease, RiIndentIncrease } from "react-icons/ri";
import PublishForm from "./PublishForm";
import "./ProductPage.css";

const ProductPage = () => {
  const [paragraphStyle, setParagraphStyle] = useState("Paragraph");
  const [showDropdown, setShowDropdown] = useState(false);

  // Handler for undo
  const handleUndo = () => document.execCommand("undo");

  // Handler for redo
  const handleRedo = () => document.execCommand("redo");

  // Apply selected paragraph style
  const applyParagraphStyle = (style) => {
    setParagraphStyle(style);
    document.execCommand("formatBlock", false, style);
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <div className="product-page">
      {/* Flex container to align product page and publish form */}
      <div className="product-page-content" style={{ display: "flex", gap: "10px" }}>
        {/* Product Title and Description Section */}
        <div className="product-description-container" style={{ flex: 1 }}>
          <div className="product-title-container">
            <h2>Product Title</h2>
            <input
              type="text"
              placeholder="Enter product title"
              className="product-title-input"
            />
          </div>

          <div className="textarea-container">
            {/* Icons Section */}
            <div className="textarea-icons">
              <div className="undo-redo-container">
                <BiUndo size={18} color="rgb(33, 37, 41)" title="Undo" onClick={handleUndo} />
                <BiRedo size={18} title="Redo" onClick={handleRedo} />
              </div>
              <div className="paragraph-dropdown" onClick={() => setShowDropdown(!showDropdown)}>
                <span className="paragraph-label">{paragraphStyle}</span>
                <IoIosArrowDown size={15} style={{ marginLeft: "18px" }} title="Paragraph Options" />
                {showDropdown && (
                  <ul className="dropdown-menu">
                    <li onClick={() => applyParagraphStyle("p")}>Paragraph</li>
                    <li onClick={() => applyParagraphStyle("h1")}>Heading 1</li>
                    <li onClick={() => applyParagraphStyle("h2")}>Heading 2</li>
                    <li onClick={() => applyParagraphStyle("h3")}>Heading 3</li>
                  </ul>
                )}
              </div>
              <div className="other-icons">
                <BsTypeBold size={18} title="Bold" onClick={() => document.execCommand("bold")} />
                <PiTextItalicLight size={18} title="Italic" onClick={() => document.execCommand("italic")} />
                <AiOutlineLink size={18} title="Add Link" onClick={() => document.execCommand("createLink", false, prompt("Enter URL:"))} />
                <LuImageUp size={18} title="Add Image" onClick={() => document.execCommand("insertImage", false, prompt("Enter Image URL:"))} />
                <BsTable size={18} title="Add Table" />
                <IoIosArrowDown size={15} style={{ marginLeft: "-10px" }} title="Paragraph Options" />

                <BsQuote size={18} title="Quote" onClick={() => document.execCommand("formatBlock", false, "blockquote")} />
                <ImFilm size={18} title="Add Video" />
                <IoIosArrowDown size={15} style={{ marginLeft: "-10px" }} title="Paragraph Options" />

                <MdOutlineFormatListBulleted size={18} title="Bullet List" onClick={() => document.execCommand("insertUnorderedList")} />
                <MdOutlineFormatListNumbered size={18} title="Numbered List" onClick={() => document.execCommand("insertOrderedList")} />
                <RiIndentDecrease size={18} color=" #666" title="Decrease Indent" onClick={() => document.execCommand("outdent")} />
                <RiIndentIncrease size={18} color=" #666" title="Increase Indent" onClick={() => document.execCommand("indent")} />
              </div>
            </div>
            {/* Input Section */}
            <textarea
              placeholder="Enter product description"
              className="product-description-textarea"
              contentEditable
            />
          </div>
        </div>

        {/* PublishForm on the right side */}
        <div className="publish-form-container" style={{ width: "300px" }}>
          <PublishForm />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
