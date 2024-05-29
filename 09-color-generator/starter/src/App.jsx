import { useState } from "react";
import Values from "values.js";
import ListColors from "./ListColors";
import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);

  const handleColor = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      e.preventDefault();
      console.log(color);
      setColors(new Values(color).all(10));
      console.log(colors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form
        color={color}
        handleColor={handleColor}
        handleSubmit={handleSubmit}
      />
      <ListColors colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
