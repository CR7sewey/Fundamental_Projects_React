import { useEffect, useState } from "react";
import Tour from "./Tour";
import Tours from "./Tours";
const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [readMore, setReadMore] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setLoading(false);
      }
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTours();
    console.log(tours);
  }, []);

  const showText = () => {
    setReadMore(!readMore);
  };

  const removeTour = (id) => {
    //const eliminTour = tours.find((values) => values.id = id);
    setTours(tours.filter((values) => values.id !== id));
  };
  console.log(loading);
  if (loading) {
    return (
      <main>
        <div className="loading"></div>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <section>
      <Tours
        showText={showText}
        removeTour={removeTour}
        tours={tours}
        readMore={readMore}
      />
    </section>
  );
};
export default App;
