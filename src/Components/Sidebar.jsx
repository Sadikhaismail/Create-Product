import React, { useEffect, useRef, useState } from 'react';
import './Sidebar.css';
import logo from './image.png'; // Adjust the path if needed
import { VscDashboard } from 'react-icons/vsc';
import { FiLayout } from 'react-icons/fi';
import { RiApps2Line, RiPagesLine, RiRocketLine, RiPencilRuler2Line, RiStackLine, RiHonourLine, RiFileList3Line } from 'react-icons/ri';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Sidebar = () => {
  const scrollTimeout = useRef(null); // Use useRef to persist the scrollTimeout
  const sidebarRef = useRef(null); // Create ref for the sidebar element
  const [isScrolling, setIsScrolling] = useState(false); // State to track scrolling

  useEffect(() => {
    const sidebarElement = sidebarRef.current; // Store the ref in a local variable

    const handleScroll = () => {
      setIsScrolling(true); // Start showing the scrollbar when scrolling

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current); // Clear the previous timeout
      }

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false); // Stop showing the scrollbar when scrolling stops after 2 seconds
      }, 1000); // Set timeout for 2 seconds after scrolling stops
    };

    if (sidebarElement) {
      sidebarElement.addEventListener('scroll', handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (sidebarElement) {
        sidebarElement.removeEventListener('scroll', handleScroll);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <div className={`sidebar ${isScrolling ? 'scrolling' : ''}`} ref={sidebarRef}>
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <nav className="menu">
        <h6>MENU</h6>
        <ul>
          <li>
            <a href="/dashboard">
              <VscDashboard className="sidebar-icon" /> Dashboards
              <MdKeyboardArrowRight className="arrow-icon" />
            </a>
          </li>
          <li>
            <a href="/apps" className="apps-link">
              <RiApps2Line className="sidebar-icon" /> Apps
              <MdOutlineKeyboardArrowDown className="arrow-icon" />
            </a>
          </li>
          <li>
            <a href="/layout">
              <FiLayout className="sidebar-icon" /> Layout
              <span className="hot">Hot</span>
            </a>
          </li>
        </ul>

        <h6>PAGES</h6>
        <ul>
          <li>
            <a href="/authentication">
              <IoPersonCircleSharp className="sidebar-icon" /> Authentication
              <MdKeyboardArrowRight className="arrow-icon" />
            </a>
          </li>
          <li>
            <a href="/pages">
              <RiPagesLine className="sidebar-icon" /> Pages
              <MdKeyboardArrowRight className="arrow-icon" />
            </a>
          </li>
          <li>
            <a href="/landing">
              <RiRocketLine className="sidebar-icon" /> Landing
              <MdKeyboardArrowRight className="arrow-icon" />
            </a>
          </li>
        </ul>

        <h6>COMPONENTS</h6>
        <ul>
          <li>
            <a href="/base-ui">
              <RiPencilRuler2Line className="sidebar-icon" /> Base UI
              <MdKeyboardArrowRight className="arrow-icon" />
            </a>
          </li>
          <li>
            <a href="/advance-ui">
              <RiStackLine className="sidebar-icon" /> Advance UI
              <MdKeyboardArrowRight className="arrow-icon" />
            </a>
          </li>
          <li>
            <a href="/widgets">
              <RiHonourLine className="sidebar-icon" /> Widgets
            </a>
          </li>
          <li>
            <a href="/forms">
              <RiFileList3Line className="sidebar-icon" /> Forms
              <MdKeyboardArrowRight className="arrow-icon" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
