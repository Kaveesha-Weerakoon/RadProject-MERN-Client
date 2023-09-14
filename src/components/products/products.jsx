import React from 'react';
import { popularProducts } from '../../data';
import Product from '../product/product';
import './products.css';


const Products = () => {
  return (
    <div className='products_container'>
      <div className='products_title'>  
        <h1>Featured Products</h1>
      </div>
    
      <div className='products_container_list'>
        {popularProducts.map((item) => (
            <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Products