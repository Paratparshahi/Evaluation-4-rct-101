import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const ProductCard = ({ item }) => {
  const [selink,Setlink]=useState(`/edit/${item.id}`);
 function Delete(){
    axios.delete(`http://localhost:8080/products/${item.id}`)
    .then((res) =>{
      console.log(res);
      axios.get(`http://localhost:8080/products`).then(res=>{
        console.log(res.data)
      })
    });
  }
  return (
    <div data-cy={`product-card-${item.id}`}>
      <div data-cy="product-card-name">{item.name}</div>
      <div data-cy="product-card-category">{item.category}</div>
      <div>
        <img data-cy="product-card-image" src={item.image} alt="Product" />
      </div>
      <div data-cy="product-card-price">€ {item.price}</div>
      <div>
        {/* Add a onClick handler for delete functionality */}
        <button data-cy="delete-button" onClick={Delete}>Delete Product</button>
        {/* Link the Edit button to '/edit/:id' route, so that the user is navigate to the Edit page on button click */}
        <Link to={selink}><button data-cy="edit-button">Edit Product</button></Link>
      </div>
    </div>
  );
};

export default ProductCard;
