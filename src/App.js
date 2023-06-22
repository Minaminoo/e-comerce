import './index.css';
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Category } from './components/Category';
import Product1 from './productPage/product1';
import Product2  from './productPage/porduct2';
import Product3  from './productPage/product3';
import Product4  from './productPage/product4';
import Product5  from './productPage/product5';
import Product6  from './productPage/product6';
import Product7  from './productPage/product7';
import Product8  from './productPage/product8';
import Product9  from './productPage/product9';
import Product10  from './productPage/product10';
import Product11  from './productPage/product11';
import Product12  from './productPage/product12';
import Product13  from './productPage/product13';
import Product14  from './productPage/product14';
import Product15  from './productPage/product15';
import Product16  from './productPage/product16';
import Product17  from './productPage/product17';
import Product18  from './productPage/product18';
import Product19  from './productPage/product19';
import Product20  from './productPage/product20';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ProductContextProvidor } from './context/productContext';

function App() {
  return (<div>
    <ProductContextProvidor>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/Category" element={<Category />} />
          <Route path="/Category/productPage/1" element={<Product1 />} />
          <Route path="/Category/productPage/2" element={<Product2 />} />
          <Route path="/Category/productPage/3" element={<Product3 />} />
          <Route path="/Category/productPage/4" element={<Product4 />} />
          <Route path="/Category/productPage/5" element={<Product5 />} />
          <Route path="/Category/productPage/6" element={<Product6 />} />
          <Route path="/Category/productPage/7" element={<Product7 />} />
          <Route path="/Category/productPage/8" element={<Product8 />} />
          <Route path="/Category/productPage/9" element={<Product9 />} />
          <Route path="/Category/productPage/10" element={<Product10 />} />
          <Route path="/Category/productPage/11" element={<Product11 />} />
          <Route path="/Category/productPage/12" element={<Product12 />} />
          <Route path="/Category/productPage/13" element={<Product13 />} />
          <Route path="/Category/productPage/14" element={<Product14 />} />
          <Route path="/Category/productPage/15" element={<Product15 />} />
          <Route path="/Category/productPage/16" element={<Product16 />} />
          <Route path="/Category/productPage/17" element={<Product17 />} />
          <Route path="/Category/productPage/18" element={<Product18 />} />
          <Route path="/Category/productPage/19" element={<Product19 />} />
          <Route path="/Category/productPage/20" element={<Product20 />} />
        </Routes>
        <Footer />
      </Router>
    </ProductContextProvidor>
  </div>);
}

export default App;
