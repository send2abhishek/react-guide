import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personName: this.props.name
    };
  }
  render() {
    return <p>Person name is {this.state.personName}</p>;
  }
}

export default Person;
