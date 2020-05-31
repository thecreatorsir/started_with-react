import React from "react";
import "./style.css";
function stylesheet(prop) {
  let className = prop.fun ? "primary" : "";
  return (
    <div>
      <h1 className={className}>hello world!</h1>
    </div>
  );
}

export default stylesheet;
