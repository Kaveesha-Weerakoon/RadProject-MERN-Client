import React from 'react';
import { popularProducts } from '../../data';
import Product from '../product/product';
import './products.css';


const Products = () => {
  return (
    
    <div className='products_container'>
        {popularProducts.map((item) => (
            <Product item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Products