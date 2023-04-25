import React from 'react'
import { useEffect,useState } from 'react'
import  Axios  from 'axios'

function ShowProduct(props) {
    const name = props.match.params.name;

    const [productList, setProductList] = useState([]);

    useEffect(() => {
Axios.post("http://localhost:3001/showProducts", {name : name,}).then((response) => {setProductList(response.data)});
    })



  return (
    <div>
        {
            productList.map((val,key) => {

                return <div> 
                    {val.P_Name}
                </div>
            }) }

    </div>
  )
}

export default ShowProduct