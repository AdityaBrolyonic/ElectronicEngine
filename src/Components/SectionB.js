import React from 'react'
import Fade from 'react-reveal/Fade'


function SectionB() {
  
  return (
  
  <div className='ssecond'>
    <div className='seconda'> 
    <Fade bottom>
    <div className='Sheading'> Electronic Engine </div>
    </Fade>
    
    <div className='Sdata'>
    <Fade bottom> ElectronicsEngine.com is a place where consumers directly buy goods or services from a seller in real-time, without intermediary services and charges, over the internet.
    </Fade>
</div>
</div>
<Fade bottom small>
  <div className='Items'>
  <Fade bottom>
    <div> EASY FOUR STEP PROCESS !!! </div>
    </Fade>

<div style={{ display : "flex", flexDirection : "row", justifyContent : "center" ,width : "100%"}}>
<div className='icon1'>REGISTER</div>
<div className='icon2'>CHOOSE YOUT PRODUCT</div>
<div className='icon3'>ORDER IT</div>
<div className='icon4'>RECEIVE & ENJOY</div> 

</div>
  </div>
  </Fade>
  </div>
  
  )
}

export default SectionB