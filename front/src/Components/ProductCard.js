import React from 'react'
import "../Css Files/Card.css"
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Axios from "axios";


function ProductCard(props) {

    const {P_Name,P_Price ,P_Image,P_Brand,P_Reviews,P_Quantity,P_Features,P_Description}= props.product
    const loggedIn = props.log;
    Axios.defaults.withCredentials = true;

    console.log(loggedIn);
  return (

    <div className='Card'>

{loggedIn?
           (
        <div className='SImage'>
         <div className='Img'>
            <img src={`${"../Images/"}${P_Image}`} height="100%" width="100%" alt='productImage'/>
            </div>
            <div className='Rate'> 
             <Box sx={{ '& > legend': { mt: 2 } }}>
              <Rating name="simple-controlled" value={P_Reviews} readOnly precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 1, color : "white" }} fontSize="inherit" />}
              />
             </Box>
            </div>
           <div className='buy'>
             <Link className="bbuton" to="/">Buy Now</Link>
            </div>
            </div>)
            :
            ( <div className='SImage'>
            <div className='Img'>
               <img src={`${"../Images/"}${P_Image}`} height="100%" width="100%" alt='productImage'/>
               </div>
               <div className='Rate'> 
                <Box sx={{ '& > legend': { mt: 2 } }}>
                 <Rating name="simple-controlled" value={P_Reviews} readOnly precision={0.5}
                 emptyIcon={<StarIcon style={{ opacity: 1, color : "white" }} fontSize="inherit" />}
                 />
                </Box>
               </div>
              <div className='buy'>
                <Link className="bbuton" to="/Login">Buy Now</Link>
               </div>
               </div>)}
        
    

         <div className='FData'>

        <div className='DetDataFirst'>
    <label className='Detname'>{P_Name}</label>
    <label className='DetBrand'>({P_Brand})</label>
    <label  className='Detprice'>₹{P_Price}.00</label>
    </div>

    <div className='DetDataSecond'>
    <label className='DetHeading1'>Description</label>    
    <label className='DetHeading2'>{P_Description}</label>

    <label className='DetHeading1'>Features</label>    
    <label className='DetHeading2'>{P_Features}</label>
    </div>

    <div className='DetDataThird'>
    <label className='DetBrand'>IN STOCK : {P_Quantity>0 ? P_Quantity:"Not Available"}</label>
    </div>
    </div>
    </div>
  )
}

export default ProductCard