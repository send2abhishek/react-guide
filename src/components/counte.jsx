import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      tech: []
    };
  }

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        <span style={this.styles} className={classes}>
          {this.formatCounter()}
        </span>
        <button className="btn btn-danger btn-sm">Increment</button>
        {this.state.tech.length === 0 && <p>There is no tech for this</p> && (
          <p>last statement</p>
        )}
        {this.renderHelper()}
      </div>
    );
  }

  renderHelper() {
    if (this.state.tech.length === 0) return <p>There is no tech</p>;
    return (
      <ul>
        {this.state.tech.map(data => (
          <li key={data}>{data}</li>
        ))}
      </ul>
    );
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
