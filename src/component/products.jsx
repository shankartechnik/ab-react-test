import * as React from "react";

export default function products(props) {
  return (
    <div className="row products-row">
      {props.products.map((value, key) => {
        return (
          <div
            key={key}
            className="products__item col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-4"
          >
            <img alt="product-img" src={value.image} width="100" />
            <div className="products__item__name">{value.name}</div>
            <div className="row justify-content-center">
              <div className="products__item__current-price mr-3">
                <strong>₹</strong> {value.price.actual}
              </div>
              <div className="products__item__normal-price mr-3">
                <s>{value.price.display}</s>
              </div>
              <div className="products__item__price-discount">
                {value.discount}
                <strong>% off</strong>
              </div>
            </div>
            <button data-product-id={key} onClick={props.addToCart}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
