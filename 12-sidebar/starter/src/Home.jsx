import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { showModal, handleModal, showSidebar, handleSidebar } =
    useGlobalContext();
  return (
    <main>
      <button onClick={handleSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button type="submit" onClick={handleModal} className="btn">
        Show Modal
      </button>
    </main>
  );
};

export default Home;
