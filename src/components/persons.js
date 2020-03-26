import React, { Component } from "react";
import styles from "../App.css";
import Aux from "./Auxiliary";
import withClass from "./withClass";
const Person = props => {
  // const styles = {
  //   width: "60%",
  //   border: "1px solid grey",
  //   boxshadow: "2px ",
  //   text-align:"center"
  // };
  let classes = "Persons";
  console.log("prps", props);
  return (
    <Aux>
      <p>
        Named of the person is {props.name} having age {props.age}
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
      <button
        onClick={() => props.clicked(props.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>

      <p>Baccha hai tu</p>
    </Aux>
  );
};

// calling withClass function which returns jsx
export default withClass(Person);
