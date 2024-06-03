import React from "react";
import sublinks from "./data";
import { useGlobalContext } from "./context";
import { useState } from "react";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isOpen, openSidebar, closeSidebar, pageId, setPageId } =
    useGlobalContext();

  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            const { links, page, pageId } = item;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { url, icon, label, id } = link;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

/**
 * <div>
      <ul>
        {sublinks.map((values) => (
          <>
            <h3>{values.page}</h3>
            <li>
              {values.links.map((vals) => (
                <a href={vals.url} key={vals.id}>
                  {vals.icon} {vals.label}
                </a>
              ))}
            </li>
          </>
        ))}
      </ul>
    </div>
 */
export default Sidebar;
