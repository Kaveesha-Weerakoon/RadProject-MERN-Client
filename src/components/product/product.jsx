import React from 'react';
import productimage from '../../assests/product1.png';
import './product.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const Product = ({item}) => {
  return (
    <Link to='/productview' className='product_container'>
        <div className='image_container'>
            <img src={productimage} />
        </div>
        <div className='product_info'>
            <p>{item.title}</p>
            <p>{item.price}</p>
        </div>
        <div className='cart'>
           <ShoppingCartOutlinedIcon/>
           <button>Add to Cart</button> 
        </div>
    </Link>
  )
}

export default Product