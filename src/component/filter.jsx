import * as React from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

export default function filter(props) {
  return (
    <Slider
      min={9}
      max={9999}
      value={props.priceRange}
      onChange={props.handleOnChange}
    />
  );
}
