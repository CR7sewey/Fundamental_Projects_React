import React from "react";

const Item = ({ values }) => {
  return (
    <article className="menu-item">
      <img src={values.img} className="img" />
      <div className="item-info">
        <header>
          <h5>{values.title}</h5>
          <span className="item-price">${values.price}</span>
        </header>
        <p className="item-text">{values.desc}</p>
      </div>
    </article>
  );
};

export default Item;
