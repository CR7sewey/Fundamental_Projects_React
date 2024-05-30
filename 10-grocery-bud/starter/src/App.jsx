import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import Item from "./Item";

const App = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      toast.warning("No item provided!");
      return;
    }
    setItems([...items, { name: item, checked: false, id: nanoid() }]);
    setItem("");

    localStorage.setItem("list", JSON.stringify(items));
  };

  const deleteItem = (id) => {
    const new_items = items.filter((val) => val.id !== id);
    setItems(new_items);
    console.log(items);
    localStorage.setItem("list", JSON.stringify(items));
    toast.success("Item removed!");
  };

  const editItem = (id) => {
    const new_items = items.map((vals) => {
      if (vals.id === id) {
        console.log("aqui");
        vals = { ...vals, checked: !vals.checked };
        console.log(vals);
        return vals;
      }
      return vals;
    });
    setItems(new_items);
    console.log(items);
    localStorage.setItem("list", JSON.stringify(items));
  };

  return (
    <section className="section-center">
      <h4>Grocery Bud</h4>
      <form className="form-control" onSubmit={handleSubmit}>
        <input
          type="text"
          name="item"
          id="item"
          className="form-input"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="btn" type="submit">
          Add item
        </button>
      </form>
      <div className="items">
        {items.map((val) => (
          <Item
            val={val}
            deleteItem={deleteItem}
            editItem={editItem}
            key={val.id}
          />
        ))}
      </div>
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
