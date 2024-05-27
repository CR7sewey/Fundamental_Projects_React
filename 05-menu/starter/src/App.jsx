import { useState, useEffect } from "react";
import data from "./data";
import Item from "./Item";
import ListItems from "./ListItems";
import Categories from "./Categories";
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

        <Categories allCats={allCats} setCategory={setCategory} />
        <ListItems menu={menu} />
      </section>
    </main>
  );
};
export default App;
