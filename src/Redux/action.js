//Write the action creator functions here
import { GET_PRODUCTS_REQUEST, } from "./actionTypes";
import { GET_PRODUCTS_FAILURE } from "./actionTypes";
import { GET_PRODUCTS_SUCCESS } from "./actionTypes";
import { ADD_PRODUCT_REQUEST ,ADD_PRODUCT_SUCCESS,ADD_PRODUCT_FAILURE} from "./actionTypes";
import { EDIT_PRODUCT_REQUEST,EDIT_PRODUCT_SUCCESS,EDIT_PRODUCT_FAILURE } from "./actionTypes";
import { DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_FAILURE,DELETE_PRODUCT_SUCCESS} from "./actionTypes";

export const GetProductreq=()=>{
    return{
        type:GET_PRODUCTS_REQUEST
    }
}
export const GetProductSuccess=(payload)=>{
    return{
        type:GET_PRODUCTS_SUCCESS,
        payload
    }
}
export const GetProductFail=()=>{
    return{
        type:GET_PRODUCTS_FAILURE
    }
}
export const ADDProductReq=()=>{
    return{
        type:ADD_PRODUCT_REQUEST
    }
}
export const ADDProductSUccess=()=>{
    return{
        type:ADD_PRODUCT_SUCCESS
    }
}
export const ADDProductFail=()=>{
    return{
        type:ADD_PRODUCT_FAILURE
    }
}
export const EDitProductREq=()=>{
    return{
        type:EDIT_PRODUCT_REQUEST
    }
}
export const EDitProductSucc=()=>{
    return{
        type:EDIT_PRODUCT_SUCCESS
    }
}
export const EditProductFail=()=>{
    return{
        type:EDIT_PRODUCT_FAILURE
    }
}