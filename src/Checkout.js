import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import React from "react";
import { StateProvider, useStateValue } from "./StateProvider";
import { products } from "./data/data";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, addToCart, RemoveFromCart, getTotalCartAmount } =
    useStateValue(StateProvider);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate()
  return (
    <div>
       {totalAmount > 0 ? (
        <div className="checkout">

 
      <div className="checkout_left">
        <div>
          <h2 className="checkout_title">Your shopping cart!</h2>
        </div>
        <div className="checkout_products">
          {products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CheckoutProduct product={product} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
     

        <div className="checkout_right">
        <h2 className="subtotal_title">Subtotal</h2>
        <div className="subtotal_items">{/* <Subtotal /> */}</div>
        <div className="subtotal_total">Total: {totalAmount}$</div>
        <button className="subtotal_button">Proceed to Checkout</button>
        <button onClick={() => navigate("/")} className="home_button">
          Continue Shopping
        </button>
      </div>
      </div>
        ) : (
          <div>
          <h1> Your cart is empty</h1>
          <button onClick={() => navigate("/")} className="home_button">
          Continue Shopping
        </button>
          </div>
        )
      }
    </div>
  );
}

export default Checkout;
