import React from "react";

const Form = ({ handleSubmit, color, handleColor }) => {
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={handleColor}
        />
        <input type="text" disabled placeholder={color} />
        <button className="btn">Submit</button>
      </form>
    </section>
  );
};

export default Form;
