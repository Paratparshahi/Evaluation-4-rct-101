import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { GetProductFail, GetProductSuccess } from "../Redux/action";
export const Productpage = () => {
  const Selector=useSelector(state=>state.products);
  //console.log(Selector)
  function Delete(url){
    axios.delete(url)
    .then((res) =>{
      console.log(res);
      axios.get(url).then(res=>{
        console.log(res.data)
      })
    });
  }
  const dispatch=useDispatch()
  useEffect(()=>{
    axios.get(`http://localhost:8080/products?_sort=price&_order=asc`).then(res=>{
      dispatch(GetProductSuccess(res.data))
    }).catch((err)=>[
      dispatch(GetProductFail())
    ])
    
  },[Delete])
  return (
    <div style={{ width: "100%" }}>
      <div>
        {/* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */
        Selector.map((elem)=>(
          <div>
            <ProductCard item={elem} Delete={Delete}/>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Productpage;
