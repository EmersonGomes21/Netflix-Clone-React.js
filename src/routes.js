import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';


  
export default () =>{
 return (
 
 <BrowserRouter>
    <Route path="/" exact component={Home}/>
  </BrowserRouter>
  
  )
}
 