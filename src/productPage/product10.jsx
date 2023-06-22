import React, { useContext } from 'react';
import {ProductContext} from '../context/productContext';

const product10 = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { addToCart, cartItem } = useContext(ProductContext);
  const cartAmount = cartItem[10];
  return ( <div> 
    <h1 className="product-head">Traditional Armchair</h1> 
    <div className="product"> 
    <div><img src="/images/products/Traditional Armchair.jpg" alt="Little Armchair Sheepskin" className="product-image product-image-mobile" />
    </div> 
    <div className="product-inf"> 
      <p className="product-title">Sum is a series designed by the Danish designer Simon Legald, who is the epitome of modern elegance. Elegant and resolute as the tip of a wing, the armrests spread out invitingly, as if they want to embrace you in the armchair’s soft, homely space.</p> 
      <div className="btn-div">
        <button className="addToCart-btn" onClick={() => addToCart(1)}> ADD TO CART{cartAmount > 0 && <>({cartAmount})</>}</button> 
        <button className="learn-more">Learn More</button> 
      </div>
    </div> 
    </div> 
      <div className="product-text"> 
      <div className="product-sub-test"> 
        <p className="title">Texture:</p> 
        <p className="product-information">Wood</p> </div> 
      <div className="product-sub-test"> 
        <p className="title">Weight:</p> 
        <p className="product-information">8kg</p> </div> 
      <div className="product-sub-test"> <p className="title">Size:</p> 
        <p className="product-information">60cm x 40cm</p> 
      </div> 
      </div> 
      </div> ) }

export default product10;