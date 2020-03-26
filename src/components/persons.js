import React, { Component } from "react";
import "../App.css";
import Aux from "./Auxiliary";
const Person = props => {
  // const styles = {
  //   width: "60%",
  //   border: "1px solid grey",
  //   boxshadow: "2px ",
  //   text-align:"center"
  // };
  return (
    <Aux>
      <div className="Persons">
        <p>
          Name of the person is {props.name} having age {props.age}
        </p>
        <input type="text" onChange={props.changed} value={props.name} />
        <button
          onClick={() => props.clicked(props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
      <p>Baccha hai tu</p>
    </Aux>
  );
};

export default Person;
