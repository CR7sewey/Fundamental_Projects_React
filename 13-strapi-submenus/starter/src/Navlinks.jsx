import React from "react";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Navlinks = () => {
  const { isOpen, openSidebar, closeSidebar, pageId, setPageId } =
    useGlobalContext();
  console.log(pageId);

  return (
    <div className="nav-links">
      {sublinks.map((values) => (
        <button
          className="nav-link"
          onMouseEnter={() => setPageId(values.pageId)}
          key={values.pageId}
        >
          {values.page}
        </button>
      ))}
    </div>
  );
};

export default Navlinks;
