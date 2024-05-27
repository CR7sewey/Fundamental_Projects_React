import React from "react";
import Tour from "./Tour";

const Tours = ({ showText, removeTour, readMore, tours }) => {
  return (
    <>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((values) => (
          <Tour
            values={values}
            showText={showText}
            removeTour={removeTour}
            tours={tours}
            readMore={readMore}
          />
        ))}
      </div>
    </>
  );
};

export default Tours;
