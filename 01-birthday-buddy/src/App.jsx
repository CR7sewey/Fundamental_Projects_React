import { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./components/List";

function App() {
  const [people, setPeople] = useState(data);
  const handleClear = () => {
    setPeople((currentPeople) => {
      return [];
    });
  };
  return (
    <section className="container">
      <h3 style={{ textAlign: "left" }}>{people.length} Birthdays Today</h3>
      <List people={people} />
      <button onClick={handleClear} type="button" className="btn btn-block">
        Clear All
      </button>
    </section>
  );
}

export default App;
