import React, { Component } from "react";

class eventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "eventBinding",
    };
    // this.eventstate = this.eventstate.bind(this);
  }
  // eventstate() {
  //   this.setState({
  //     message: "enentBinding complete",
  //   });
  // }
  eventstate = () => {
    this.setState({
      message: "enentBinding complete",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.eventstate.bind(this)}>click</button> */}
        <button onClick={this.eventstate}>click</button>
      </div>
    );
  }
}

export default eventBind;
