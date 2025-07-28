import React from 'react'
import { useState } from 'react'
import Axios from "axios"

import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';

function Addpro() {

const [name, setName] = useState("");
const [id, setId] = useState("");
const [image, setImage] = useState("");
const [desc, setDesc] = useState("");
const [brand,setBrand] = useState("");
const [price, setPrice] = useState("");
const [qua, setQua] = useState("");
const [features, setFeatures] = useState("");
const [category, setCategory] = useState("");
const [review, setReview] = useState("");

const addProduct = () => {
  Axios.post("http://localhost:3001/createProduct", {
    name : name,
    id:id,
    image : image,
    desc : desc,
    brand:brand,
    price : price,
    qua:qua,
    features:features,
    category:category,
    review:review,
  }).then(() => {console.log("Success");})
}

  return (
<>
     <center>
    
    <label>Product Name</label>  <input type='text'  name="name"  required
    onChange={(event) => 
    {
      setName(event.target.value);
    }}/>
    <br />
    <label>Product ID</label> <input type='text'  name="id"  required
    onChange={(event) => 
    {
      setId(event.target.value);
    }}/>
    <br />
    <label>Product Image</label> <input type='text'  name="image"  required 
    onChange={(event) => 
    {
      setImage(event.target.value);
    }}/>
    <br />

    <label>Product Description</label>  <textarea  name="desc"  required
    onChange={(event) => 
    {
      setDesc(event.target.value);
    }}/>
    <br />
    <label>Product Brand</label>  <input type='text'  name="brand"  required
    onChange={(event) => 
    {
      setBrand(event.target.value);
    }}/>
    <br />
    <label>Product Quantity</label>  <input type='text'   name="qua"  required
    onChange={(event) => 
    {
      setQua(event.target.value);
    }}/>
    <br />
    <label>Product Price</label>  <input type='text'   name="price" required
    onChange={(event) => 
    {
      setPrice(event.target.value);
    }}/>
    <br />
    <label>Product Features</label>  <textarea  name="features" required
    onChange={(event) => 
    {
      setFeatures(event.target.value);
    }}/>
    <br />
    <label>Product Category</label>  <input type='text'   name="category" required
    onChange={(event) => 
    {
      setCategory(event.target.value);
    }}/>
    <br />
    <label>Product Reviews</label>  <input type='text'   name="review" required
    onChange={(event) => 
    {
      setReview(event.target.value);
    }}/>
    <br />

     <div className='Third'>
     <IconButton  onClick={addProduct}>
      <Link className="rbtn">Shop now</Link>
      </IconButton>
     </div>
     </center>
</>
  )
}

export default Addpro