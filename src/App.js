import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/customer/Home.js';
import { Register } from './pages/customer/Register.js';
import { Login } from './pages/customer/Login.js';
import { AdminLogin } from './pages/admin/Login';
import { Aboutus } from './pages/customer/Aboutus';
import { Navbar } from "./components/Navbar.js";
import { Contactus } from './pages/customer/Contactus.js';
import HHome from './HHome';
import { Admin } from './pages/admin/Admin';
import { useCookies } from 'react-cookie';
import { AccessDenied } from './SupComponents/AccessDenied';


function App() {
  const [cookies, setCookies] = useCookies(["admin_token"]);
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path='/' element={<HHome />} >
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/contactus' element={<Contactus />} />
          </Route >
          <Route path='/admin' element={<Adminloginverify><AdminLogin /></Adminloginverify>}> </Route>
          <Route path='/adminlogged' element={<Adminverify><Admin /></Adminverify>}> </Route>

        </Routes>
      </Router >

    </div >
  );

  function Adminverify({ children }) {
    if (cookies.admin_token) {
      return <>{children}</>;
      console.log('sdd');
    }
    return <div><AccessDenied message={'Access Denied'} /></div>
  }

  function Adminloginverify({ children }) {
    if (!cookies.admin_token) {
      return <>{children}</>;

    }
    return <div><AccessDenied message={'Your are Logged In'} /></div>
  }
}


export default App;
