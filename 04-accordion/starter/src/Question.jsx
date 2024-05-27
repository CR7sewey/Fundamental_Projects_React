import React from "react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ values, showInfo }) => {
  const [shown, setShown] = useState(false);
  return (
    <article className="question">
      <header>
        <h5>{values.title}</h5>
        <button className="question-btn" onClick={() => setShown(!shown)}>
          {shown ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {shown && <p>{values.info}</p>}
    </article>
  );
};

export default Question;
