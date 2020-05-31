import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState((prevValue) => ({
      count: prevValue.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.increment}>Incriment</button>
      </div>
    );
  }
}

export default counter;
