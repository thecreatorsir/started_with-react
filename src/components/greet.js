import React from "react";

function greet({ name, children }) {
  return (
    <div>
      <h1 className='heading'>hii {name}</h1>
      {children}
    </div>
  );
}

export default greet;
