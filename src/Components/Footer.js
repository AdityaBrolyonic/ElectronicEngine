import React from 'react'
import '../Css Files/Footer.css'
import {NavLink } from 'react-router-dom';
import logo from "../Images/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
  return (

    <div className='Footer'>      
    <div className='Foot'>

     <div className='fheading'> 

     <div className='h'> <img className="fLogo" src={logo} alt='logo'/> </div>
     <div className='h'>Links</div>
     <div className='h'>Contact Us</div>
     <div className='h'>Follow Us</div>
    
     </div>


     <div className='data'>

     <div className='d'>ElectronicsEngine.com is a place where’s consumers directly buy goods or services from a seller in real-time,
  without intermediary services and charges, over the internet.</div>
     <div className='fNavbar'>
     <NavLink to="/Contact" className='flink'>Contact Us</NavLink>
     <NavLink to='/' className='flink'>Home</NavLink>
     <NavLink to="/Contact" className='flink'>About Us</NavLink>
     </div>
     <div className='fNavbar'>
      <label>Address : CD-4, Power House Colony, Punjabi Bagh, Old Rohtak Road, Delhi-110035</label>
      <label>Phone : 9230293023, 9090920313</label>
      <label>Email: adityakakarot45@gmail.com</label>
     </div>
     <div className='fNavbar'>
      <label><InstagramIcon />/electronicsengine</label>
      <label><FacebookIcon />/electronicsengine</label>
      <label><TwitterIcon />/electronicsengine</label>
      </div>

     </div> 

    
    </div>

    <div className='copyright'>
    Copyright © 2023 ElectronicsEngine. All Rights Reserved
    </div>
    
    </div>
  )
}

export default Footer