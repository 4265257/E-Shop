import React, { createContext, useContext, useReducer, useState } from "react";
import { products } from "./data/data";

export const StateContext = createContext(null);
const getDeafaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const StateProvider = ({ reducer, initialState, children }) => {
  const [cartItems, setCartItems] = useState(getDeafaultCart);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const RemoveFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount
  };

  const contextValue = {
    cartItems,
    addToCart,
    RemoveFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  console.log("cartItems", cartItems);
  return (
    <StateContext.Provider
      value={
        //  useReducer(reducer, initialState),
        contextValue
      }
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
