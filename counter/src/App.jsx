import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // console.log("53" + 3);
  // console.log("53" - 3);

  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Simple Counter By State Hook</h1> <br />
      <h4>Total Count : {counter}</h4> <br />
      <button className="add" onClick={addValue}>
        Add
      </button>
      <button className="remove" onClick={removeValue}>
        Subtract
      </button>
    </>
  );
}

export default App;
