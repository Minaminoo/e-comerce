import React, { useContext } from 'react'
import Products from '../products';
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/productContext';
import { CartItem } from './CartItem';

export const Cart = () => {
  const { cartItem, getTotalCartAmount } = useContext(ProductContext);
  const totalAmount = getTotalCartAmount();
  return (<div>
    <div><h1 className="cart-title">Cart Items</h1></div>
    <div className="cart-products  cart-mobile">
      {Products.map((Product) => {
        if (cartItem[Product.id] !== 0) {
          return<CartItem data={Product} />
        }
      })}
    </div>
      <p className="p-checkout">subtotal: {totalAmount} $</p>
    <div className="checkout">
      <Link to="/Category" className="addToCart-btn con"> Continue Shopping </Link>
      <button className="addToCart-btn con"> Checkout </button>
    </div>
  </div>)
}
