import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function search(props) {
  return (
    <div className="search">
      <FontAwesomeIcon icon={faSearch} color="#ffffff" />
    </div>
  );
}
