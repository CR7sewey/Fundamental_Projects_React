import React from "react";
import { useGlobalContext } from "./context";
import { links, social } from "./data";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { showSidebar, handleSidebar } = useGlobalContext();
  return (
    <>
      <div className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="close-modal-btn" onClick={handleSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((values) => (
            <li key={values.id}>
              <a href={values.url}>
                {values.icon} {values.text}
              </a>
            </li>
          ))}
        </ul>
        <ul className="social-links">
          {social.map((values) => (
            <li key={values.id}>
              <a href={values.url}>{values.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
