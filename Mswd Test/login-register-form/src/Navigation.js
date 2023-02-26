import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navigation (props)  {
  return (
     <AppBar position="fixed">
      <Toolbar>
        <Typography onClick={() =>props.onFormSwitch('Cover')} variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textAlign:"left"}}>
          STRIX
        </Typography>
        <Button onClick={() =>props.onFormSwitch('home')} color="inherit">Home</Button>
        <Button onClick={() =>props.onFormSwitch('products')} color="inherit">Products</Button>
        <Button onClick={() =>props.onFormSwitch('about')} color="inherit">About</Button>
        <Button onClick={() =>props.onFormSwitch('feedback')} color="inherit">Feedback</Button>
        <Button onClick={() =>props.onFormSwitch('cart')} style={{color:"white"}}>Cart</Button>
      </Toolbar>
     </AppBar>
  );
};
