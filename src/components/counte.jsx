import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count == 0 ? "warning" : "danger";
    return (
      <div>
        <span style={this.styles} className={classes}>
          {this.formatCounter()}
        </span>
        <button className="btn btn-danger btn-sm">Increment</button>
      </div>
    );
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
