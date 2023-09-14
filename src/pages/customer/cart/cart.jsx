import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components";
import './cart.css';
import fullglove from '../../../assests/full_glove.png';
import airbike from '../../../assests/air_bike.png';

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;


const Cart = () => {
  return (
    
    <div className='cart_wrapper'>
        <h1>MY CART</h1>
        <div className='cart_top'>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </div>
        <div className='cart_bottom'>
          <div className='cart_info'>
            <div className='cart_product'>
              <div className='cart_product_detail'>
                <img src={fullglove} />
                <div className='cart_details'>
                  <div className='cart_product_name'>
                    <p>Full Glove</p>
                  </div>
                </div >
              </div>
              <div className='cart_pricedetail'>
                <div className='cart_product_amount_container'>
                  <input type='number' defaultValue='1'/>
                </div>
              </div>
              <div className='cart_product_price'>
                <p>RS.20000</p>
              </div>
            </div>
            <hr/>
            <div className='cart_product'>
              <div className='cart_product_detail'>
                <img src={airbike} />
                <div className='cart_details'>
                  <div className='cart_product_name'>
                    <p>Air Bike</p>
                  </div>
                </div >
              </div>
              <div className='cart_pricedetail'>
                <div className='cart_product_amount_container'>
                  <input type='number' defaultValue='1'/>
                </div>
              </div>
              <div className='cart_product_price'>
                <p>RS.300000</p>
              </div>
            </div>
        </div>
        <div className='cart_summary'>
            <h1>ORDER SUMMARY</h1>
            <div className='summary_item'>
              <p>Subtotal</p>
              <p>Rs.320000</p>
            </div>
            <div className='summary_item'>
              <p>Delivery Chargers</p>
              <p>Rs.750</p>
            </div>
            <div className='summary_item_total'>
              <p>Total</p>
              <p>Rs.320750</p>
            </div>
            <div className='cart_button'>
                <button>PLACE ODER</button>
            </div>
            </div>

        </div>
        
    </div>
  );
};

export default Cart;