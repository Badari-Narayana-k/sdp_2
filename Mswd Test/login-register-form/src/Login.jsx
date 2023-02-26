import React, {useEffect, useState} from "react";
import {useRef,useContext} from "react";
import Home from './Home'
import axios from 'axios';
const LOGIN_URL = '/auth';
export const Login = (props) => {
    const errRef=useRef();
    const [login, setLogin] = useState(null);
    const [email, setEmail] =useState('');
    const [password,setPass] =useState('');
    const [success,setSuccess] =useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData (e.currentTarget);
    
    axios.get('http://localhost:3500/check',{params:{
      email: data.get("email"),
      password: data.get("password")
    }})
    .then((res)=>{
      console.log(res.data)
      setLogin(res.data)
      setEmail ( data.get("email"));
      setPass ( data.get("password"));
    })
       if(login==='PASS')
       {
            setSuccess(true);
       } 
    }

    return (
        <>
        {success?(
           <Home email={email}  />
        ):(

        
        
        <div className="auth-form-container" style={{height:"50vh"}}>
           
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input required  value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Youremail@gmail.com" id="email" name="email"/>
                
                <label htmlFor="password">password</label>
                <input required  value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>
                
                <button type="submit">Log In</button>
            </form>
            <button  className="link-btn" onClick={() =>props.onFormSwitch('register')}>Dont have an account? Register here.</button>
        </div>
        )}
        </>
    )
}