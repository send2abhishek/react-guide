import React from "react";

const person = props => {
  console.log("props received ", props);
  return (
    <p>
      I am person component with {props.name} have {props.age} years old{" "}
      {props.children}
    </p>
  );
};

export default person;
