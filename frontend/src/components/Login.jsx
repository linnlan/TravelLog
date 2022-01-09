import './login.css'
import {Room, Cancel} from '@material-ui/icons'
import { useState, useRef } from 'react';
import axios from 'axios';

export default function Login({setShowLogin}) {
    const [error, setError] = useState(false);
    const nameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e)=>{
        e.preventDefault(); //wont reload on submit
        const user = {
            username: nameRef.current.value,
            password: passwordRef.current.value,
        };
        try{
            await axios.post('/users/login', user);
            setError(false);
        } catch(err){
            setError(true);
        }
    }
    return (
        <div className='loginContainer'>
            <div className='logo'>
                <Room/> Pin
            </div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='username' ref={nameRef}></input>
                <input type='text' placeholder='password' ref={passwordRef}></input>
                <button className='loginBtn'>Login</button>
                {error && (<span className='failure'>Something went wrong</span>)}
            </form>
            <Cancel className='loginCancel' onClick={()=>setShowLogin(false)}></Cancel>
        </div>
    );
}