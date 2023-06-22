import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false)
  return (
    <div>
      <div className="contanier">
      <Link to="/" className="h1"><img src="/images/logo.png" alt="logo" className="title-image" /></Link>
      <div className="btns">
        <Link to="/Category"> CATEGORIES </Link>
        <Link to="Category/productPage/1"> PRODUCT PAGE </Link>
        <Link to="/Cart" className="cart"><img src="/images/Cart.jpg" alt="cart" className="cart-icon" /></Link>
      {/* <div className="menu-mobile">
        <img src="/images/icon-menu.svg" alt="menu" className="menu" onClick={setMenuIsOpen(true)} />
        {menuIsOpen ? <div className="menu-btns">
        <a href="/Category"> CATEGORIES </a>
        <a href="Category/productPage/1"> PRODUCT PAGE </a>
        <a href="/Cart" className="cart"><img src="/images/Cart.jpg" alt="cart" className="cart-icon" /></a>
        </div> : (<><img src="/images/icon-close.svg" alt="close" className="close" onClick={setMenuIsOpen(false)} /></>)}
      </div> */}
      </div>
      </div>
    </div>
  );
}
