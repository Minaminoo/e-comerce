import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/productContext';

export const Product = (props) => {
  const { addToCart, cartItem } = useContext(ProductContext);
  const { id, price, title, image, discount } = props.data;
  const cartAmount = cartItem[id];
  const dis = (price, discount) => {
    return  price * discount
  }
  return (
    <div className="card">
      <p className="image">{ image }</p>
      <p className="inf">{ title }</p>
      <p className="price">{dis(price, discount)} $ <p className="discount">50%</p></p>
      <p className="price del">{ price } $</p>
      <div className="buy-div">
      <button className="addToCart-btn" onClick={() => addToCart(id)}> ADD TO CART {cartAmount > 0 && <>({cartAmount})</>}</button>
      <Link to={`productPage/${id}`}>
      <button className="learn-more">Learn More</button> 
      </Link>
      </div>
    </div>
  )
}
