import React from "react";
import { useState } from "react";
import axios from 'axios';
import {useDispatch,  } from "react-redux"
import { useSelector } from "react-redux/es/exports";

import { ADDProductFail, ADDProductReq, ADDProductSUccess, GetProductFail, GetProductreq, GetProductSuccess } from "../Redux/action";

const AddProduct = () => {
  const dispatch=useDispatch()
  const Select=useSelector(state=>state)
  const [OBj,setOBj]=useState({
    name:"",
    image:"",
    price:"",
    category:""
  })
  //const select =useSelector(state=>state)
  const [addpr,Setadd]=useState([])
  function Addpro(OBj){
  
   axios.post(`http://localhost:8080/products`,OBj).then(res=>{
    //console.log(res.data)
   })
   axios.get(`http://localhost:8080/products`).then(res=>{
    dispatch(GetProductSuccess(res.data))
    console.log(Select)
   })
  }
  const HandleChange=(e)=>{
    const {name,value} =e.target;
    const evals={
      ...OBj,
      [name]:value
    }
    setOBj(evals);
    console.log(OBj);
  }
  return (
    <div>
      <h3>Add Product</h3>
      <div>
        <div>
          <label>Product title</label>
          <input data-cy="add-product-title" type="text" name="name" onChange={HandleChange}/>
        </div>
        <div>
          <label>Product Category</label>
          <select data-cy="add-product-category" name="category" onChange={HandleChange}>
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div>
          <label>Product Image</label>
          <input
            data-cy="add-product-image"
            type="url"
            placeholder="Image URL"
            name="image"
           onChange={HandleChange}/>
        </div>
        <div>
          <label>Product Price</label>
          <input data-cy="add-product-price" type="text" name="price" onChange={HandleChange}/>
        </div>
        <div>
          <button data-cy="add-product-button" onClick={()=>Addpro(OBj)}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
