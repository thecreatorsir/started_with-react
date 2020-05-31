import React, { Component } from "react";
import Child from "./childComponent";
class parentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "shubham",
    };
    this.greetPrarent = this.greetPrarent.bind(this);
  }
  greetPrarent() {
    alert(`hello ${this.state.parentName}`);
  }

  render() {
    return (
      <div>
        <Child greet={this.greetPrarent} />
      </div>
    );
  }
}

export default parentComponent;
