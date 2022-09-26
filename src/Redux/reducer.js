import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};
const sortval={
  Val:""
}
export const reducer = (state = initialState,action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading:true,
      }
    case GET_PRODUCTS_SUCCESS:
      return{
        ...state,
        isLoading:false,
        products:action.payload
      }
    case GET_PRODUCTS_FAILURE:
      return{
        ...state,
        isLoading:false,
        isError:true,
      }
    default:
      return state;
  }
};
export const Reducer2=(state=sortval)=>{
   switch (action.type) {
    case "asc":
      return{
        ...state,
        Val:"asc"
      }
    case "desc":
      return{
        ...state,
        Val:"asc"
      }
    default:
      Val:"";
   }
}
