import {
  React,
  Router,
  Routes,
  Route,
  useLocation,
  HHome,
  useNavigate,
  useCookies,
  AccessDenied,
  Home,
  Register,
  Login,
  Aboutus,
  Navbar,
  Contactus,
  UpdateProfile,
  Admin,
  AdminLogin,
  Orders
} from './AppI'
import { Update } from './pages/customer/Update';


function App() {
  const [cookies, setCookies] = useCookies(["admin_token", "access_token"]);

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
            <Route path='/updateprofile' element={<UpdateProfile />} >
              <Route path='/updateprofile/orders' element={<Orders />} />
              <Route path='/updateprofile/' element={<Update />} />
            </Route>
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

    }
    return <Navigate to={'/'} />
  }

  function Adminloginverify({ children }) {
    if (!cookies.admin_token) {
      return <>{children}</>;

    }
    return <div><AccessDenied message={'Your are Logged In'} /></div>
  }

  function Navigate({ to }) {
    const navigate = useNavigate();

    React.useEffect(() => {
      navigate(to);
    }, [navigate, to]);

    return null;
  }

}


export default App;
