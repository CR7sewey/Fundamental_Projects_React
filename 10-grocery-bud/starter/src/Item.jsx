import React from "react";

const Item = ({ val, deleteItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={val.checked}
        onChange={() => editItem(val.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: val.checked && "line-through",
        }}
      >
        {val.name}
      </p>
      <button className="remove-btn" onClick={() => deleteItem(val.id)}>
        Delete
      </button>
    </div>
  );
};

export default Item;
