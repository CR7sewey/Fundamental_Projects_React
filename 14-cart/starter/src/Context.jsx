import { useContext, useEffect, useState } from "react";
import { createContext, useReducer } from "react";
import cartItems from "./data";

const AppContext = createContext();

const calculateAmount = (items) => {
  const tot = items.reduce((acc, val) => {
    return parseFloat(val.amount) + acc;
  }, 0);

  return tot;
};

export const useGlobalContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [numItems, setNumItems] = useState(calculateAmount(cartItems));
  console.log(total);
  const [cartArray, dispatch] = useReducer(
    function (state, action) {
      if (action.type === "CLEAR_ALL") {
        setNumItems(0);
        return [];
      }
      if (action.type === "CLEAR_ITEM") {
        const new_items = state.filter((values) => values.id !== action.id);
        setNumItems(calculateAmount(new_items));
        return new_items;
      }
      if (action.type === "INCREASE") {
        const new_items = state.map((values) => {
          if (values.id === action.id) {
            return { ...values, amount: values.amount + 1 };
          }
          return values;
        });
        setNumItems(calculateAmount(new_items));

        return new_items;
      }
      if (action.type === "DECREASE") {
        let lessThanOne = false;
        let new_items = state.map((values) => {
          if (values.id === action.id) {
            if (values.amount - 1 === 0) {
              lessThanOne = true;
            }
            return { ...values, amount: values.amount - 1 };
          }
          return values;
        });

        if (lessThanOne) {
          new_items = state.filter((values) => values.id !== action.id);
        }
        setNumItems(calculateAmount(new_items));

        return new_items;
      }

      throw Error("Not valid.");
    },
    [...cartItems]
  );

  useEffect(() => {
    const calcTotal = () => {
      const tot = cartArray.reduce((acc, val) => {
        const tott = Number(
          (parseFloat(val.price) * Number(val.amount) + acc).toFixed(2)
        );
        return tott;
      }, 0);

      setTotal(tot);
    };
    calcTotal();
  }, [numItems]);

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
