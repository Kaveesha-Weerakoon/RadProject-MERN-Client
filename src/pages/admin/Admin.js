import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const Admin = () => {

    const navigate = useNavigate();
    const [_, setCookies] = useCookies("admin_token");

    const logout = () => {
        setCookies("admin_token", "");
        window.localStorage.removeItem("adminID");
        navigate('/admin')

    }
    return <div><button onClick={logout}>Logout</button></div>
}