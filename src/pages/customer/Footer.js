import React from 'react'
import './footer.css'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <div className='footerr'>
      <div className='footermain'>
      <div className='footerdiv'>
        <h2 className='footerh2'>Main Links</h2>
        <ul className='footerul'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Products</li>
        </ul>
      </div>
      <div className='footerdiv'>
        <h2 className='footerh2cd'>Contact Details</h2>
        <div className='divl'>
          <div className='footeri'><PhoneAndroidIcon /><p>+94766516238</p></div>
          <div className='footeri'><EmailIcon /><p>contact@gear.com</p></div>
        </div>
      </div>
      <div className='footerdiv'>
        <h2 className='footerh2'>Stores</h2>
        <ul className='footerul'>
            <li>Gampaha</li>
            <li>Colombo 5</li>
            <li>Galle</li>
        </ul>
      </div>
      </div>
      <div className='footerc'>
        <p>Copyright © 2023 GEAR</p>
      </div>
    </div>
  )
}
