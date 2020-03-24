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
      name: "ALura",
      data: state.data
    });
  };
  console.log("state is", state);

  const propsHandler = () => {
    console.log("Clicked");
  };
  const changeHandler = e => {
    stateFunction({
      name: e.target.value,
      data: state.data
    });
  };
  return (
    <div>
      <button onClick={handleClick}>CLick Me</button>
      <Person name={state.name} clicked={propsHandler} />
      <Person name={state.name} changed={changeHandler} />
      <p>Name is {state.name}</p>
    </div>
  );
};

export default App;
