import React, { useState } from "react";
import Person from "./components/persons";

// hooks

const App = () => {
  const [state, stateFunction] = useState({
    name: "Abhishek",
    data: "Demo"
  });

  const handleClick = () => {
    stateFunction({
      name: "ALura"
    });
  };
  return (
    <div>
      <button onClick={handleClick}>CLick Me</button>
      <Person name={state.name} />
      <p>Name is {state.name}</p>
    </div>
  );
};

export default App;
