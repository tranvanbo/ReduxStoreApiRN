// import {LOGIN,LOADING,products} from './contants'
const initialState = {
    username:'', 
    product:[],
   cart:[],
   notice:0,
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                username: action.payload,
            }
        case "LOADING":
            return {
                ...state,
                product: action.payload,
            }
        case "CART":
            const newProduct =state.product.find((c) => c.id === action.payload)
            let flag=false
            state.cart.forEach(e => {
                if(e.id===action.payload){
                    e.quantity+=1
                    flag=true
                }
            });
            return {
                ...state,
                cart: flag ?state.cart:[...state.cart,{...newProduct,quantity:1}],

            }
        case "NOTICES":
            return {
                ...state,
                notice:state.cart.length
            }
        case "DELETECART":
            return {
                ...state,
                cart: state.cart.filter((IdItem)=>IdItem.id!==action.payload),
            }
        case "ADD":
            return{
                ...state,
                cart :state.cart.map((item)=>item.id===action.payload?
                { ...item, quantity: item.quantity + 1 } : item),
            }
            case "SUB":
                return{
                    ...state,
                    cart :state.cart.map((item)=>item.id===action.payload && item.quantity>1?
                    { ...item, quantity: item.quantity - 1 } : item),
                }
    }

    return state;
}

export default loginReducer;
