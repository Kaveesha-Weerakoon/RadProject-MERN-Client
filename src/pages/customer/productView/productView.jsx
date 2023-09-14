import React from 'react';
import './productView.css';
import CheckIcon from '@mui/icons-material/Check';
import Cart from '../cart/cart';
import { Link } from 'react-router-dom';

const ProductView = () => {
  return (
    <div className='productView_container'>
        <div className='productView_image_container'>
            <img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </div>
        <div className='productView_info_container'>
            <h1>Denim Jumpsuit</h1>
            <h1>Rs. 4500</h1>
            <div className='productView_container_icon'>
              <CheckIcon />
              <p>Free Delivery</p>
            </div>
            
            <hr />
            <div className='productView_add_container'>
                <input type='number' min='1' defaultValue='1'/>
                <Link to='/cart' className='linkto_cart'>ADD TO CART</Link>
            </div>
        </div>
    </div>
  )
}

export default ProductView