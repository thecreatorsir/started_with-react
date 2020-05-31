import React, { Component } from "react";

class greetUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedin: false,
    };
  }

  render() {
    return this.state.isloggedin && <div>welcome shubham</div>;
    // return this.state.isloggedin ? (
    //   <div>welcome shubham</div>
    // ) : (
    //   <div>welcome guest</div>
    // );
    // let message;
    // if (this.state.isloggedin) {
    //   message = <div>welcome shubham</div>;
    // } else {
    //   message = <div>welcome guest</div>;
    // }
    // return message;
    // if (this.state.isloggedin) {
    //   return <div>welcome shubham</div>;
    // } else {
    //   return <div>welcome guest</div>;
    // }
    // return (
    //   <div>
    //     <div>welcome shubham</div>
    //   </div>
    // );
  }
}

export default greetUser;
