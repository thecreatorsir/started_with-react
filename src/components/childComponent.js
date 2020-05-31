import React from "react";

function childComponent(props) {
  return (
    <div>
      <button onClick={props.greet}>click</button>
    </div>
  );
}

export default childComponent;
