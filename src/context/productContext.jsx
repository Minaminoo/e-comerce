import React, { createContext, useState } from 'react'
import Products from '../products';

export const ProductContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Products.length; i++) {
    cart[i] = 0;
  }
  return cart;
}
export const ProductContextProvidor = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cartItem, setCartItem] = useState(getDefaultCart());
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item));
         totalAmount += cartItem[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }
  const getTotalCartNumber = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
         totalAmount += cartItem[item] ;
      }
    }
    return totalAmount;
  }
  const addToCart = (itemId) => {
    setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  }
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
  }
  const updateCartItem = (newAmount, itemId) => {
    setCartItem((prev) => ({...prev, [itemId] : newAmount}));
  }
  const contextValue = {cartItem, addToCart, removeFromCart, updateCartItem, getTotalCartAmount, getTotalCartNumber}
  return (
    <ProductContext.Provider value={contextValue}>{ props.children }</ProductContext.Provider>
  )
}
