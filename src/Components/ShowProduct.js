import React from 'react'
import { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom';
import  Axios  from 'axios'
import Fade from 'react-reveal/Fade'
import ProductCard from './ProductCard';


function ShowProduct(props) {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  const log = props.loggedIn;

    const [productList, setProductList] = useState([]);
    
    useEffect(() => {
Axios.post("http://localhost:3001/showProducts", {name : category,}).then((response) => {setProductList(response.data)})


// Axios.post("http://localhost:3001/showProductImage", {name : category,}).then((response) => {setImageUrl(response.data)})
});

  return (
    <div className='CardPage'>
        {
           productList && productList.length>0 &&  productList.map((val,key) => {

                return (
                  <Fade bottom>
                <ProductCard key={key} product={val} log={log}/>
                </Fade>
                )
            }) }

    </div>
  )
}

export default ShowProduct