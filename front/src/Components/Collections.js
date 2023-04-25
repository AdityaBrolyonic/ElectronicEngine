import React from 'react'
import Fade from 'react-reveal/Fade'
import "../Css Files/Collections.css";
import { useHistory } from 'react-router-dom';

function Collections() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/about');
  };


  return (
    <div className='collections'>

    <Fade bottom>
    <div className='collectionsa'> Choose from our Collections!!! </div>
    </Fade>

  <div className='ColItems'>
  <Fade bottom small>
<button className='icon1'></button>
<button className='icon2'></button>
<button className='icon3'></button>
<button className='icon4'></button>
<button className='icon4'></button>
</Fade>
  </div>
  </div>
  )
}

export default Collections