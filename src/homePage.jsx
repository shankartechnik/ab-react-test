import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Products from "./component/products";
import ProductSort from "./component/sort";
import ProductsJson from "./component/json/product.json";
import Filter from "./component/filter";

class homePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      productToRender: ProductsJson.items,
      priceRange: 9
    };
  }

  handleOnChange = value => {
    this.setState({
      priceRange: value
    });
  };

  addToCart = key => {
    let currentProduct = key.target.getAttribute("data-product-id");
    this.props.onAddToCart(currentProduct);
  };

  sortHandler = key => {};

  render() {
    return (
      <div className="shopping-site">
        <div className="container">
          <div className="shopping-site__main__area row pl-3 pr-3">
            <aside className="shopping-site__filters col-lg-3">
              <h2>Filters</h2>
              <Filter
                priceRange={this.state.priceRange}
                handleOnChange={this.handleOnChange}
              />
            </aside>
            <main className="shopping-site__products col-lg-9">
              <strong>Sort By</strong>
              <ProductSort />
              <Products
                products={this.state.productToRender}
                addToCart={this.addToCart}
              />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default homePage;
