import React, { useEffect, useRef } from "react";
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
  const inputTypeRef = useRef(null);

  useEffect(() => {
    //document.querySelector("input").focus();
    inputTypeRef.current.focus();
  }, []);

  console.log("prps", props);
  return (
    <Aux>
      <p>
        Named of the person is {props.name} having age {props.age}
      </p>
      <input
        type="text"
        onChange={props.changed}
        ref={inputTypeRef}
        value={props.name}
      />
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
export default withClass(Person, styles.Persons);

//export default Person;
