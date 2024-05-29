import { useState } from "react";
import text from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [data, setData] = useState([]);
  const [numPars, setNumPars] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (numPars > text.length) {
      setNumPars(text.length - 1);
    }
    if (numPars < 0) {
      setNumPars(0);
    }

    setData(text.slice(0, numPars));
    console.log(data);
  };

  return (
    <section className="section-center">
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label>Paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={numPars}
          onChange={(e) => setNumPars(parseInt(e.target.value))}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {data.map((val, index) => (
          <p key={nanoid()}>{val}</p>
        ))}
      </article>
    </section>
  );
};
export default App;
