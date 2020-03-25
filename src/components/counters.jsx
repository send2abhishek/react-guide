import React, { Component } from "react";
import Counter from "./counte";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCOunter: [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 }
      ],
      demo: "laure ka baal"
    };
  }
  render() {
    return (
      <div>
        {this.state.listCOunter.map(data => (
          <Counter
            key={data.id}
            data={data}
            onDelete={this.handleDelete}
            name={this.state.demo}
          />
        ))}
        <button onClick={this.temp}>Click</button>
      </div>
    );
  }
  temp = () => {
    this.setState({
      demo: "chut ka baal"
    });
  };

  handleDelete = id => {
    const counters = this.state.listCOunter.filter(c => c.id !== id);
    this.setState({
      listCOunter: counters
    });
  };
}

export default Counters;
