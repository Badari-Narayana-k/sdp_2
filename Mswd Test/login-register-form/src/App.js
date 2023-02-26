import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './Login';
import { Register } from './Register';
import Navigation from './Navigation';
import {Cover} from './Cover';
import { Container, AppBar, Toolbar } from '@material-ui/core';
import About from './About';
import Cart from './Cart';
import Checkout from './checkout.jsx';
import Products from './Products';
import Feedback from './Feedback';
import Home from './Home';
function App() {
  const [currentForm, setCurrentForm]=useState("Cover");

  const toggleForm =(formName) => {
    setCurrentForm(formName);
  }

  function Page(){
    if(currentForm==="Cover")
    {
      return(
        <div>
          <Cover onFormSwitch={toggleForm}/>
        </div>
        
      );

    }
    if(currentForm==="home")
    {
      return(
        <div style={{display:"block"}}>
          
          <Home onFormSwitch={toggleForm}/>
          
        </div>
      );

    }
    if(currentForm==="login")
    {
      return(
        <div style={{display:"block"}}>
          
          <Login onFormSwitch={toggleForm}/>
          
        </div>
      );

    }
    if(currentForm==="register")
    {
      return(
        <div>
          <Register onFormSwitch={toggleForm}/>
        </div>
      );

    }
    if(currentForm==="about")
    {
      return(
        <div>
          <About onFormSwitch={toggleForm}/>
        </div>
      );

    }
    if(currentForm==="feedback")
    {
      return(
        <div>
          <Feedback onFormSwitch={toggleForm}/>
        </div>
      );

    }
    if(currentForm==="products")
    {
      return(
        <div>
          <Products onFormSwitch={toggleForm}/>
        </div>
      );

    }
    if(currentForm==="cart")
    {
      return(
        <div>
          <Cart onFormSwitch={toggleForm}/>
        </div>
      );

    }
    if(currentForm==="checkout")
    {
      return(
        <div>
          <Checkout onFormSwitch={toggleForm}/>
        </div>
      );
    }
  }
  return (
    
    <div className="App" >
      <div className='AppHeader'>
        <Navigation onFormSwitch={toggleForm}/>
      </div>

      <div className="App-body">
      
        <Container >
          
          <Page />
        </Container>
      </div>
      
    </div>
  );
}

export default App;
