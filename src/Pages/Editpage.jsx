import axios from "axios";
import React from "react";
import { useState } from "react";
import { Await, useNavigate, useParams } from "react-router-dom";

const Editpage = () => {
  const [data,setData]=useState({
    name:"",
    price:""
  })
  const navigate=useNavigate()
  const {id} = useParams()
  function Handlechange(e) {
     const {name,value}=e.target;
    // console.log(name,value)
     setData({
      ...data,
      [name]:value
     })
    console.log(data,id)
  }
  
   function Update(data) {
      axios.patch(`http://localhost:8080/products/${id}`,data,{ headers: { 'Content-Type': 'application/json' }, }).then((res)=>{
        console.log(res);
        navigate(`/`)
      })
  }
  return (
    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>
      <div>
        <label>Product Title</label>
        <input data-cy="edit-product-title" type="text" onChange={Handlechange} name="name" />
      </div>
      <div>
        <label>Product Price</label>
        <input data-cy="edit-product-price" type="number" onChange={Handlechange} name="price"/>
      </div>
      <div style={{ textAlign: "right", padding: "5px 0" }}>
        <button data-cy="update-button" onClick={()=>Update(data)}>Update</button>
      </div>
    </div>
  );
};

export default Editpage;
