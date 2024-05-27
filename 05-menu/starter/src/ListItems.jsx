import React from "react";
import Item from "./Item";

const ListItems = ({ menu }) => {
  return (
    <section className="section-center">
      {menu.map((values) => {
        return <Item key={values.id} values={values} />;
      })}
    </section>
  );
};

export default ListItems;
