import * as React from "react";
import Products from "./json/product.json";

export default function cartPage(props) {
  return (
    <div class="container">
      <div className="row">
        <div className="col-md-8">
          <div className="shopping-cart__items-page">
            <div class="table">
              <div class="layout-inline row th">
                <div class="col col-pro">Product</div>
                <div class="col col-price align-center ">Price</div>
                <div class="col col-qty align-center">QTY</div>
                <div class="col">VAT</div>
                <div class="col">Total</div>
              </div>

              {Products.items.map((value, key) => {
                if (props.cartItems.includes(key.toString())) {
                  return (
                    <div class="layout-inline row shopping-cart__item">
                      <div class="col col-pro layout-inline">
                        <img src={value.image} alt="product" width="100" />
                        <p>{value.name}</p>
                      </div>

                      <div class="col col-price col-numeric align-center ">
                        <p>£59.99</p>
                      </div>

                      <div class="col col-qty layout-inline">
                        <a href="#" class="qty qty-minus">
                          -
                        </a>
                        <input type="numeric" value="3" />
                        <a href="#" class="qty qty-plus">
                          +
                        </a>
                      </div>

                      <div class="col col-vat col-numeric">
                        <p>£2.95</p>
                      </div>
                      <div class="col col-total col-numeric">
                        <p> £182.95</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-md-offset-1">column</div>
      </div>
    </div>
  );
}
