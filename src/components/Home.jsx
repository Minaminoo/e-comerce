import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (<div>
          <div className="ads">
          <div><img src="images/banner2.jpg" alt="banner" className="banner"/></div>
          <p className="title">
            Comfortable & Elegante Living
            <p className="sub-title">RAOUF Products are all made to standard sizes <br /> so that you can mix and match them freely.</p>
            <a href="/Category" className="btn">SHOP NOW</a>
          </p>
        </div>
          <p className="title h2">Products we are proud of</p>
          <div className="products">
          <div className="card">
            <Link to={`Category/productPage/1`}>
            <img src="images/products/Little Armchair Sheepskin.jpg" alt="Little Armchair Sheepskin" className="image" />
            <p className="inf">Little Armchair Sheepskin</p>
            <p className="price">980$</p>
            </Link>
          </div>
           <div className="card">
            <Link to={`Category/productPage/2`}>
            <img src="images/products/Pop-Up Toaster.jpg" alt="Pop-Up Toaster" className="image" />
            <p className="inf">Pop-Up Toaster</p>
            <p className="price">45$</p>
            </Link>
          </div>
          <div className="card">
            <Link to={`Category/productPage/3`}>
            <img src="images/products/Lamp Light Blue.png" alt="Lamp Light Blue" className="image" />
            <p className="inf">Lamp Light Blue</p>
            <p className="price">79$</p>
            </Link>
          </div>
          <div className="card">
            <Link to={`Category/productPage/4`}>
            <img src="images/products/Pulp Unit-5 Compartements.jpg" alt="Pulp Unit-5 Compartements" className="image" />
            <p className="inf">Pulp Unit-5 Compartements</p>
            <p className="price">255$</p>
            </Link>
          </div>
          <div className="card">
            <Link to={`Category/productPage/5`}>
            <img src="images/products/Golden Modern Light.jpg" alt="Golden Modern Light" className="image" />
            <p className="inf">Golden Modern Light</p>
            <p className="price">190$</p>
            </Link>
          </div>
          <div className="card">
            <Link to={`Category/productPage/6`}>
            <img src="images/products/Body Oil 200ml.jpg" alt="Body Oil 200ml.jpg" className="image" />
            <p className="inf">Body Oil 200ml</p>
            <p className="price">67$</p>
            </Link>
          </div>
          <div className="card">
            <Link to={`Category/productPage/7`}>
            <img src="images/products/Black and White Lamp.jpg" alt="Black and White Lamp" className="image" />
            <p className="inf">Black and White Lamp</p>
            <p className="price">220$</p>
            </Link>
          </div>
           <div className="card">
            <Link to={`/Category/productPage/8`}>
            <img src="images/products/Gejst Shelf A Black AshBlack.jpg" alt="Little Armchair Sheepskin" className="image" />
            <p className="inf">Gejst Shelf A Black Ash Black.jpg</p>
            <p className="price">115$</p>
            </Link>
          </div>
          </div>
          <div className="ads">
            <p className="title">
              Creative harmonious living
            <p className="sub-title">RAOUF Products are all made to standard sizes <br /> so that you can mix and match them freely.</p>
              <a href="/Category" className="btn">SHOP NOW</a>
            </p>
            <div><img src="images/banner1.jpg" alt="banner" className="banner"/></div>
          </div>
  </div>)
}