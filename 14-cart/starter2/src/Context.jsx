import { useContext, useEffect, useState } from "react";
import { createContext, useReducer } from "react";
import cartItems from "./data";
const url = "https://www.course-api.com/react-useReducer-cart-project";
import { reducer } from "./reducer";
import { calculateAmount, calculatePrice } from "./utils";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

const initialState = {
  loading: false,
  cart: new Map(),
};

const AppProvider = ({ children }) => {
  // const [total, setTotal] = useState(0);
  //const [numItems, setNumItems] = useState(0);

  const [cartArray, dispatch] = useReducer(reducer, initialState);
  const total = calculatePrice(cartArray.cart);
  const numItems = calculateAmount(cartArray.cart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "LOADING" });
        const data = await fetch(url);
        const data_json = await data.json();
        dispatch({ type: "DISPLAY_ITEMS", data: { data_json } });
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const clearCart = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const clearItem = (id) => {
    dispatch({ type: "CLEAR_ITEM", id });
  };

  const increaseItem = (id) => {
    dispatch({ type: "INCREASE", id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE", id });
  };
  return (
    <AppContext.Provider
      value={{
        clearCart,
        cartArray,
        clearItem,
        decreaseItem,
        increaseItem,
        total,
        numItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
