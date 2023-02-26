import React, {useState} from "react";
import axios from 'axios';
export const Register = (props) => {
    
    const [email, setEmail] =useState('');
    const [password,setPass] =useState('');
    const [name,setName]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      name: data.get('name'),
    });
    axios.post("http://localhost:3500/insert", {
      
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password')
    }).then((response)=>{
      console.log(response.data);
    });
    }
    return (
        <div className="auth-form-container" style={{height:"60vh"}}>
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input required value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="full Name" />
                <label htmlFor="email">email</label>
                <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Youremail@gmail.com" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input required value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}