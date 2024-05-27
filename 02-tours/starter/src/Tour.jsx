import React from "react";

const Tour = ({ values, showText, removeTour, readMore }) => {
  console.log(values, "aaaaaaaaaaaa");
  return (
    <article className="single-tour" key={values.id}>
      <img src={values.image} className="img" />
      <span className="tour-price">${values.price}</span>
      <h5>{values.name}</h5>
      <p className="tour-info">
        {readMore ? values.info.substring(0, 200).concat(" ...") : values.info}
        <br />
        <button className="info-btn" onClick={showText}>
          {readMore ? "Read More" : "Read Less"}
        </button>
      </p>

      <button
        className="delete-btn btn-block btn"
        onClick={() => removeTour(values.id)}
      >
        Not interested
      </button>
    </article>
  );
};

export default Tour;
