import Products from '../../components/products/products';
import './Home.css'
import Footer from './Footer';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (<div>
        <div className='Hometop'>
            <div className='Hometoptopic'>
                <h1 className='Hometoph1 animate__animated animate__pulse'>GEAR.COM</h1>
                <h3 className='Hometoph3 animate__animated animate__pulse'> Fuel your ambition with fitness</h3>
            </div>

            <Link to='/products'><button className='Hometopbutton animate__animated animate__pulse' >Shop Now</button></Link>


        </div>

        <Products />
        <Footer />
    </div >);
}