import React, { Component } from "react";
import Persons from "./persons";
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1, name: "Abhishek", age: 25 },
        { id: 2, name: "Aryan", age: 26 },
        { id: 3, name: "Gaurav", age: 26 },
        { id: 4, name: "Asish", age: 25 }
      ],
      show: false
    };
  }
  clickHandler = () => {
    const dataVisible = this.state.show;
    dataVisible
      ? this.setState({ show: !dataVisible })
      : this.setState({ show: !dataVisible });
  };
  deleteHandler = id => {
    const Persons = [...this.state.persons];
    const newArray = Persons.filter(p => p.id !== id);

    this.setState({
      persons: newArray
    });

    console.log(id);
  };
  handleChange = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // copying into new Array
    const Persons = [...this.state.persons];
    //Mutating Array
    Persons[personIndex].name = e.target.value;

    //setting state
    this.setState({
      persons: Persons
    });
  };
  listRender = () => {
    return this.state.show ? (
      <div>
        {this.state.persons.map((p, index) => {
          return (
            <Persons
              key={p.id}
              name={p.name}
              age={p.age}
              id={p.id}
              clicked={personId => this.deleteHandler(personId)}
              changed={e => this.handleChange(e, p.id)}
            />
          );
        })}
      </div>
    ) : null;
  };

  handleColor = () => {
    return !this.state.show ? "btn btn-info btn-sm" : "btn btn-sm btn-danger";
  };
  render() {
    let classes = ["red", "green", "laura"].join("-");
    console.log(classes);
    return (
      <div className="App">
        <h1>I am a React App</h1>
        <button className={this.handleColor()} onClick={this.clickHandler}>
          Tooggle Persons
        </button>
        {this.listRender()}
      </div>
    );
  }
}

export default Parent;
