import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./component/header";
import HomePage from "./homePage";
import CartPage from "./component/cartPage";
import Footer from "./component/footer";
import { toast } from "react-toastify";

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      productsInCart: []
    };
  }

  addToCart = key => {
    if (!this.state.productsInCart.includes(key)) {
      this.setState({
        productsInCart: [...this.state.productsInCart, key]
      });
      toast.success("Product added to the cart");
    } else {
      toast.success("Product already exist in the cart");
    }
  };

  render() {
    return (
      <div className="shopping-site">
        <Header cartItems={this.state.productsInCart} />
        <Switch>
          <Route exact path="/">
            <HomePage onAddToCart={this.addToCart} />
          </Route>
          <Route exact path="/cart">
            <CartPage cartItems={this.state.productsInCart} />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}
