import { Link } from "react-router-dom"
import './Navbar.css'
import { useCookies } from 'react-cookie'

export const Navbar = () => {

    const [cookies, setCookies] = useCookies("access_token");
    const logout = () => {
        setCookies("access_token", "");
    }
    return (<div className="navbar">
        <div className="navbar-left">
            <Link className="navbarlink" to={'/'}>Home</Link>
            <Link className="navbarlink" to={'/aboutus'}>About Us</Link>
            <Link className="navbarlink" to={'/contactus'}>Contact Us</Link>
        </div>
        <div className="navbar-right">
            {!cookies.access_token ? (
                <div>
                    <Link className="navbarlinkbutton" to={'/login'}>Login</Link>
                    <Link className="navbarlinkbutton" to={'/register'}>Sign Up</Link>
                </div>
            ) : (

                <div>
                    <button onClick={logout}>
                        Logout
                    </button>
                </div>
            )
            }

        </div>


    </div>)
}
//
