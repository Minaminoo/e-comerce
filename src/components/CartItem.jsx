import React, { useContext } from 'react'
import { ProductContext } from '../context/productContext';

export const CartItem = (props) => {
  const {title, image, price, id} = props.data;
  const { cartItem, removeFromCart, addToCart, updateCartItem } = useContext(ProductContext);
  const cartAmount = cartItem[id];
  return (<div>
      {cartAmount > 0 ? <div className="cart-card mobile-card">
      <p className="cart-image mobile-image">{ image }</p>
      <p className="cart-inf mobile-inf">{ title }</p>
      <p className="cart-price mobile-price">{ price }</p>
      <div className="counterHandle counterHandle-mobile">
        <button onClick={() => removeFromCart(id) }>-</button>
        <input value={ cartAmount } onChange={(e) => updateCartItem(Number(e.target.value)) }/>
        <button onClick={() => addToCart(id) }>+</button>
      </div>
      </div> : (<b> Keep Going </b>)}
  </div>)
}
