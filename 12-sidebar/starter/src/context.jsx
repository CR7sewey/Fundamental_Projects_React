import { useContext, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <AppContext.Provider
      value={{ showModal, handleModal, showSidebar, handleSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
