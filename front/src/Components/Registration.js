import React from 'react'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { useState } from 'react'
import Axios from "axios"
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';

import '../Css Files/RegForm.css'



function Registration() {

const [name, setName] = useState("");
const [number, setNumber] = useState("");
const [pincode, setPincode] = useState("");
const [address, setAddress] = useState("");
const [state,setState] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const createUser = () => {
  Axios.post("http://localhost:3001/createUser", {
    name : name,
    number:number,
    pincode : pincode,
    address : address,
    state:state,
    password : password,
    email:email,
  }).then(() => {console.log("Success");})
}


  return (
    <Fade>
    <div className="Registration">
      <Bounce right>
     <div className='Form'>

      <div className='first'>
        Sign In
      </div>
     
     <div className='Second'>
     <div className='SecondA'>
      <input type='text' className='input'  name="name"  autoComplete='off' required placeholder='Username'
      onChange={(event) => 
      {
      setName(event.target.value);
      }}/>
      <input type='text' className='input'  name="number" autoComplete='off'  required placeholder='Number'
      onChange={(event) => 
      {
      setNumber(event.target.value);
      }}/>
      <input type='text' className='input'  name="address" autoComplete='off'  required placeholder='Address'
      onChange={(event) => 
        {
        setAddress(event.target.value);
        }}/>
      <input type='text' className='input'  name="pincode" autoComplete='off'  required placeholder='Pincode' 
      onChange={(event) => 
        {
        setPincode(event.target.value);
        }}/>
      <input type='text' className='input'  name="state" autoComplete='off' required placeholder='State'
      onChange={(event) => 
      {
      setState(event.target.value);
      }}/>
      <input type='email' className='input'  name="email" autoComplete='off' required placeholder='Email'
      onChange={(event) => 
        {
        setEmail(event.target.value);
        }}/>
      <input type='password' className='input'  name="pass" required placeholder='Password' 
      onChange={(event) => 
        {
        setPassword(event.target.value);
        }}/>
     </div>
     </div>

     <div className='Third'>
     <IconButton onClick={createUser}>
      <Link className="rbtn" >Register</Link>
      </IconButton>
     </div>

     </div>    
     </Bounce>
     </div>
     </Fade> 
)}
export default Registration