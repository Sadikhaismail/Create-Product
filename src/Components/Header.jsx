import React from "react";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { MdFullscreen } from "react-icons/md";
import { PiMoonLight } from "react-icons/pi";
import { BsBell } from "react-icons/bs";
import { CgMenuLeft } from "react-icons/cg"; // Corrected import
import { BiCategoryAlt } from "react-icons/bi"; // Corrected import
import flag from "./image copy.png";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Menu Icon */}
      <div className="menu-icon">
        <CgMenuLeft size={24} />
      </div>

      {/* Search Bar */}
      <div className="search-bar-container">
        <IoIosSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>

      {/* Icons */}
      <div className="icon-container">
      <img src={flag} alt="Flag" className="flag-image" style={{ width: '24px', height: '24px' }} />

        <BiCategoryAlt size={24} />
        <AiOutlineShopping size={24} />
        <MdFullscreen size={24} />
        <PiMoonLight size={24} />
        <BsBell size={24} />
      </div>

      {/* User Avatar */}
      <div className="user-avatar-container">
        
        <img
          src="https://themesbrand.com/velzon/html/master/assets/images/users/avatar-1.jpg"
          alt="User Avatar"
          className="user-avatar"
        />
        <div>
          <div className="user-name">Anna Adame</div>
          <div className="user-role">Founder</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
