import React from 'react'
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function SectionA() {
  return (
    
    <div className='bgImage'>
      <Fade bottom>
    <div className='bgImageData'>
    <label>
      ELECTRONICS ENGINE
    </label>
    </div>
    <div className='bgImagebtn'>
    <label>
      Choose From A Great Vareity
    </label>
    <IconButton>
      <Link className="hbtn" to="/Product">Shop now</Link>
      </IconButton>
    </div>
    </Fade>
    </div>

  )
}

export default SectionA