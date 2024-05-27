import { useState, useEffect } from "react";
import data from "./data";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Question from "./Question";

const App = () => {
  const [questions, setQuestions] = useState(data);

  const showInfo = () => {
    setShown((currentState) => {
      return !currentState;
    });
    //setShowInfo(!showInfo)
  };

  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questions.map((values) => (
          <Question values={values} key={values.id} />
        ))}
      </section>
    </main>
  );
};
export default App;
