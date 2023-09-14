import React from 'react';
import './productView.css';

const ProductView = () => {
  return (
    <div className='productView_container'>
        <div className='productView_image_container'>
            <img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </div>
        <div className='productView_info_container'>
            <h1>Denim Jumpsuit</h1>
            <h1>Rs. 4500</h1>
            <hr />
            <div className='productView_add_container'>
                <input type='number' min='1'/>
                <button>ADD TO CART</button>
            </div>
        </div>
    </div>
  )
}

export default ProductView