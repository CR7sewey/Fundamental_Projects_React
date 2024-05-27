import { useState, useEffect } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [data, setData] = useState(reviews);
  const [shownData, setShownData] = useState(reviews[0]);

  const switchRight = () => {
    let new_index = data.length - 1;
    data.forEach((values, index) => {
      if (shownData.id === values.id && index !== data.length - 1) {
        new_index = index + 1;
        return;
      }
      if (shownData.id === values.id && index === data.length - 1) {
        new_index = 0;
        return;
      }
    });
    setShownData(reviews[new_index]);
  };

  const switchLeft = () => {
    let new_index = 0;
    data.forEach((values, index) => {
      if (shownData.id === values.id && index !== 0) {
        new_index = index - 1;
        return;
      }
      if (shownData.id === values.id && index === 0) {
        new_index = data.length - 1;
        return;
      }
    });
    setShownData(reviews[new_index]);
  };

  return (
    <main>
      <article className="review" key={shownData.id}>
        <div className="img-container">
          <img src={shownData.image} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{shownData.name}</h4>
        <p className="job">{shownData.job}</p>
        <p className="info">{shownData.text}</p>

        <div className="btn-container">
          <button className="prev-btn" onClick={switchLeft}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={switchRight}>
            <FaChevronRight />
          </button>
        </div>
        <div
          className="btn btn-hipster"
          onClick={() =>
            setShownData(
              data[
                Math.floor(Math.random() * data.length - 0.000000000000000001)
              ]
            )
          }
        >
          Surprise ME
        </div>
      </article>
    </main>
  );
};
export default App;
