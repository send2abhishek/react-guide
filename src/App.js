import React from "react";
import "./App.css";
import Person from "./components/persons";
import Counter from "./components/counte";

function App() {
  return (
    <div className="App">
      <h1>I am React App</h1>
      <Person name="Abhishek Aryan" age="26" />
      <Person name="Laur ka baal" age="39">
        Hobbies
      </Person>
      <Person />
      <Counter name="Laure ka baal" />
    </div>
  );

  // return React.createElement("h1", null, "I am a react App");
}

export default App;
