import React from 'react'
import Home from './Home'
import Registration from './Registration';
import Login from './Login';
import Addpro from "./Addpro";
import ContactUs from './ContactUs';
import { Routes, Route} from 'react-router-dom'

function AnimatedOutputs() {

  return (
    <Routes>
    <Route path='/' exec element={<Home />}></Route>
    <Route path="/Addpro" exec element={<Addpro />} /> 
    <Route path="/Registration" exec element={<Registration />} /> 
    <Route path='/Contact' exec element={<ContactUs/>}/>
    <Route path='/Login' exec element={<Login/>}/>
  </Routes>
  )
}

export default AnimatedOutputs