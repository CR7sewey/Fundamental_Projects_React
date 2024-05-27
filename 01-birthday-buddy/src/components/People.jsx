import React from "react";

const People = ({ image, name, age }) => {
  return (
    <article className="person">
      <img src={image} alt="uma imagem" />
      <h4>{name}</h4>
      <p>{age} years</p>
    </article>
  );
};

export default People;
