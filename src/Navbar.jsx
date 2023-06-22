import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
    <div>
      <div className="contanier">
      <Link to="/" className="h1"><img src="/images/logo.png" alt="logo" className="title-image" /></Link>
      <div className="btns mobile">
        <Link to="/componets/Category" className="Category"> CATEGORIES </Link>
        <Link to="Category/productPage/1"> PRODUCT PAGE </Link>
        <Link to="/Cart" className="cart"><img src="/images/Cart.jpg" alt="cart" className="cart-icon cart-mobile" /></Link>
      </div>
      </div>
    </div>
  );
}