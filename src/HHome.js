import { Orders } from './AppI';
import {
    Home, Register, Login, Routes, Route, Router, useLocation, AdminLogin, Aboutus, Navbar, Contactus, UpdateProfile, useCookies, useNavigate, React,
} from './HHomeI';
import { Update } from './pages/customer/Update';
import ProductView from './pages/customer/productView/productView';

function HHome() {
    const [cookies, setCookies] = useCookies(["admin_token", "access_token"]);

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/aboutus' element={<Aboutus />} />
                <Route path='/contactus' element={<Contactus />} />
                <Route path='/productview' element={<ProductView />} />
                <Route path='/updateprofile' element={<CustomerVerify><UpdateProfile /></CustomerVerify>} >
                    <Route path='/updateprofile/orders' element={<CustomerVerify><Orders /></CustomerVerify>} />
                    <Route path='/updateprofile/' element={<CustomerVerify><Update /></CustomerVerify>} />
                </Route>
            </Routes>

            
        </div >
    );

    function CustomerVerify({ children }) {

        if (cookies.access_token) {
            return <>{children}</>;

        }

        return <Navigate to={'/'} />
    }

    function Navigate({ to }) {
        const navigate = useNavigate();

        React.useEffect(() => {
            navigate(to);
        }, [navigate, to]);

        return null;
    }

}

export default HHome;
