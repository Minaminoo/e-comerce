import React, { useContext } from 'react';
import {ProductContext} from '../context/productContext';

const product15 = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { addToCart, cartItem } = useContext(ProductContext);
  const cartAmount = cartItem[15];
  return ( <div> 
    <h1 className="product-head">Copenhagen Armchair</h1> 
    <div className="product"> 
    <div><img src="/images/products/Copenhagen Armchair.jpg" alt="Little Armchair Sheepskin" className="product-image product-image-mobile" />
    </div> 
    <div className="product-inf"> 
      <p className="product-title">Sum is a series designed by the Danish designer Simon Legald, who is the epitome of modern elegance. Elegant and resolute as the tip of a wing, the armrests spread out invitingly, as if they want to embrace you in the armchair’s soft, homely space.</p> 
      <div className="btn-div">
      <button className="addToCart-btn" onClick={() => addToCart(15)}> ADD TO CART{cartAmount > 0 && <>({cartAmount})</>}</button> 
      <button className="learn-more">Buy Now</button> 
      </div>
    </div> 
    </div> 
      <div className="product-text mobile-product-text"> 
      <div className="product-sub-test"> 
        <p className="title">Texture:</p> 
        <p className="product-information">Wood</p> </div> 
      <div className="product-sub-test"> 
        <p className="title">Weight:</p> 
        <p className="product-information">14kg</p> </div> 
      <div className="product-sub-test"> <p className="title">Size:</p> 
        <p className="product-information">65cm x 35cm</p> 
      </div> 
      </div> 
      </div> ) }

export default product15;