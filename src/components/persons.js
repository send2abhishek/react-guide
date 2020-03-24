import React, { Component } from "react";

const Person = props => {
  const styles = {
    padding: "10px"
  };
  return (
    <div style={styles}>
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
