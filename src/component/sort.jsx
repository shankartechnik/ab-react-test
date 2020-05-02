import * as React from "react";

export default function sort(props) {
  const handleSort = key => {
    this.props.sortHandler(key);
  };

  return (
    <ul className="nav navbar navbar-left d-flex d-inline-flex ">
      <li className="nav-item d-inline-flex  align-items-center mr-3">
        <span onClick={handleSort}>Price -- High Low</span>
      </li>
      <li className="nav-item d-inline-flex  align-items-center mr-3">
        <span onClick={handleSort}>Price -- Low High</span>
      </li>
      <li className="nav-item d-inline-flex  align-items-center mr-3">
        <span onClick={handleSort}> Discount</span>
      </li>
    </ul>
  );
}
