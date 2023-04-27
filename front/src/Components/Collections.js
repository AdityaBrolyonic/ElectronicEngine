import React from 'react'
import Fade from 'react-reveal/Fade'
import "../Css Files/Collections.css";
import { useNavigate } from 'react-router-dom';

function Collections() {

  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/ShowProduct?category=${category}`);
  }


  return (
    <div className='collections'>

    <Fade bottom>
    <div className='collectionsa'> Choose from our Collections!!! </div>
    </Fade>

  <div className='ColItems'>
  <Fade bottom small>
<div className='icon1' onClick={() => handleClick("Laptops")}></div>     
<div className='icon2' onClick={() => handleClick("Mobile")}></div> 
<div className='icon3' onClick={() => handleClick("Headphones")}></div>
<div className='icon4' onClick={() => handleClick("Headphones")}></div>
<div className='icon4' onClick={() => handleClick("Headphones")}></div> 

</Fade>
  </div>
  </div>
  )
}

export default Collections