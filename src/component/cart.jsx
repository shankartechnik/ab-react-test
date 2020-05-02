import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Cart(props) {
  return (
    <>
      <div className="cart">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} color="#ffffff" />(
          {props.cartItems.length})
        </Link>
      </div>
    </>
  );
}
