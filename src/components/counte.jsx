import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    //console.log("cons called", this);
    //return new instance of handleclick function with property of this
    //this.handleClick = this.handleClick.bind(this);
    this.state = {
      count: this.props.data.value,
      tech: ["lists"],
      name: this.props.name
    };
  }

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  handleClick = e => {
    //console.log("event props is", e);
    this.setState({
      count: this.state.count + 1
    });
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("methods from derive state  props -", nextProps);
    console.log("methods from derive state , sate", prevState);
    return nextProps;
  }
  shouldComponentUpdate(nextprops, nextState) {
    console.log("shouldComponentUpdate called");
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called", prevProps);
  }
  render() {
    console.log("mers props", this.props);
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        <span style={this.styles} className={classes}>
          {this.formatCounter()}
        </span>
        <button
          onClick={() => this.handleClick(this.state.count)}
          className="btn btn-info btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.data.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.state.tech.length === 0 && <p>There is no tech for this</p> && (
          <p></p>
        )}
        {this.renderHelper()}
      </div>
    );
  }

  renderHelper() {
    if (this.state.tech.length === 0) return <p>There is no tech</p>;
    return (
      <div>
        <ul>
          {this.state.tech.map(data => (
            <li key={data}>{data}</li>
          ))}
        </ul>
        <p>{this.state.name}</p>
      </div>
    );
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
