import './Contactus.css'
import image from '../../assests/contactus02.jpg';

export const Contactus = () => {
    return (
        <div>
          <img className='contactusimg' src={image} />
          <div className='contactusdiv'>
            <h1 className='contactush1'>Contact Us</h1>
            <form className='contactusform'>
              <label className='contactusl'>Name : </label><br/>
              <input className='contactusi' type='text' required></input><br/>
              <label className='contactusl'>Contact No. : </label><br/>
              <input className='contactusi' type='text' required></input><br/>
              <label className='contactusl'>Problem : </label><br/>
              <textarea className='contactusta' required></textarea><br/>
              <input className='contactuss' type='submit' value='Submit'/>
            </form>
          </div>
        </div>
      )
}