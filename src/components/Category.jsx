import products from '../products';
import { Product } from './Product';
import { Link } from 'react-router-dom'

export const Category = () => {
  return(<div>
    <Link to="/" className="Home"><img src="/images/arrow.jpg" alt="arrow" className="arrow" />Home</Link>
    <div className="products">
      { products.map((product) => (<Product data={product} />)) }
    </div>
  </div>)
}