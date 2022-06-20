import { products } from './contants'
// import {LOADING,LOGIN,products} from './contants'
import axios  from 'axios'

export const loginAction = (username) => {
    return {
        type: "LOGIN",
        payload: username,
         
    }
}
const ProductsAction = (product) => {
    return {
        type: "LOADING",
        payload: product,
    }
}
export const GetProducts=()=>async dispatch=>{
    // const product =await api.get(products)
    axios.get('https://fakestoreapi.com/products')
    .then(function(response) {
        dispatch(ProductsAction(response.data))
      
     
    })
   

}
export const GetCart =(id) =>{
    return {
        type: "CART",
        payload: id,
         
    }
}
export const GetNotices =()=>{
    return {
        type: "NOTICES",
    }
}
export const DeleteItemCart =(id)=>{
    return {
        type: "DELETECART",
        payload: id,
         
    }
}
export const AddQuantity =(id)=>{
    return {
        type: "ADD",
        payload: id,
    }
}
export const SubQuantity =(id)=>{
    return {
        type: "SUB",
        payload: id,
    }
}

