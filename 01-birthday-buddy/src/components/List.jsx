import React from "react";
import People from "./People";

const List = ({ people }) => {
  console.log(people);
  return (
    <>
      {people.map((peops) => (
        <People {...peops} key={peops.id} />
      ))}
    </>
  );
};

export default List;
