import React from "react";
import "./CheckoutProduct.css";
import { StateProvider, useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
  console.log("props", props.product);
  const { id, title, price, rating, image } = props.product;
  const { cartItems, addToCart, RemoveFromCart, updateCartItemCount } = useStateValue(StateProvider);

  return (
    <div className="checkoutProduct">
      {/* {products.map((product, index) => ( 
        ))}
            */}
      <div className="product_info">
        {/* <img src={product.image} alt={product.title} /> */}
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">{price}$</p>
        {/* <div className="checkoutProduct_rating">⭐⭐⭐⭐⭐</div> */}
        <div className="countHandler">
          <button onClick={() => RemoveFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
          <button onClick={() => addToCart(id)}>+</button>
        </div>

        <button className="button">Remove from basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
