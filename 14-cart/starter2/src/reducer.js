import { useGlobalContext } from "./Context";

export const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    //const new_items = { ...state, loading: false, cart: action.data.data_json };
    //setNumItems(new_items.length);
    //setTotal(calculatePrice(new_items));
    const new_items = {
      ...state,
      loading: false,
      cart: new Map(action.data.data_json.map((item) => [item.id, item])),
    };
    console.log(new_items, "bbbbbbbbbb");
    return new_items;
  }
  if (action.type === "CLEAR_ALL") {
    //setNumItems(0);
    //setTotal(calculatePrice([]));
    return { ...state, cart: new Map() };
  }
  if (action.type === "CLEAR_ITEM") {
    //const new_items = state.filter((values) => values.id !== action.id);
    // setNumItems(calculateAmount(new_items));
    // setTotal(calculatePrice(new_items));
    const new_items = new Map(state.cart);
    console.log(new_items, "AAAAAaaaaa");
    new_items.delete(action.id);
    return { ...state, cart: new_items };
  }
  if (action.type === "INCREASE") {
    /*const new_items = state.cart.map((values) => {
      if (values.id === action.id) {
        return { ...values, amount: values.amount + 1 };
      }
      return values;
    });*/
    //setNumItems(calculateAmount(new_items));
    //setTotal(calculatePrice(new_items));

    const new_items = new Map(state.cart);
    const item = new_items.get(action.id);
    new_items.set(action.id, { ...item, amount: item.amount + 1 });
    return { ...state, cart: new_items };
  }
  if (action.type === "DECREASE") {
    /*
    let lessThanOne = false;
    let new_items = state.cart.map((values) => {
      if (values.id === action.id) {
        if (values.amount - 1 === 0) {
          lessThanOne = true;
        }
        return { ...values, amount: values.amount - 1 };
      }
      return values;
    });

    if (lessThanOne) {
      new_items = state.cart.filter((values) => values.id !== action.id);
    }*/
    //setNumItems(calculateAmount(new_items));
    //setTotal(calculatePrice(new_items));
    const new_items = new Map(state.cart);
    const item = new_items.get(action.id);
    if (item.amount === 1) {
      new_items.delete(action.id);
    } else {
      new_items.set(action.id, { ...item, amount: item.amount - 1 });
    }
    return { ...state, cart: new_items };
  }
  throw Error("Not valid.");
};
