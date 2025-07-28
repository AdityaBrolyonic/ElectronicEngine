// import React,{useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../Images/logo.png";
import '../Css Files/Header.css';
import Axios from "axios";


function Header({loggedIn, onLogout, name}) {

  const isLoggedIn = localStorage.getItem('refreshToken');

  Axios.defaults.withCredentials = true;

  const userLogout = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/userLogout").then((response) => {
      localStorage.removeItem('refreshToken');
      window.location.href = "/";})
  }
  

  return (
     <div className='Header'>
      
     <Link className='HeadImage' to='/'>
     <img src={logo} height="100%" width="100%" alt='logo'/>
     </Link>

    {loggedIn && isLoggedIn ?       
    (
      <>
          <div className='links'>
          <Link to='/' className='link'><HomeOutlinedIcon fontSize='small'/>Home</Link>
           <Link to='/Collection' className='link'><FormatListBulletedOutlinedIcon fontSize='small'/>Collections</Link>
           <Link to='/Feedback' className='link'><FormatListBulletedOutlinedIcon fontSize='small'/>Feedback</Link>
           </div> 
      
           <div className='account'>
              <label className='link' onClick={userLogout}><AccountCircleOutlinedIcon fontSize='small' />{name}</label>
              <Link to="/Cart" className='cartlink'><ShoppingCartIcon fontSize='small' className='carthicon' /></Link>
            </div></>
            )

            :

            ( 
              <>
              <div className='links'>
              <Link to='/' className='link'><HomeOutlinedIcon fontSize='small'/>Home</Link>
               <Link to='/Collection' className='link'><FormatListBulletedOutlinedIcon fontSize='small'/>Collections</Link>
               <Link to="/Registration" className='link'><AppRegistrationIcon fontSize='small'/>Registration</Link>
               <Link to="/Login" className='link'><LoginIcon fontSize='small'/>Login</Link>
                </div>
               
               <div className='account'>
                 <label className='link'><AccountCircleOutlinedIcon fontSize='small' /> Guest </label>
                 <Link to="/Cart" className='cartlink'><ShoppingCartIcon fontSize='small' className='carthicon' /></Link>
               </div></>
             ) 
  
  }
     </div>

  )
}

export default Header