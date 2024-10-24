import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/productContext';

export const Navbar = () => {
  const { getTotalCartNumber } = useContext(ProductContext);
  const totalAmount = getTotalCartNumber();
  return (
    <div>
      <div className="contanier">
      <Link to="/" className="h1"><img src="/images/logo.png" alt="logo" className="title-image" /></Link>
      <div className="btns">
        <Link to="/Category"> CATEGORIES </Link>
        <Link to="Category/productPage/1"> PRODUCT PAGE </Link>
        <Link to="/Cart" className="cart"><img src="/images/Cart.jpg" alt="cart" className="cart-icon" /> 
          <p className='notification'>{totalAmount}</p>
        </Link>
      </div>
      </div>
    </div>
  );
}
