import React from "react";
import Name from "./personName";
function personList() {
  const names = ["shubham", "shivam", "satyam"];
  const nameList = names.map((name) => <Name key={name} name={name} />);
  return <div>{nameList}</div>;
}

export default personList;
