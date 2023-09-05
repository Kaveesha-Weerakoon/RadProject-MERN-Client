import './Update.css'
import { useCookies } from 'react-cookie'
import axios from "axios"
import { useEffect, useState } from "react"

export const Update = () => {

    const [cookies, setCookies] = useCookies(["access_token"]);
    const [username, setUserName] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [contactno, setcontactno] = useState("");


    const fetchUserName = async () => {
        try {
            const userId = window.localStorage.getItem("userID");
            const response = await axios.get(`http://localhost:3001/Customer/customer/${userId}`);
            const { username, email, address, contactno, } = response.data;
            setUserName(username);
            setemail(email);
            setaddress(address);
            setcontactno(contactno);
        } catch (error) {
            console.error("Error fetching user name:", error);
        }
    }

    useEffect(() => {

        if (cookies.access_token) {
            fetchUserName();
        }
    }, [cookies.access_token]);


    const onSubmit = () => {
        console.log('sds');
    }
    return <div className='Update-main'>
        <div className="Update-main-left"></div>
        <form onSubmit={onSubmit} action="onSubmit" className="Update-main-right">
            <h2 className='registerformh1'>My Profile</h2>

            <div className='registerformgroup'>
                <label className="registerformlabel" htmlFor="username">Name</label>
                <input className="registerforminput" value={username} required minLength={5} type="text" id="username" onChange={(event) => { setUserName(event.target.value) }} />
            </div>
            <div className='registerformgroup'>
                <label className="registerformlabel" htmlFor="email">Email</label>
                <input className="registerforminput" value={email} required minLength={5} type="email" id="email" onChange={(event) => { setemail(event.target.value) }} />
            </div>
            <div className='registerformgroup'>
                <label className="registerformlabel" htmlFor="contactnumber">Contact Number</label>
                <input className="registerforminput" value={contactno} required minLength={5} type="number" id="contactnumber" onChange={(event) => { setcontactno(event.target.value) }} />
            </div>
            <div className='registerformgroup'>
                <label className="registerformlabel" htmlFor="dob">Adress</label>
                <input className="registerforminput" value={address} required minLength={5} type="text" id="dob" onChange={(event) => { setaddress(event.target.value) }} />
            </div>
            <div className='regbutton '>
                <button type='submit' className='registerbutton'>Update</button>
            </div>
        </form >
    </div >
}