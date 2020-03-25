import React, { Component } from "react";
import "../App.css";
const Person = props => {
  // const styles = {
  //   width: "60%",
  //   border: "1px solid grey",
  //   boxshadow: "2px ",
  //   text-align:"center"
  // };
  return (
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
  );
};

export default Person;
