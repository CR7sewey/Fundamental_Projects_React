import React from "react";

const Categories = ({ allCats, setCategory }) => {
  return (
    <div className="btn-container">
      {allCats.map((values, index) => (
        <button className="btn" key={index} onClick={() => setCategory(values)}>
          {values}
        </button>
      ))}
    </div>
  );
};

export default Categories;
