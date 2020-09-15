import axios from "axios";
import { CART_ADD_ITEM,CART_REMOVE_ITEM} from "../constants/cartConstants";
import Cookie from 'js-cookie'


const addToCart = (productId, qty)=> async (dispatch, getState) =>{ //after adding item to the can we use getState from thunk para recuperar el item anadido
    
    try{
        const {data}= await axios.get("/api/products/"+ productId)
        
        dispatch({type: CART_ADD_ITEM, payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty

        }})
        const {cart: {cartItems}}= getState()
        Cookie.set("cartItems", JSON.stringify(cartItems))

    }
    catch(error){

    }
}

const removeFromCart = (productId)=> async (dispatch, getState) =>{
    dispatch({type: CART_REMOVE_ITEM, payload: productId})

    const {cart: {cartItems}}= getState()
    Cookie.set("cartItems", JSON.stringify(cartItems))
}

export {addToCart, removeFromCart};