import React, { useContext } from 'react'
import { ProductContext } from '../context/productContext';

const product6 = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { addToCart, cartItem } = useContext(ProductContext);
  const cartAmount = cartItem[6];
        return ( <div> 
          <h1 className="product-head">Body Oil 200ml</h1> 
          <div className="product"> 
          <div><img src="/images/products/Body Oil 200ml.jpg" alt="Little Armchair Sheepskin" className="product-image product-image-mobile" />
          </div> 
          <div className="product-inf"> 
            <p className="product-title">Sum is a series designed by the Danish designer Simon Legald, who is the <br /> epitome of modern elegance. Elegant and resolute as the tip of a wing, the <br /> armrests spread out invitingly, as if they want to embrace you in the armchair's <br /> soft, homely space.</p> 
            <div className="btn-div">
            <button className="addToCart-btn" onClick={() => addToCart(6)}> ADD TO CART{cartAmount > 0 && <>({cartAmount})</>}</button> 
            <button className="learn-more">Buy Now</button> 
            </div>
          </div> 
          </div> 
            <div className="product-text mobile-product-text"> 
            <div className="product-sub-test"> 
              <p className="title">Texture:</p> 
              <p className="product-information">Liquid</p> </div> 
            <div className="product-sub-test"> 
              <p className="title">Weight:</p>
              <p className="product-information">200ml</p> </div> 
            <div className="product-sub-test"> <p className="title">Size:</p> 
              <p className="product-information">10xm x 5cm</p> 
            </div> 
            </div> 
            </div> ) }

export default product6;