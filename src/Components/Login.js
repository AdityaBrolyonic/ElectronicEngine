import React from 'react'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';
import IconButton from '@mui/material/IconButton';
import "../Css Files/Form2.css"
import {Link} from 'react-router-dom';
import Bounce from "react-reveal/Bounce"
import Axios from "axios";
  

function Login({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  Axios.defaults.withCredentials = true;

  const userLogin = (e) => {
e.preventDefault();

    Axios.post("http://localhost:3001/userLogin", {
      password : password,
      email:email,
    }).then((response) => {
      localStorage.setItem('refreshToken', true);
      window.location.href = "/"; })
  }



  // useEffect(() => {
  //   Axios.get("http://localhost:3001/userLogin").then((response) => {
  //     if(response.data.loggedIn === true)
  //   { setLoginStatus(response.data.user[0].U_Name)}
  //   })
  // }, [])




  return (
    <Fade>
    <div className="Log">
    <Bounce right>
     <div className='LForm'>

     <div className='Lfirst'>
        Log In
      </div>
     
     <div className='LSecond'>
     <div className='LSecondA'>
     <input type='email' className='Linput'  name="email" autoComplete='off' required placeholder='Email'
      onChange={(event) => 
        {
        setEmail(event.target.value);
        }}/>

     <input type='password' className='Linput'  name="pass" required placeholder='Password' 
      onChange={(event) => 
        {
        setPassword(event.target.value);
        }}/>
     </div>
     </div>

     <div className='LThird'>
     <IconButton onClick={userLogin}>
      <Link className="rbtn" >Log In</Link>
      </IconButton>
      <Link className='click' to="/Registration"> Dont have an account yet, click here </Link>
     </div>

     </div>   
     </Bounce>
     </div>
     </Fade> 
  )
}

export default Login