import * as React from "react";
import Search from "./search";
import Cart from "./cart";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export default function header(props) {
  return (
    <div className="shopping-header">
      <nav className="navbar navbar-expand-md mb-3">
        <div className="container-fluid">
          <div className="shopping-header__logo">
            <Link to="/">
              <img
                alt="logo"
                className="shopping-header__logo__img"
                src={logo}
              />
            </Link>
          </div>

          <div className="shopping-header__search__cart">
            <div className="row">
              <div className="shopping-header__search">
                <Search />
              </div>
              <div className="shopping-header__cart ml-3">
                <Cart cartItems={props.cartItems} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
