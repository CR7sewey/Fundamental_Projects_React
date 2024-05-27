import { useState, useEffect } from "react";
import data from "./data";
const allCategories = ["All", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [category, setCategory] = useState("All");
  const [allCats, setAllCats] = useState(allCategories);

  useEffect(() => {
    if (category !== "All") {
      const actualData = data.filter((values) => values.category === category);
      console.log(actualData);
      setMenu(actualData);
    } else {
      setMenu(data);
    }
  }, [category]);

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="title-underline"></div>
        </div>

        <div className="btn-container">
          {allCats.map((values, index) => (
            <button
              className="btn"
              key={index}
              onClick={() => setCategory(values)}
            >
              {values}
            </button>
          ))}
        </div>
        <section className="section-center">
          {menu.map((values) => {
            return (
              <article className="menu-item" key={values.id}>
                <img src={values.img} className="img" />
                <div className="item-info">
                  <header>
                    <h5>{values.title}</h5>
                    <span className="item-price">${values.price}</span>
                  </header>
                  <p className="item-text">{values.desc}</p>
                </div>
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
};
export default App;
