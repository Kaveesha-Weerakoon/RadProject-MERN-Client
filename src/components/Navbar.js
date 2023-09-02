import { Link } from "react-router-dom"
import './Navbar.css'

export const Navbar = () => {
    return (<div className="navbar">
        <div className="navbar-left">
            <Link className="navbarlink" to={'/'}>Home</Link>
            <Link className="navbarlink" to={'/aboutus'}>About Us</Link>
            <Link className="navbarlink" to={'/contactus'}>Contact Us</Link>
        </div>
        <div className="navbar-right">
            <Link className="navbarlinkbutton" to={'/register'}>Sign Up</Link>
            <Link className="navbarlinkbutton" to={'/login'}>Login</Link>
        </div>


    </div>)
}