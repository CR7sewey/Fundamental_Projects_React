import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import AsideUsers from "./AsideUsers";
import InfoUser from "./InfoUser";
const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [users, setUsers] = useState([]);
  const [actualUser, setActualUser] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setLoading(false);
        }
        const data = await response.json();
        console.log(data, "aaaaaaaa");
        setUsers(data);
        setActualUser(data[0]);
        console.log(data[0], "aaaaaaaaaaaaaaaaaaaaaaaaaa");
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    };
    fetchData();
    console.log(users, "aa");
  }, []);

  if (loading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  //console.log(actualUser);
  return (
    <section className="jobs-center">
      <AsideUsers
        users={users}
        actualUser={actualUser}
        setActualUser={setActualUser}
      />

      <InfoUser actualUser={actualUser} />
    </section>
  );
};
export default App;
